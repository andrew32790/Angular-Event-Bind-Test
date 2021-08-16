import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onNumberRun(runNumber: number) {
    if (runNumber % 2 === 0) {
      this.evenNumbers.push(runNumber);
    } else {
      this.oddNumbers.push(runNumber);
    }
  }
}
