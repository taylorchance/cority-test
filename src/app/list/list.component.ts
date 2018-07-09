import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { SAMPLEITEMS } from '../sample-items';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({ height: '*' })),
      state('closed', style({ height: '0px' })),
      transition('closed <=> open', animate(500))
    ])
  ]
})



export class ListComponent implements OnInit {
  state = 'open';
  timeOutRef;
  items = SAMPLEITEMS;
  totalNew = this.items.filter(item => item.new).length;

  constructor() { }

  ngOnInit() {}

  toggleState() {
    this.state = this.state === 'open' ? 'closed' : 'open';
  }

  deleteItem(item) {
    this.items = this.items.filter(x => x !== item);
  }

  openInfo() {
    console.log(`The entire list item including the icon is clickable to open the record.
      Would need to create entire other component to make this fully functional, also there no 
      creative for it, so Im assuming its not in scope`);
  }

}
