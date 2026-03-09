import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = '';
  email = '';
  dateofbirth = '';
  count = 0;

  onReset(){
    this.name = '';
    this.email = '';
    this.dateofbirth = '';
  }

  onSave(){
    console.log(this.name);
    console.log(this.email);
    console.log(this.dateofbirth)
    this.count++;
  }

}
