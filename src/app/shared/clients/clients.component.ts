import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { Testimonial } from './clients.model';
import { testimonialData } from './data';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})

/**
 * Clients component
 */
export class ClientsComponent implements OnInit {

  testimonialData: Testimonial[];

  constructor() { }


  num: number = 0;
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 0,
  };

  testimonialOptions: OwlOptions = {
    margin: 10,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
    },
    nav: true,
    navText: ['<i class=\'mdi mdi-chevron-left\'></i>', '<i class=\'mdi mdi-chevron-right\'></i>'],
  };

  ngOnInit(): void {
    this._fetchData();
  }

  private _fetchData() {
    this.testimonialData = testimonialData;
  }
}
