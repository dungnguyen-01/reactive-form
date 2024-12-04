// import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
// import { SharedModule } from "../../shared/shared.module";
// import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";


// @Component({
//     selector: 'app-room-type',
//     standalone: true,
//     imports:[SharedModule],
//     templateUrl: './room-type.component.html',
//     styleUrl: './room-type.component.scss'
//   })
//   export class RoomTypeComponent implements OnInit{
//     @Input() roomType!: string; // Nhận loại phòng từ component cha
//     @Input()roomGroup!: FormGroup;
//     @Input() controlName!: string;

//     rooms = Array.from({length: 10}, (_,i) => i +1);
    
//     numberRoom: number = 0;

//     constructor(private fb: FormBuilder) {}

//     ngOnInit(): void {
//      // this.updateRoomAge(3)
//     }

//     onNumberRoomChange(event: any): void {
//       if (event.value === null) {
//         this.numberRoom = 0; // Set the default value when cleared
//       } else {
//         this.numberRoom = event.value; // Assign the selected value
//       }
//       console.log("numberRoom: ", this.numberRoom);
//       this.updateRoomAge(this.numberRoom); // Call your logic
    
//     }

//     get guestsArray() {
//       return this.roomGroup.controls[this.controlName] as FormArray;
//     }


//     updateRoomAge(count: number) {
//       this.guestsArray.clear();
//       if(count) {
//         for (let index = 0; index < count; index++) {
//             this.guestsArray.push(this.fb.group({
//               roomType: this.roomType,
//               numberAge: new FormControl('', [Validators.required, Validators.max(100)]),
//               passengerClub: new FormControl(false),
//               mealSupplement: new FormControl(false)
//             }))
          
//         }
//       }
//     }
   
  
//     markAllControlsAsTouched(formGroup: FormGroup | FormArray) {
//       Object.keys(formGroup.controls).forEach(key => {
//         const control = formGroup.get(key);
//         if (control instanceof FormControl) {
//           control.markAsTouched();
//         } else if (control instanceof FormGroup || control instanceof FormArray) {
//           this.markAllControlsAsTouched(control); // Recursive call for nested controls
//         }
//       })
//     }

//     isValid(formGroup: FormGroup, tag: string): boolean {
//       const control = formGroup.get(tag);
//       return !!control?.touched && control?.invalid;
//     }

//     isValidFormArray(formGroupOrControl: AbstractControl, tag: string): boolean {
//       const control = formGroupOrControl.get(tag);
//       return !!(control && control.touched && control.invalid);
//     }

//     getErrorMessageFormArray(control: AbstractControl, tag: string): string | null {
//       const field = control.get(tag);
//       console.log('field:', field);
//       if (field?.touched && field.invalid) {
//         if (field.hasError('required')) {
//           return 'This field is required.';
//         }
//         if (field.hasError('min')) {
//           return 'Value is too low.';
//         }
//         if (field.hasError('max')) {
//           return 'Value is too high.';
//         }
//       }
//       return null;
//     }

//     getErrorMessage(formGroup: FormGroup, tag: string): string | null {
//       const control = formGroup.get(tag);
//       if (control?.touched && control.invalid) {
//         if (control.errors) { // Check if control.errors is not null or undefined
//           if (control.hasError('required')) {
//             return 'This field is required.';
//           }
//           if (control.hasError('minlength')) {
//             const minLength = control.errors['minlength'].requiredLength;
//             return `This field must be at least ${minLength} characters long.`;
//           }
//           if (control.hasError('maxlength')) {
//             const maxLength = control.errors['maxlength'].requiredLength;
//             return `This field must not exceed ${maxLength} characters.`;
//           }
//         }
//       }
//       return null;
//     }
//  }





import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
    selector: 'app-room-type',
    standalone: true,
    imports:[SharedModule],
    templateUrl: './room-type.component.html',
    styleUrl: './room-type.component.scss'
  })
export class RoomTypeComponent implements OnInit {
  @Input() roomType!: string; // Room type (e.g., Single, Double)
  @Input() roomGroup!: FormArray; // FormArray for this room type

  rooms = Array.from({ length: 10 }, (_, i) => i + 1); // Dropdown options
  numberRoom = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onNumberRoomChange(event: any): void {
    const count = event.value ?? 0; // Default to 0 if cleared
    this.numberRoom = count;
    this.updateRoomAge(count);
  }

  updateRoomAge(count: number): void {
    this.roomGroup.clear(); // Reset guests
    for (let i = 0; i < count; i++) {
      this.roomGroup.push(
        this.fb.group({
          roomType: this.roomType,
          numberAge: new FormControl('', [
            Validators.required,
            Validators.max(100),
          ]),
          passengerClub: new FormControl(false),
          mealSupplement: new FormControl(false),
        })
      );
    }
  }

  convert(guest: any) {
    return guest as FormGroup;
  }

  isValid(control: any): boolean {
    return control.touched && control.invalid;
  }

  getErrorMessage(control: any): string | null {
    if (control.touched && control.invalid) {
      if (control.hasError('required')) {
        return 'This field is required.';
      }
      if (control.hasError('max')) {
        return 'Value must not exceed 100.';
      }
    }
    return null;
  }
}
