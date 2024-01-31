import "./hero.scss";
import WhyMoniger from "../Why Moniger/WhyMoniger";

function Hero() {
  return (
    <div className="hero">
      <section className="hero-section">
        {/* nav */}
        <div className="hero-nav">
          <div className="mobile-img-div">
            <img
              className="hero-nav-logo"
              src="../images/Moniger Logo 2.png"
              alt="logo"
            />
          </div>
          <button className="hero-nav-waitlist">Join the waitlist</button>
        </div>

        {/* hero */}
        <div className="hero-div">
          <div className="hero-div-curate-div">
            <h1>Curate multiple investments on a single platform</h1>
            <p>
              With Moniger, you achieve your financial freedom because we
              provide easy investments on the go - putting your money to work
              for you. Earn 10% - 30% return on investments.{" "}
            </p>
            <form action="submit" className="hero-notify-form">
              <input type="email" placeholder="Enter your email" />
              <button>Notify me</button>
            </form>
          </div>
          <div className="hero-iphone-img">
            <img
              src="../images/iPhone 11 Pro Max.png"
              alt="iPhone 11 Pro Max with moniger user interface"
            />
          </div>
        </div>
      </section>
      <section className="why-moniger">
        <WhyMoniger />
      </section>
    </div>
  );
}

export default Hero;
