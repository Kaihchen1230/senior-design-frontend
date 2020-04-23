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

        // console.log('in fetchRepos map: ', response, ' and this is the type: ', typeof(response));
        const result = [];
        // tslint:disable-next-line: forin
        for (const res in response) {
          result.push(response[res]);
        }

        console.log('this is result: ', result);

        result.forEach(element => {
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
        })
        // response.forEach(element => {
        //   const date = element.updated_at.replace(new RegExp('-', 'g'), '/');

        //   const repo = new Repo(
        //     element.full_name,
        //     element.description,
        //     element.star_count,
        //     date,
        //     element.language,
        //     element.platform
        //   );
        //   repoResults.push(repo);

        // });
        return repoResults;
      }), catchError(errorRes => {
        return throwError(errorRes);
      }));
  }

  fetchRepo(platform: string, repoName: string) {
    // console.log('this is repoName: ', repoName);
    // const repoName = localStorage.getItem('repoName');
    // const platform = localStorage.getItem('platform');
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
        // console.log('this is response in service: ', response);
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

        // console.log('this is repo in srevice: ', repo);
        return repo;
      }),  catchError(errorRes => {

        return throwError(errorRes);
      }));
  }
}
