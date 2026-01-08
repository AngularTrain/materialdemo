import { Component, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, MatButtonToggleModule, ReactiveFormsModule, FormsModule],
  template: `
    <h1>Welcome to Angular Material!</h1>

    <h2>Using Slide Toggle</h2>
    <mat-slide-toggle [formControl]="slideToggleControl">Toggle me!</mat-slide-toggle>
    <p>Toggle is: {{ slideToggleControl.value }}</p>

    <h2>Using Button Toggle</h2>
    <mat-button-toggle-group [formControl]="fontStyleControl" aria-label="Font Style">
      <mat-button-toggle value="bold">Bold</mat-button-toggle>
      <mat-button-toggle value="italic">Italic</mat-button-toggle>
      <mat-button-toggle value="underline">Underline</mat-button-toggle>
    </mat-button-toggle-group>
    <p>Chosen value is: {{ fontStyleControl.value }}</p>

  `,
})
export class App {
  fontStyleControl = new FormControl('pick one');
  slideToggleControl = new FormControl(false);
}
