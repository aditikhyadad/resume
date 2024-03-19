import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'familyHistory';

  constructor(private router: Router) {}

  /*navigateToPrint(): void {
    this.router.navigate(['/print']);
    //window.open('/print', '_blank');
  }*/
}
