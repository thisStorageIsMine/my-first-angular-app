import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly url = 'http://localhost:3000/locations';




  async getAllHousingLocation(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);

    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);

    return data.json() ?? {}
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Home application received to: ${firstName} ${lastName}, ${email}`);
  }

  constructor() { }
}
