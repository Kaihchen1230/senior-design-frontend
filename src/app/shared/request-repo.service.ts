import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Repo } from './models/repo.model';
import { SingleRepoContent } from './models/single-repo-content.model';
import {SearchResultService} from '../search-result/search-result.service';
import {environment} from '../../environments/environment';
import { DetailContentService } from '../detail-content/detail-content-service';
import { faGithub, faGitlab, faBitbucket, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Injectable({providedIn: 'root'})
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
        return repos.map(repo => {
          const newDate = repo.updated_at.replace(new RegExp('-', 'g'), '/');
          const newLanguage = this.converLanguage(repo.language);
          const platformIcon = this.checkPlatform(repo.platform);
          return new Repo(
            repo.full_name,
            repo.description,
            repo.star_count,
            newDate,
            newLanguage,
            repo.platform,
            null,
            platformIcon
          ); }
        );
      }),
      tap(repos => {
        repos.sort(this.compareRepo);
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

  compareRepo(repoA: Repo, repoB: Repo) {
    if (repoA.starCount < repoB.starCount) {
      return 1;
    } else if (repoA.starCount > repoB.starCount) {
      return -1;
    } else if (repoB.platform === 'github') {
      return 1;
    } else if (repoB.platform === 'gitlab' && repoA.platform !== 'github') {
      return 1;
    }
    return -1;
  }

  fetchRepo(platform: string, ownerNameAndRepoName: string) {
    const detailURL = this.BACKEND_API + 'detail?';
    let searchParams = new HttpParams();
    searchParams = searchParams.append('platform', platform);
    searchParams = searchParams.append('full_name', ownerNameAndRepoName);

    return this.http
      .get<SingleRepoContent>(detailURL, {
        params: searchParams
      })
      .pipe(map(response => {
        let platformAvatarURL = '';
        let imgAlt = '';

        if (!response.language) {
          response.language = 'Unknown';
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
                            repoName
                          };

      }),
      tap(repoInfo => {
        this.detailContentService.singleRepoContent = repoInfo;
      }),
      catchError(errorRes => {
            return throwError(errorRes);
      }));
  }

  getRepoName(ownerNameAndRepoName: string) {
    const index = ownerNameAndRepoName.indexOf('/');
    const repoName = ownerNameAndRepoName.slice(index + 1);
    return repoName;
  }

  checkPlatform(platform: string) {

    let platformIcon: IconDefinition;
    if (platform === 'github') {
      platformIcon = faGithub;
    } else if (platform === 'gitlab') {
      platformIcon = faGitlab;
    } else {
      platformIcon = faBitbucket;
    }

    return platformIcon;
  }
}
