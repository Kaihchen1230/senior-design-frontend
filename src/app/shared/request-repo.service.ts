import { Injectable } from '@angular/core';
import { SearchService } from './search.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Repo } from './repo.model';
import { SingleRepo } from './single-repo.model';

@Injectable()
export class RequestRepoService {

  url = 'https://search-engine-test1.herokuapp.com/api/v1/';

  constructor(private searchService: SearchService,
              private http: HttpClient) {}

  fetchRepos(searchTerm: string) {

    let searchParams = new HttpParams();
    searchParams = searchParams.append('searchKey', searchTerm);
    const searchURL = this.url + 'search?';
    return this.http
      .get(
        searchURL,
        {
          params: searchParams
        })
      .pipe(map(response => {
        const repoResults: Repo[] = [];

        response.forEach(element => {
          const date = element.updated_at.replace(new RegExp('-', 'g'), '/');

          const repo = new Repo(
            element.full_name,
            element.description,
            element.star_count,
            date,
            element.language,
            element.platform
          );
          repoResults.push(repo);

        });
        return repoResults;
      }));
  }

  fetchRepo() {
    const repoName = localStorage.getItem('repoName');
    const platform = localStorage.getItem('platform');
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
        console.log('this is response in service: ', response);
        if (localStorage.getItem('platform') === 'github') {
          repoAvatarURL = 'https://cdn1.iconfinder.com/data/icons/capsocial/500/github-512.png';
          imgAlt = 'GitHub logo image';
        } else if (localStorage.getItem('platform') === 'gitlab') {
          repoAvatarURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/GitLab_Logo.svg/1200px-GitLab_Logo.svg.png';
          imgAlt = 'GitLab logo image';
        } else {
          repoAvatarURL = 'https://poeditor.com/blog/wp-content/uploads/2014/06/bitbucket-logo.png';
          imgAlt = 'Bitbucket logo image';
        }



        // tslint:disable-next-line: max-line-length
        const repo = new SingleRepo(repoAvatarURL, imgAlt, response.full_name, response.created_at, response.description, response.web_url, response.avatar_url, response.owner_name, response.profile_url, response.star_count, response.fork_count, response.size, response.updated_at, response.language, response.commits);

        // console.log('this is repo in srevice: ', repo);
        return repo;
      }));
  }
}
