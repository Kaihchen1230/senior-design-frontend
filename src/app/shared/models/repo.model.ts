export class Repo {
  public repoName: string;
  public description: string;
  public starCount: number;
  public lastUpdated: string;
  public language: string;
  public platform: string;

  constructor(repoName: string, description: string, starCount: number, lastUpdated: string, language: string, platform: string) {
    this.repoName = repoName;
    this.description = description;
    this.starCount = starCount;
    this.lastUpdated = lastUpdated;
    this.language = language;
    this.platform = platform;
  }
}
