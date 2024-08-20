import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AppointmentRequest {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  location: string;
  doctorRequested: string;
  appointmentDate: string;
  appointmentTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'https://your-backend-api.com/appointments';

  constructor(private http: HttpClient) {}

  bookAppointment(appointment: AppointmentRequest): Observable<any> {
    return this.http.post(this.apiUrl, appointment);
  }
}