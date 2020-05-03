import { Injectable } from '@angular/core';
import { SearchService } from './search.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Repo } from './repo.model';
import { SingleRepo } from './single-repo.model';

@Injectable()
export class RequestRepoService {

  error = new Subject<string>();
  // https://search-engine-api.herokuapp.com
  url = 'http://localhost:8080/api/v1/';

  constructor(private searchService: SearchService,
              private http: HttpClient) {}

  fetchRepos(searchTerm: string) {

    let searchParams = new HttpParams();
    searchParams = searchParams.append('searchKey', searchTerm);
    const searchURL = this.url + 'search?';
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
          return new Repo(
            repo.full_name,
            repo.description,
            repo.star_count,
            newDate,
            repo.language,
            repo.platform
          ); }
        );
      }), catchError(errorRes => {
        console.log('this is errorRes in fetchRepos service : ', errorRes);
        return throwError(errorRes);
      }));
  }

  fetchRepo(platform: string, repoName: string) {
    const detailURL = this.url + 'detail?';
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

        // tslint:disable-next-line: max-line-length
        const repo = new SingleRepo(repoAvatarURL, imgAlt, responseData[2], responseData[8], responseData[7], responseData[1], responseData[11], responseData[10], responseData[12], responseData[5], responseData[6], responseData[4], responseData[9], responseData[3], responseData[13]);
        return repo;
      }),  catchError(errorRes => {
            console.log('this is errorRes in fetchRepo service : ', errorRes);
            return throwError(errorRes);
      }));
  }
}
