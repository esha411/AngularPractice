import { Component, Output, EventEmitter,Input, input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() childName = '';
  @Input() childDataSource = '';
  @Input() cardData: any = null;

  @Output() titleChangeEvent = new EventEmitter();

  onSaveClick() {
    console.log(this.cardData);
    this.titleChangeEvent.emit();
  }

}

