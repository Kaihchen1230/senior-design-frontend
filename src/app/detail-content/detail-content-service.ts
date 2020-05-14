import { Injectable } from '@angular/core';
import { SingleRepoContent } from '../shared/models/single-repo-content.model';
import { OwnerInfo } from '../shared/models/owner-info.model';
import { RepoOverview } from '../shared/models/repo-overview.model';
import { RepoInfo } from '../shared/models/repo-info.model';
import { Commit } from '../shared/models/commit-model';

export interface TrendingGraphInfo {
    endOfWeeks: string[];
    historicalCommitCounts: number[];
    gaps: number[];
    predictCommitCounts: number[];
}

@Injectable({
    providedIn: 'root'
})
export class DetailContentService {

    private _singleRepoContent: SingleRepoContent;
    private _repoOverview: RepoOverview;
    private _ownerInfo: OwnerInfo;
    private _repoInfo: RepoInfo;
    private _commits: Commit[];
    private _trendingGraphInfo: TrendingGraphInfo;

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

        const unknowImg = 'assets/unknown-avatar.jpg';
        const ownerInfo: OwnerInfo = {
            avatarURL: !singleRepoContent.avatar_url || singleRepoContent.avatar_url.includes('null') ? unknowImg : singleRepoContent.avatar_url,
            ownerName: singleRepoContent.owner_name,
            profileURL: singleRepoContent.profile_url
        };

        this._ownerInfo = ownerInfo;

        const repoInfo: RepoInfo = {
            starCount: singleRepoContent.platform !== 'bitbucket' ? singleRepoContent.star_count : 'Unknown',
            forkCount: singleRepoContent.platform !== 'bitbucket' ? singleRepoContent.fork_count : 'Unknown',
            size: singleRepoContent.platform !== 'gitlab' ? singleRepoContent.size : 'Unknown',
            updatedAt: singleRepoContent.updated_at,
            language: singleRepoContent.language
        };



        this._repoInfo = repoInfo;

        this._commits = singleRepoContent.commits;

        const trendingGraphInfo = this.setTrendingGraphInfo(this._commits);

        this._trendingGraphInfo = trendingGraphInfo;
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

    set trendingGraphInfo(trendingGraphInfo: TrendingGraphInfo) {
        this._trendingGraphInfo = trendingGraphInfo;
    }

    get trendingGraphInfo() {
        return this._trendingGraphInfo;
    }

    setTrendingGraphInfo(commits: Commit[]) {
        let UTCdate = new Date().toISOString().split('T')[0];
        UTCdate = UTCdate.split('-').join('/');
        const todayAtUTC = new Date(UTCdate);
        // console.log('this is todayAtUTC: ', todayAtUTC);
        const endOfWeeks: string[] = [];
        const historicalCommitCounts: number[] = [];
        const predictCommitCounts: number[] = [];
        const gaps: number[] = [];
        // console.log('this is commits: ', commits);
        if (commits) {
            let predictCommitCountAmount = 5;
            let startOfHistoricalCommits = 1;
            commits.forEach((commit, index) => {
                const endOfWeek = commit.endOfWeek;
                const yyyymmdd = endOfWeek.split('-').join('/');
                const currentEndOfWeekDate = new Date(yyyymmdd);
                const commitCount = commit.numCommits;
                // console.log('this is  currentEndOfWeekDate: ', currentEndOfWeekDate);
                if (currentEndOfWeekDate > todayAtUTC) {
                    historicalCommitCounts.unshift(NaN);
                    predictCommitCounts.unshift(commitCount);
                    predictCommitCountAmount -= 1;
                } else {
                    historicalCommitCounts.unshift(commitCount);
                    predictCommitCounts.unshift(NaN);
                    startOfHistoricalCommits -= 1;
                }

                if (predictCommitCountAmount === 0 || startOfHistoricalCommits === 0) {
                    gaps.unshift(commitCount);
                    predictCommitCountAmount = 5;
                } else {
                    gaps.unshift(NaN);
                }
                endOfWeeks.unshift(endOfWeek);
            })
            console.log('this is endOfWeeks: ', endOfWeeks);
            console.log('this is historical: ', historicalCommitCounts);
            console.log('this is gaps: ', gaps);
            console.log('this is predict: ', predictCommitCounts);
        }


        return {
            endOfWeeks: endOfWeeks,
            historicalCommitCounts: historicalCommitCounts,
            gaps: gaps,
            predictCommitCounts: predictCommitCounts
        };
    }

}
