use hotel_bookings;

db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Stephen Blythe",
    email: "stephen.blythe@aol.com",
    checkedIn: true
  },
  {
    name: "Gillian Shanks",
    email: "gillian.shanks@aol.com",
    checkedIn: true
  },
  {
    name: "Ally McGilloway",
    email: "ally@aol.com",
    checkedIn: false
  }
]);
