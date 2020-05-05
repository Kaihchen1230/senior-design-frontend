import { Component, OnInit, Input } from '@angular/core';
import { OwnerInfo } from 'src/app/shared/models/owner-info.model';

@Component({
  selector: 'app-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.css']
})
export class OwnerInfoComponent implements OnInit {

  @Input() ownerInfo: OwnerInfo;

  constructor() { }

  ngOnInit() {}

}
