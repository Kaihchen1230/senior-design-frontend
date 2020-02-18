export class SearchService{
  searchTerm = '';


  changeSearchTerm(term: string) {

    this.searchTerm = term;
  }
}
