import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { SearchService } from '../shared/search.service';
import { faSearch, faStar, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  term: string = '';
  searchIcon = faSearch;
  firstEnter = true;

  exampleRepo = {
    repoName: 'react',
    discription: 'Mollit eiusmod sunt fugiat dolor non. Proident aute anim magna pariatur anim. Dolor aliquip magna ipsum enim laborum. Id sit irure enim incididunt non aliquip est voluptate voluptate nulla aute. Lorem proident consectetur adipisicing velit ad. Eiusmod officia voluptate minim amet ex culpa voluptate Lorem deserunt est mollit irure. Incididunt amet nulla consectetur culpa elit minim cupidatat ex commodo irure ullamco exercitation qui.',
    star: 12,
    lastUpdate: '2/1/2020',
    language: 'jax',
    platform: 'github'
  }

  constructor(private searchService: SearchService) { }

  ngOnInit() {

    this.term = this.searchService.searchTerm;

    let canvas = d3.select('.container')
                    .append('svg')
                    .attr('width', 500)
                    .attr('height', 500);

    let circle = canvas.append('circle')
                       .attr('cx', 250)
                       .attr('cy',250)
                       .attr('r', 50)
                       .attr('fill', 'red')
  }

}
