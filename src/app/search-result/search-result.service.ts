import { Injectable } from '@angular/core';
import { Repo } from '../shared/repo.model';

@Injectable({ providedIn: 'root' })
export class SearchResultService {
    private searchResults: Repo[] = [];

    constructor() {}

    getSearchResult() {
        return this.searchResults.slice();
    }

    setSearchResult(results: Repo[]) {
        this.searchResults = [...results];
        localStorage.setItem('searchResults', JSON.stringify(this.searchResults));
    }
}
