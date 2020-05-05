import { Injectable } from '@angular/core';
import { SingleRepoContent } from '../shared/models/single-repo-content.model';
import { OwnerInfo } from '../shared/models/owner-info.model';
import { RepoOverview } from '../shared/models/repo-overview.model';
import { RepoInfo } from '../shared/models/repo-info.model';
import { Commit } from '../shared/models/commit-model';

@Injectable({
    providedIn: 'root'
})
export class DetailContentService {

    private _singleRepoContent: SingleRepoContent;
    private _repoOverview: RepoOverview;
    private _ownerInfo: OwnerInfo;
    private _repoInfo: RepoInfo;
    private _commits: Commit[];
    
    constructor() {}

    set singleRepoContent(singleRepoContent: SingleRepoContent) {
        this._singleRepoContent = { ... singleRepoContent };

        const repoOverview: RepoOverview = {
            platformIconImg: singleRepoContent.platform_icon_img,
            platformIconImgAlt: singleRepoContent.platform_icon_img_alt,
            repoName: singleRepoContent.repoName,
            createdAt: singleRepoContent.created_at, 
            description: singleRepoContent.description,
            webURL: singleRepoContent.web_url
        };

        this._repoOverview = repoOverview;

        const unknowImg = 'https://4mng2jkocx-flywheel.netdna-ssl.com/wp-content/uploads/2013/08/unknown-avatar.jpg';
        
        const ownerInfo: OwnerInfo = {
            avatarURL: singleRepoContent.avatar_url ? singleRepoContent.avatar_url : unknowImg,
            ownerName: singleRepoContent.owner_name,
            profileURL: singleRepoContent.profile_url
        };
        
        this._ownerInfo = ownerInfo;
        
        const repoInfo: RepoInfo = {
            starCount: singleRepoContent.star_count,
            forkCount: singleRepoContent.fork_count,
            size: singleRepoContent.size,
            updatedAt: singleRepoContent.updated_at,
            language: singleRepoContent.language
        };

        this._repoInfo = repoInfo;

        this._commits = singleRepoContent.commits;
    }

    get singleRepoContent(): SingleRepoContent {
        return { ... this._singleRepoContent };
    }

    set repoOverview(repoOverview: RepoOverview) {
        this._repoOverview = repoOverview;
    }

    get repoOverview() {
        return { ... this._repoOverview };
    }

    set ownerInfo(ownerInfo: OwnerInfo) {
        this._ownerInfo = ownerInfo;
    }
    get ownerInfo() {
        return { ... this._ownerInfo };
    }
    set repoInfo(repoInfo: RepoInfo) {
        this._repoInfo = repoInfo;
    }

    get repoInfo() {
        return { ... this._repoInfo };
    }
    
    set commits(commits: Commit[]) {
        this._commits = commits;
    }

    get commits() {
        return this._commits;
    }
}