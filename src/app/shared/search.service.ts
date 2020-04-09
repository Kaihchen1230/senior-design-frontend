export class SearchService {
  searchTerm = '';
  repoName = '';

  changeSearchTerm(term: string) {
    this.searchTerm = term;
  }

  saveSearchTerm(term: string) {
    localStorage.setItem('searchTerm', term);
  }

}
