import React from 'react';

const Account = ({ title, amount, description }) => {
    // Account component that displays an account section
  // Props:
  // - title: The title of the account
  // - amount: The amount of the account
  // - description: The description of the account
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;