import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ChildrenComponent } from "../children/children.component";
import { ChildFormArrayComponent } from "../child-form-array/child-form-array.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [SharedModule, ChildrenComponent, ChildFormArrayComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit{

  constructor(private fb: FormBuilder) {}

  mainForm!: FormGroup;

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      roles: this.fb.array([])
  });
    
  }

  onSubmit() {
    console.warn("value: ", this.mainForm.value);
  }

}
