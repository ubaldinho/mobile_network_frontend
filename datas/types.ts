export default interface Payment {
    paymentCode: string;
    author: string;
    cardNumber: string;
    offer: string;
    amount: number;
    date: string;
    validity: string;
  }