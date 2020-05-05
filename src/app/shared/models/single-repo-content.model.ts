import { Commit } from './commit-model';

export class SingleRepoContent {

  constructor(public platform: string,
              public web_url: string,
              public full_name: string,
              public language: string,
              public size: number,
              public star_count: number,
              public fork_count: number,
              public description: string,
              public created_at: string,
              public updated_at: string,
              public owner_name: string,
              public avatar_url: string,
              public profile_url: string,
              public commits: Commit[],
              public platform_icon_img?: string,
              public platform_icon_img_alt?: string,
              public repoName?: string) {}

}
