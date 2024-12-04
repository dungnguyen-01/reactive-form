// import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
// import { FormBuilder, FormArray, FormGroup, AbstractControl } from '@angular/forms';
// import { RoomTypeComponent } from '../room-type/room-type.component';
// import { SharedModule } from '../../shared/shared.module';

// @Component({
//   selector: 'app-room-selection',
//   standalone: true,
//   imports: [SharedModule,RoomTypeComponent],
//   templateUrl: './room-selection.component.html'
// })
// export class RoomSelectionComponent implements OnInit {
//   roomForm!: FormGroup;
//   roomTypes = ['Single', 'Double', 'Suite']; // Example room types

//   constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
//   }

//   ngOnInit(): void {
//     this.roomForm = this.fb.group({
//       guests: this.fb.array([], this.guestsArrayNotEmpty),
//     });
//   }

//   guestsArrayNotEmpty(control: AbstractControl): {[key: string]: boolean} | null {
//     const array = control as FormArray;
//     return array.length > 0 ? null : {emptyGuests: true};
//   }

//   get isFormInvalid(): boolean {
//     return this.roomForm.invalid;
//   }
  


//   submit(): void {
//     console.log(this.roomForm.value);
//   }
// }


import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, AbstractControl } from '@angular/forms';
import { RoomTypeComponent } from '../room-type/room-type.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-room-selection',
  standalone: true,
  imports: [SharedModule,RoomTypeComponent],
  templateUrl: './room-selection.component.html'
})
export class RoomSelectionComponent implements OnInit {
  roomForm!: FormGroup;
  roomTypes = ['Single', 'Double', 'Suite']; // Example room types

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.roomForm = this.fb.group({
      Single: this.fb.array([]),
      Double: this.fb.array([]),
      Suite: this.fb.array([]),
    });
  }

  guestsArrayNotEmpty(control: FormArray): { [key: string]: boolean } | null {
    return control.length > 0 ? null : { emptyGuests: true };
  }

  getRoomGuests(roomType: string): FormArray {
    return this.roomForm.get(roomType) as FormArray;
  }

  get isFormInvalid(): boolean {
    return this.roomForm.invalid;
  }

  submit(): void {
    console.log(this.roomForm.value);
  }
}
