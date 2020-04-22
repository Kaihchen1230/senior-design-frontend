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
export class SingleRepo {

  constructor(public repoAvatarURL: string,
              public imgAlt: string,
              public repoName: string,
              public createdDate: string,
              public description: string,
              public repoURL: string,
              public ownerAvatarUrl: string,
              public ownerName: string,
              public ownerURL: string,
              public starCount: number,
              public forkCount: number,
              public size: number,
              public lastUpdated: string,
              public language: string,
              public commits: []) {}
}
