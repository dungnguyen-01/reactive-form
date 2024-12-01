import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { RoomTypeComponent } from '../room-type/room-type.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-room-selection',
  standalone: true,
  imports: [SharedModule,RoomTypeComponent],
  templateUrl: './room-selection.component.html'
})
export class RoomSelectionComponent implements OnInit {
  roomForm: FormGroup;
  roomTypes = ['Single', 'Double', 'Triple'];

  constructor(private fb: FormBuilder) {
    this.roomForm = this.fb.group({
      selectedRooms: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  get selectedRooms(): FormArray {
    return this.roomForm.get('selectedRooms') as FormArray;
  }

  addRoom(type: string): void {
    const roomGroup = this.fb.group({
      type,
      numberOfRooms: 1, // Default số lượng phòng là 1
      guests: this.fb.array([]),
    });

    this.selectedRooms.push(roomGroup);
  }

  onRoomUpdate(index: number, guests: any[]): void {
    this.selectedRooms.at(index).get('guests')?.setValue(guests, { emitEvent: false });
  }

  submit(): void {
    console.log(this.roomForm.value);
  }
}
