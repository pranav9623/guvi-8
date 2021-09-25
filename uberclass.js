"use strict";

class uber {
  constructor(name, pickupLocation, dropLocation, distance) {
    this.name = name;
    this.pickupLocation = pickupLocation;
    this.dropLocation = dropLocation;
    this.distance = distance;
  }
  calculateFare() {
    if (this.distance < 2) {
      return "Rs." + 48; // Base price Rs. 48
    } else {
      return "Rs. " + (48 + this.distance * 12);
    }
  }
}

const uber1 = new uber("Ram", "KN Colony", "Secunderabad", 22);

console.log(`The fare for the trip is ${uber1.calculateFare()}`);
