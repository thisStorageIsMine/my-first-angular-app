import { Component, inject } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService)

  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl("")
  })

  housingLocationId: number;
  housingLocation: Housinglocation | undefined;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params["id"]);

    this.housingService.getHousingLocationById(this.housingLocationId).then(house => {

      this.housingLocation = house;
    })
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? "",
    )
  }

}
