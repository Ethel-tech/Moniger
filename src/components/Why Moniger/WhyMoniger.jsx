import "./whyMoniger.scss";

function WhyMoniger() {
  return (
    <div className="whymoniger">
      <div className="whymoniger-img-div">
        <img
          src="../../images/Group 187.png"
          alt=""
          className="whymoniger-img"
        />
      </div>
      <div className="whymoniger-para-div">
        <div className="whymoniger-para-div-two">
          <h1 className="whymoniger-header">Why Choose Moniger</h1>
          <p className="whymoniger-para">
            We offer a range of investments options- all with very competitive
            returns across a diverse set of asset classes. We target investors
            in international markets who are interested in investing without the
            hassles of currency risks. We offer a range of investment options-
            all with very competitive returns across a diverse set of asset
            classes.
          </p>
          <div className="whymoniger-list">
            <div className="whymoniger-list-div">
              <h3 className="whymoniger-list-header">
                <span className="whymoniger-list-header-span-img">
                  <img
                    src="../../images/return-of-investment.svg"
                    alt=""
                    className="whymoniger-list-style"
                  />
                </span>
                <span>Invest Any Amount</span>
              </h3>
              <p className="whymoniger-list-para">
                Choose how much you want to invest, and the investment duration
                and type and we&lsquo;ll show you what options you have and
                provide a simple, secure means to do that.
              </p>
            </div>
            <div className="">
              <h3 className="whymoniger-list-header">
                <span className="whymoniger-list-header-span-img">
                  <img
                    src="../../images/briefcase.svg"
                    alt=""
                    className="whymoniger-list-style"
                  />
                </span>
                <span className="whymoniger-list-header-span">
                  Build a Balanced Portfolio
                </span>
              </h3>
              <p className="whymoniger-list-para">
                Customize your portfolio with different investment types and
                different return rates and dates.
              </p>
            </div>
            <div className="">
              <h3 className="whymoniger-list-header">
                {" "}
                <span className="whymoniger-list-header-span-img">
                  <img
                    src="../../images/atm.svg"
                    alt=""
                    className="whymoniger-list-style"
                  />
                </span>
                <span>Easy Withdrawal</span>
              </h3>
              <p className="whymoniger-list-para">
                Withdraw all investments and dividends upon maturity or activate
                a roll-over. Whatever you decide, Moniger makes it easy and
                simple
              </p>
            </div>
          </div>

          <button className="whymoniger-list-button">Join the waitlist</button>
        </div>
      </div>
    </div>
  );
}

export default WhyMoniger;
