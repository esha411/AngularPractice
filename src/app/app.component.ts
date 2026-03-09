import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = new FormControl('');
  email = new FormControl('');
  dateofbirth = new FormControl('');
  count = 0;

  onReset(){
    this.name.reset();
    this.email.reset();
    this.dateofbirth.reset();
  }

  onSave(){
    console.log(this.name.value);
    console.log(this.email.value);
    console.log(this.dateofbirth.value)
    this.count++;
  }

}
