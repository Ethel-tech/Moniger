import "./contact.scss";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-section-main">
        <div className="contact-section-main-img-div">
          <img
            src="../../images/iphone-design.png"
            alt="iphone screen"
            className="contact-img"
          />
        </div>
        <div className="contact-section-main-text">
          <h3>We&#39;re changing the way you invest</h3>
          <p>
            All you&#39;ll need is simply download the app, sign up and invest
            till maturity, no tedious portfolio trading or monitoring
            activities! Join the waitlist now to reserve your spot in line for
            priority access.
          </p>
          <form action="" className="contact-section-text-form">
            <input type="email" placeholder="Enter your email" />
            <button>Get early access</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
