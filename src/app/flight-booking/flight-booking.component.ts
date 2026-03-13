import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrl: './flight-booking.component.scss'
})
export class FlightBookingComponent {
  tripType: string = '';
  departOn: string = '';
  returnOn: string = '';
  today: string = new Date().toISOString().split('T')[0];
  hasSubmitted: boolean = false;
  confirmationText: string = '';
  isPopupOpen: boolean = false;

  get minReturnDate(): string {
    if (this.departOn) {
      return this.departOn;
    }

    return this.today;
  }

  onSubmit(): void {
    this.hasSubmitted = true;

    if (this.isSubmissionInvalid()) {
      this.confirmationText = '';
      this.isPopupOpen = false;
      return;
    }

    if (this.tripType === 'one-way') {
      this.confirmationText = `You have booked a one-way flight on ${this.departOn}`;
      this.isPopupOpen = true;
      return;
    }

    this.confirmationText = `You have booked a return flight, departing on ${this.departOn} and returning on ${this.returnOn}`;
    this.isPopupOpen = true;
  }

  isSubmissionInvalid(): boolean {
    if (!this.tripType || !this.departOn || this.departOn < this.today) {
      return true;
    }

    if (this.tripType !== 'return') {
      return false;
    }

    if (!this.returnOn) {
      return true;
    }

    return this.returnOn < this.minReturnDate;
  }

  closePopup(): void {
    this.isPopupOpen = false;
  }
}
