import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cakeinfo',
  templateUrl: './cakeinfo.component.html',
  styleUrls: ['./cakeinfo.component.css']
})
export class CakeinfoComponent implements OnInit {

  @Input() cakeToShow:any;
  @Input() avg:any;
  
  constructor() { }

  ngOnInit() {
  }

}
