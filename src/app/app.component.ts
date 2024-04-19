import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: ` 
  <main class="main">
    <a [routerLink]="['/']" class="main__title">Home</a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
    `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'homes';
}
