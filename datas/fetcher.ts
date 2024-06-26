import Payment from './types';

export const fetchPayments = async (): Promise<Payment[]> => {
  const response = await fetch('@/datas/factures.json');
  console.log('fetch finished');
  
  const data = await response.json();
  return data.map((item: any) => ({
    paymentCode: item.paymentCode,
    author: item.author,
    cardNumber: item.cardNumber,
    offer: item.offer,
    amount: item.amount,
    date: item.date,
    validity: item.validity
  }));
};