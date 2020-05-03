import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Repo } from './models/repo.model';
import { SingleRepo } from './models/single-repo.model';
import {SearchResultService} from '../search-result/search-result.service';
import {environment} from '../../environments/environment';

@Injectable()
export class RequestRepoService {
  BACKEND_API = environment.LOCAL_API;

  constructor(private http: HttpClient, private searchResultService: SearchResultService ) {}

  fetchRepos(searchTerm: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('searchKey', searchTerm);
    const searchURL = this.BACKEND_API + 'search?';

    return this.http
      .get<any[]>(
        searchURL,
        {
          params: searchParams
        })
      .pipe(map(repos => {
        console.log('this is result: ', repos);
        return repos.map(repo => {
          const newDate = repo.updated_at.replace(new RegExp('-', 'g'), '/');
          const newLanguage = this.converLanguage(repo.language);
          return new Repo(
            repo.full_name,
            repo.description,
            repo.star_count,
            newDate,
            newLanguage,
            repo.platform
          ); }
        );
      }),
      tap(repos => {
        this.searchResultService.setSearchResult(repos);
      }),
      catchError(errorRes => {
        return throwError(errorRes);
      }));
  }

  converLanguage(language: string) {
    if (!language) {
      return 'Unknown';
    } else {
      let newLanguage = language.toLocaleLowerCase();
      newLanguage = newLanguage.charAt(0).toUpperCase() + newLanguage.slice(1);
      return newLanguage;
    }
  }

  fetchRepo(platform: string, repoName: string) {
    const detailURL = this.BACKEND_API + 'detail?';
    let searchParams = new HttpParams();
    searchParams = searchParams.append('platform', platform);
    searchParams = searchParams.append('full_name', repoName);
    return this.http
      .get(detailURL, {
        params: searchParams
      })
      .pipe(map(response => {
        let repoAvatarURL = '';
        let imgAlt = '';
        if ( platform === 'github') {
          repoAvatarURL = 'https://cdn1.iconfinder.com/data/icons/capsocial/500/github-512.png';
          imgAlt = 'GitHub logo image';
        } else if ( platform === 'gitlab') {
          repoAvatarURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/GitLab_Logo.svg/1200px-GitLab_Logo.svg.png';
          imgAlt = 'GitLab logo image';
        } else {
          repoAvatarURL = 'https://poeditor.com/blog/wp-content/uploads/2014/06/bitbucket-logo.png';
          imgAlt = 'Bitbucket logo image';
        }
        const responseData = Object.values(response);
        console.log('this is responseData: ', responseData);
        /*
          0. platform
          1. web_url
          2. full_name
          3. language
          4. size
          5. star_count
          6. fork_count
          7. description
          8. created_at
          9. updated_at
          10. owner_name
          11. avatar_url
          12. profile_url
          13. commits
        */
        const repo = new SingleRepo(
          repoAvatarURL, imgAlt, responseData[2], responseData[8], responseData[7],
          responseData[1], responseData[11], responseData[10], responseData[12],
          responseData[5], responseData[6], responseData[4], responseData[9],
          responseData[3], responseData[13]);
        return repo;
      }),  catchError(errorRes => {
            console.log('this is errorRes in fetchRepo service : ', errorRes);
            return throwError(errorRes);
      }));
  }
}
