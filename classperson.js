class person {
  constructor(firstName, lastName, city, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.email = email;
    this.phone = phone;
  }
}

const p1 = new person(
  "Sai",
  "Pranav",
  "Hyderabad",
  "saipranav@gmail.com",
  9999341254
);
const p2 = new person("Ram", "Vi", "Delhi", "ramm12@gmail.com", 4543211134);
const p3 = new person("Van", "De", "Patna", "van@gmail.com", 9975478957);

console.log(p1, p2, p3);
