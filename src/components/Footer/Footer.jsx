import "./footer.scss";

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-section-disclaimer">
        <h5>Legal Disclaimer</h5>
        <p>
          Moniger is an application that aggregates investment opportunities and
          displays them in a user-friendly acessible format enabling customers
          to make investments in various opportunities easily. Moniger enables
          users to achieve financial freedom by providing the best in-class
          investment opportunities allowing for quick, easy investments on the
          go.
          <br /> <br />
          Moniger is targeted at investors in international markets with focus
          on users in Europe and North America who are intrested in investing
          without the hassles of currency risks from fluctuations in the value
          of Naira- ideally these investors could be Nigerian in the disapora
          including friends and family, as well as foreign with little insight
          on Nigeria and the Nigerian market.
          <br /> <br />
          Our ideal customer is one that is interested in a much higher
          investment yield than typically found in the western world. One who
          doesn&#39;t want to deal with currency fluctuation issues typical of
          Nigeria, wants a secure and guaranteed return on an investment,
          without having to learn the basics of stock market investment and
          trading. Traditional investment routes typically involve stocks, bonds
          and sometimes treasury bills, which often have low yields and are
          plagued by a lot of bureaucracy and paperwork. International
          investments are also subject to currency fluctuations and sometimes
          fear of the unknown. Moniger aims to solve this problem by providing
          different investment opportunities typically not found in western
          markets-by hedging all capital invested, which means you can really
          relax and be guaranteed that your capital and dividends are safe and
          paid out in time. <br /> <br />
          Our global brokerage partnership(US SEC registered) ensure your
          capital is secured by the Securities Investor Protection
          Corporation(SIPC) up to the tune of $500,000.
        </p>
      </div>
      <div className="footer-section-socials">
        <img
          src="../../images/Moniger Logo 2.png"
          alt="logo"
          className="footer-section-socials-logo"
        />
        <div className="contact-info">
          <p>+234 81 2345678, +234 81 2345678 hello@moniger.com</p>
          <p>&#169;Copyright 2020 - Moniger. All rights reserved.</p>
        </div>
        <div className="footer-section-socials-icon">
          <img src="../../images/facebook_2 1.svg" alt="facebook icon" />
          <img src="../../images/instagram_2 1.svg" alt="instagram icon" />
          <img src="../../images/twitter_2 1.svg" alt="twitter icon" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
