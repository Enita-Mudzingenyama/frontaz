import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentComponent {
  appointmentForm: FormGroup;
  showSuccessMessage: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.appointmentForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      location: ['', Validators.required],
      doctorRequested: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      appointmentTime: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      // Handle the form submission, e.g., send the data to a backend service
      console.log('Form submitted:', this.appointmentForm.value);
      this.showSuccessMessage = true;
      this.appointmentForm.reset();
    }
  }
}