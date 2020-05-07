import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export class Repo {
  

  constructor(public repoName: string,
              public description: string,
              public starCount: number,
              public lastUpdated: string,
              public language: string,
              public platform: string,
              public logoUrl?: string,
              public platformIcon?: IconDefinition
              ) {}
}
