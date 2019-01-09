export default class User {
  constructor(options) {
    const { firstName, lastName } = options;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}