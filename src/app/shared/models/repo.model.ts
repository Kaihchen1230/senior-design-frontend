export class Repo {
  
  constructor(public repoName: string,
              public description: string,
              public starCount: number,
              public lastUpdated: string,
              public language: string,
              public platform: string,
              public logoUrl: string,
              public platformIcon?: Object,
              public starIcon?: Object
              ) {}
}
