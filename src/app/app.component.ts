import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'retrieving-query-parameters-fragments';
  goToParent(id: number) {
    this.router.navigate(['/parent', id, 'edit'], {
      queryParams: { allowEdit: id },
      fragment: 'loading',
    });
  }
}
