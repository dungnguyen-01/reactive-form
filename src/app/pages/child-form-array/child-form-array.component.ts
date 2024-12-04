import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-form-array',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './child-form-array.component.html',
  styleUrl: './child-form-array.component.scss'
})
export class ChildFormArrayComponent implements OnInit{

  @Input() mainForm!: FormGroup;

  @Input() controlName!: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addRole();
  }

  get rolesArray() {
    return this.mainForm.controls[this.controlName] as FormArray;
  }

  addRole() {
    const count = 3;

    for (let index = 0; index < 3; index++) {
      this.rolesArray.push(this.fb.group({
        name: new FormControl('', [Validators.required])
      }))
    }
  }

}
