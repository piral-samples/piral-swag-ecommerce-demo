import * as React from 'react';

const AccountDetails = ({ piral }) => {
  const [lastPaymentDate, setPaymentChanged] = React.useState('Jan 2021');

  React.useEffect(() => {
    piral.on('paymentChanged', setPaymentChanged);
    return () => piral.off('paymentChanged', setPaymentChanged);
  }, []);

  return (
    <div>
      <h3>Account Details</h3>
      <ul>
        <li>
          <i>name:</i> Luca
        </li>
        <li>
          <i>surname:</i> Mezzalira
        </li>
        <li>
          <i>email:</i> guesswho@lm.com
        </li>
        <li>
          <i>member since:</i> Jan 2021
        </li>
        <li>
          <i>last payment changed: </i>
          {lastPaymentDate}
        </li>
        <li>
          <a href="#">Change account details</a>
        </li>
      </ul>
    </div>
  );
};

export default AccountDetails;
