import "./features.scss";

function Features() {
  return (
    <section className="features">
      <h1 className="features-header">Features</h1>
      <div className="features-div">
        <img
          src="../../images/Group 2528.svg"
          alt=""
          className="features-div-img"
        />
        <ul className="features-div-list">
          <li className="features-div-list-items">
            Provides aggreated investment opportunities to users.
          </li>
          <li className="features-div-list-items">
            Allows users to purchase/invest in an investment option while
            providing real time updates/info
          </li>
          <li className="features-div-list-items">
            Allows user register securely & secures user data using 256-Bit
            encryption
          </li>
          <li className="features-div-list-items">
            Integrated with a payment processor to credit/debit user accounts
          </li>
          <li className="features-div-list-items">
            Allows users Withdraw both capital and dividends at the end of an
            investment cycle
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Features;
