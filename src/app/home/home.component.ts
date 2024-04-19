import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  template: `
    <section class="search">
      <form class="search__form">
        <input type="text" class="search__input" placeholder="Filter by city" #filter>
        <button class="search__submit" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location 
        *ngFor="let housingLocation of filteredLocationList"
        [oleg]="housingLocation"  
      ></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocationList: Housinglocation[] = [];
  filteredLocationList: Housinglocation[] = [];

  constructor() {

    this.housingService.getAllHousingLocation().then(data => {
      this.housingLocationList = data;
      this.filteredLocationList = data;
    })

  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(house => house.city.toLowerCase().includes(text.toLowerCase()))
  }

}
