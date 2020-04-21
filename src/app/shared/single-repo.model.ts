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
