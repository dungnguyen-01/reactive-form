import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { PracticeFormComponent } from './pages/practice-form/practice-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomSelectionComponent } from "./pages/room-selection/room-selection.component";
import { ParentComponent } from "./pages/parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PracticeFormComponent, SharedModule, CommonModule, ReactiveFormsModule, RoomSelectionComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practice-form';
}
