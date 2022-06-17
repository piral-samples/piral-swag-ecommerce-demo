import * as React from 'react';

const PaymentDetails = ({ piral }) => {
  const onPaymentChanged = () => {
    piral.emit('paymentChanged', 'May 2021');
  };

  return (
    <div>
      <h3>Payment Details</h3>
      <ul>
        <li>
          <i>payment method: </i>credit card
        </li>
        <li>
          <a href="#" onClick={onPaymentChanged}>
            Change payment method to PayPal
          </a>
        </li>
        <li>
          <a href="#">View payments history</a>
        </li>
      </ul>
    </div>
  );
};

export default PaymentDetails;
