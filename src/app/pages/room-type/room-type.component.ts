import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
    selector: 'app-room-type',
    standalone: true,
    imports:[SharedModule],
    templateUrl: './room-type.component.html',
    styleUrl: './room-type.component.scss'
  })
  export class RoomTypeComponent implements OnInit{
    @Input() roomType!: string; // Nhận loại phòng từ component cha
    @Output() updateGuests = new EventEmitter<any[]>(); // Gửi dữ liệu về component cha
  
    roomGroup!: FormGroup;
    rooms = Array.from({length: 10}, (_,i) => i +1);

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
      this.roomGroup = this.fb.group({
        name: new FormControl('Brian nguyen', [Validators.required]),
        room: new FormControl(''),
        guests: this.fb.array([])
      })
      this.changeRoom();
    }

    get guestsArray() {
      return this.roomGroup.controls["guests"] as FormArray;
    }

    changeRoom() {
      this.roomGroup.get('room')?.valueChanges.subscribe(x => {
        console.log("x: "+x)
        this.updateRoomAge(x);
      })

    }

    updateRoomAge(count: number | null) {
      const guestsArray = this.guestsArray;
      guestsArray.clear();

      if(count) {
        for (let index = 0; index < count; index++) {
            this.guestsArray.push(this.fb.group({
              numberAge: new FormControl('', [Validators.required, Validators.max(3)])
            }))
          
        }
      }
      this.emitGuests();
    }
    private emitGuests(): void {
      this.updateGuests.emit(this.guestsArray.value);
    }
    onInputChange(): void {
      this.emitGuests();
    }

    onSubmit() {
      this.markAllControlsAsTouched(this.roomGroup)
      if (this.roomGroup.valid) {
        console.log('Form Value:', this.roomGroup.value);
      } else {
        console.log('Form is invalid');
      }
    }

    markAllControlsAsTouched(formGroup: FormGroup | FormArray) {
      Object.keys(formGroup.controls).forEach(key => {
        const control = formGroup.get(key);
        if (control instanceof FormControl) {
          control.markAsTouched();
        } else if (control instanceof FormGroup || control instanceof FormArray) {
          this.markAllControlsAsTouched(control); // Recursive call for nested controls
        }
      })
    }

    isValid(formGroup: FormGroup, tag: string): boolean {
      const control = formGroup.get(tag);
      return !!control?.touched && control?.invalid;
    }

    isValidFormArray(formGroupOrControl: AbstractControl, tag: string): boolean {
      const control = formGroupOrControl.get(tag);
      return !!(control && control.touched && control.invalid);
    }

    getErrorMessageFormArray(control: AbstractControl, tag: string): string | null {
      const field = control.get(tag);
      console.log('field:', field);
      if (field?.touched && field.invalid) {
        if (field.hasError('required')) {
          return 'This field is required.';
        }
        if (field.hasError('min')) {
          return 'Value is too low.';
        }
        if (field.hasError('max')) {
          return 'Value is too high.';
        }
      }
      return null;
    }

    getErrorMessage(formGroup: FormGroup, tag: string): string | null {
      const control = formGroup.get(tag);
      if (control?.touched && control.invalid) {
        if (control.errors) { // Check if control.errors is not null or undefined
          if (control.hasError('required')) {
            return 'This field is required.';
          }
          if (control.hasError('minlength')) {
            const minLength = control.errors['minlength'].requiredLength;
            return `This field must be at least ${minLength} characters long.`;
          }
          if (control.hasError('maxlength')) {
            const maxLength = control.errors['maxlength'].requiredLength;
            return `This field must not exceed ${maxLength} characters.`;
          }
        }
      }
      return null;
    }
 }