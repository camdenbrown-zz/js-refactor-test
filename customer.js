// class Customer {
//   constructor(name) {
//     this.name = name;
//     this.rentals = [];
//   }
//
//   addRental(rental) {
//     this.rentals.push(rental);
//   }
//
//   get statement() {
//     var totalAmount = 0;
//     var frequentRenterPoints = 0;
//
//     var result = "Rental record for " + this.name + "\n\n";
//     for (var i = 0; i < this.rentals.length; i++) {
//
//       var rental = this.rentals[i];
//       var amount = 0;
//
//       switch (rental.movie.priceCode) {
//         case Movie.REGULAR:
//           amount += 2;
//           if (rental.daysRented > 2)
//             amount += (rental.daysRented - 2) * 1.5;
//           break;
//         case Movie.NEW_RELEASE:
//           amount += rental.daysRented * 3;
//           break;
//         case Movie.CHILDREN:
//           amount += 1.5;
//           if (rental.daysRented > 3)
//             amount += (rental.daysRented - 3) * 1.5;
//           break;
//       }
//
//       // add frequent renter points
//       frequentRenterPoints++;
//
//       // add bonus for a two day new release rental
//       if (rental.movie.priceCode == Movie.NEW_RELEASE && rental.daysRented > 1)
//         frequentRenterPoints++;
//
//       // show figures for this rental
//       result += "\t" + rental.movie.title + "\t\t" + amount + "\n";
//
//       totalAmount += amount;
//     }
//
//     result += "\nAmount owed is " + totalAmount + "\n";
//     result += "You earned " + frequentRenterPoints + " frequent renter points";
//
//     return result;
//   }
// }

class CustomerV2 {
  constructor(name) {
    this.name = name;
    this.rentals = [];
  }

  addRental(rental) {
    this.rentals.push(rental);
  }

  calculateRental() {
    return this.rentals.map((rental) =>
    {
      switch (rental.movie.priceCode) {
        case Movie.REGULAR:
          const regularMovieCharge = new RegularCharge(rental);
          return {
            totalCharge: regularMovieCharge.getTotalAmount,
            totalRentalPoints: regularMovieCharge.getTotalFrequentRentalPoints
          };
        case Movie.NEW_RELEASE:
          const newReleaseCharge = new NewReleaseCharge(rental);
          return {
            totalCharge: newReleaseCharge.getTotalAmount,
            totalRentalPoints: newReleaseCharge.getTotalFrequentRentalPoints
          };
        case Movie.CHILDREN:
          const childrenCharge = new ChildrenCharge(rental);
          return {
            totalCharge: childrenCharge.getTotalAmount,
            totalRentalPoints: childrenCharge.getTotalFrequentRentalPoints
          };
      }
    })
  }
}