import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itinerary-card',
  templateUrl: './itinerary-card.component.html',
  styleUrls: ['./itinerary-card.component.scss']
})
export class ItineraryCardComponent implements OnInit {

  @Input('name')
  name!: string;
  @Input('businessHours')
  businessHours!: string;
  @Input('address')
  address!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
