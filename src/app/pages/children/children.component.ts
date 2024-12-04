import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent {

  @Input() mainFrom!: FormGroup;
  @Input() controlName!: string;
  @Output() updateData = new EventEmitter();




}
