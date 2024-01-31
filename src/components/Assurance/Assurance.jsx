import "./assurance.scss";

function Assurance() {
  return (
    <section className="assurance-section">
      <div className="assurance-section-main-div">
        <div className="assurance-first-group assurance-groups">
          <div className="assurance-first-group-grid assurance-groups-imgs">
            <img
              src="../../images/Group 2499.svg"
              alt=""
              className="assurance-grid-imgs"
            />
          </div>
          <div className="assurance-first-group-text assurance-text">
            <img src="../../images/Moniger Logo 2.png" alt="" />
            <h3>Secure and guaranteed return on your investment</h3>
            <p>
              Our ideal customer is one that is interested in a higher
              investment yield than typically found. Someone interested in safe,
              secure and guaranted returns on investtment without having to
              learn t he basics of stock market investment and trading. All your
              investments are hedged to manage currency fluctations and risk. We
              also, use SEC Registered Partners and members of FINRA/SIPC, which
              protects Securities Customers of its members up to $500,00
              &#40;including $250,000 for claims for cash&#41; Meaning you can
              relax and watch your money grow!
            </p>
          </div>
        </div>
        <div className="assurance-second-group assurance-groups">
          <div className="assurance-second-group-img assurance-groups-imgs">
            <img src="../../images/Group 341.svg" alt="" className="" />
          </div>
          <div className="assurance-second-group-text assurance-text">
            <h3 className="">We provide dfferent investment opportunities</h3>
            <p className="">
              Moniger provides access to different investment types. Explore and
              choose from various options, we&#39;ve made it fast and seamless
              to discover the best assets classes to invest in. <br /> Fund your
              account and instantly start buying or investing in different
              assets, we give you real-time information on your portfolio and
              allow you cash out or diversify in just a few taps. It has never
              been easier!
            </p>
            <button className="">Count me in</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Assurance;
