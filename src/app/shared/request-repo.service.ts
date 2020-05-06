import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Repo } from './models/repo.model';
import { SingleRepoContent } from './models/single-repo-content.model';
import {SearchResultService} from '../search-result/search-result.service';
import {environment} from '../../environments/environment';
import { DetailContentService } from '../detail-content/detail-content-service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGitlab, faBitbucket } from '@fortawesome/free-brands-svg-icons';
@Injectable()
export class RequestRepoService {
  // BACKEND_API = environment.LOCAL_API;
  BACKEND_API = environment.BACKEND_API;


  constructor(private http: HttpClient,
              private searchResultService: SearchResultService,
              private detailContentService: DetailContentService ) {}

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
          const platformIcon = this.checkPlatform(repo.platform);
          const starIcon = faStar;
          return new Repo(
            repo.full_name,
            repo.description,
            repo.star_count,
            newDate,
            newLanguage,
            repo.platform,
            platformIcon,
            starIcon
          ); }
        );
      }),
      tap(repos => {
        this.searchResultService.setSearchResult(repos);
      }),
      catchError(errorRes => {
        console.log('this is error: ', errorRes);
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

  fetchRepo(platform: string, ownerNameAndRepoName: string) {
    const detailURL = this.BACKEND_API + 'detail?';
    console.log('platform: ', platform);
    let searchParams = new HttpParams();
    searchParams = searchParams.append('platform', platform);
    searchParams = searchParams.append('full_name', ownerNameAndRepoName);

    return this.http
      .get<SingleRepoContent>(detailURL, {
        params: searchParams
      })
      .pipe(map(response => {
        console.log('response: ', response);
        let platformAvatarURL = '';
        let imgAlt = '';

        if (response.language === null) {
          response.language = 'Unkown';
        }
        if (platform === 'github') {
          platformAvatarURL = 'https://cdn1.iconfinder.com/data/icons/capsocial/500/github-512.png',
          imgAlt =  'GitLab logo image';
        } else if (platform === 'gitlab') {
          platformAvatarURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/GitLab_Logo.svg/1200px-GitLab_Logo.svg.png';
          imgAlt = 'GitLab logo image';
        } else {
          platformAvatarURL = 'https://poeditor.com/blog/wp-content/uploads/2014/06/bitbucket-logo.png';
          imgAlt = 'Bitbucket logo image';
        }
        const repoName = this.getRepoName(ownerNameAndRepoName);
        return response = { ... response,
                            platform_icon_img: platformAvatarURL,
                            platform_icon_img_alt: imgAlt,
                            repoName: repoName
                          };

      }),  
      tap(repoInfo => {
        this.detailContentService.singleRepoContent = repoInfo;
      }),      
      catchError(errorRes => {
            return throwError(errorRes);
      }));
  }

  getRepoName (ownerNameAndRepoName: string) {
    const index = ownerNameAndRepoName.indexOf('/');
    const repoName = ownerNameAndRepoName.slice(0,index);
    return repoName;
  }

  checkPlatform(platform: string) {

    return platform === 'github' ? faGithub : platform === 'gitlab' ? faGitlab : faBitbucket;
  }
}
