import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Angular Test';

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
}
