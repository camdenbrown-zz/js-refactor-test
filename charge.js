/*This allows the developer to a lot of space to add different things dynamically to different types of rentals
Example: If the Product Owner wants to set a base rate for all charges but have each Movie Type can change it's base rate
dynamically when needed this will allow for that.
*/

class Charge {
  constructor(basePrice = 0) {
    this.basePrice = basePrice;
    this.totalAmount = 0;
    this.frequentRentalPoints = 0;
  }

  get getTotalAmount() {
    return this.totalAmount += this.basePrice;
  }

  get getTotalFrequentRentalPoints() {
    return this.frequentRentalPoints;
  }

  calculateAmount(calculation) {
    return this.totalAmount = calculation();
  }

  calculateFrequentRentalPoints(specialRewardCalculation = () => { return 0; }) {
    return this.frequentRentalPoints = 1 + specialRewardCalculation();
  }
}

/*
  NEW RELEASES
 */

class NewReleaseCharge extends Charge {

  constructor(rental) {
    const basePrice = 0;
    super(basePrice, rental);

    this.rental = rental;
    super.calculateAmount(this.calculateCharge.bind(this));
    super.calculateFrequentRentalPoints(this.frequentRentalPointsCalculation.bind(this))
  }

  calculateCharge() {
    return this.rental.daysRented * 3;
  }

  frequentRentalPointsCalculation() {
    return this.rental.daysRented > 1 ? 1 : 0;
  }
}

/*
  REGULAR
 */

class RegularCharge extends Charge {
  constructor(rental) {
    const baseRate = 2;
    super(baseRate);

    this.rental = rental;
    super.calculateAmount(this.calculateCharge.bind(this));
    super.calculateFrequentRentalPoints();
  }

  calculateCharge() {
    if (this.rental.daysRented > 2) {
      return (this.rental.daysRented - 2) * 1.5;
    }
    else {
      return 0;
    }
  }
}

/*
  CHILDREN
 */

class ChildrenCharge extends Charge {
  constructor(rental) {
    const baseRate = 1.5;
    super(baseRate);

    this.rental = rental;
    super.calculateAmount(this.calculateCharge.bind(this));
    super.calculateFrequentRentalPoints();
  }

  calculateCharge() {
    if (this.rental.daysRented > 3)
    {
      return (this.rental.daysRented - 3) * 1.5;
    }
    else {
      return 0;
    }
  }
}
