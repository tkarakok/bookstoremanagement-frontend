export class RentModel{
    customerEmail: string
    bookName: string
    
    constructor(customerEmail: string, bookName: string) {
      this.customerEmail = customerEmail;
      this.bookName = bookName;
    }
  }