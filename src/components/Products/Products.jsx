import "./Products.scss";

function Products() {
  return (
    <section className="product">
      <h3 className="product-header">Our Product Offers</h3>
      <div className="product-grid">
        <div className="product-grid-imgs-div">
          <h5>Agriculture</h5>
          <img src="../../images/Farmer-rafiki 2.svg" alt="agriculture" />
        </div>
        <div className="product-grid-imgs-div">
          <h5>Real Estate</h5>
          <img
            src="../../images/House restyling-rafiki 2.svg"
            alt="real estate"
          />
        </div>
        <div className="product-grid-imgs-div">
          <h5>Stock and ETFS</h5>
          <img
            src="../../images/Online Groceries-rafiki 2.svg"
            alt="stock and etfs"
          />
        </div>
        <div className="product-grid-imgs-div">
          <h5>Bonds</h5>
          <img src="../../images/Agreement-rafiki 2.svg" alt="bonds" />
        </div>
        <div className="product-grid-imgs-div">
          <h5>Treasury Bills</h5>
          <img src="../../images/Wallet-rafiki 2.svg" alt="treasury bills" />
        </div>
        <div className="product-grid-imgs-div">
          <h5>Mutual Funds</h5>
          <img src="../../images/Revenue-rafiki 2.svg" alt="mutual funds" />
        </div>
      </div>
    </section>
  );
}

export default Products;
