import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import "./css/SingleProductDetail.css";
import { DataContext } from "./Context";

const SingleProductDetail = () => {
  const { getItems, itemDetail, AddToCart } = React.useContext(DataContext);

  const { id } = useParams();
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    getItems(id);
  }, [id]);

  return (
    <section className="single-product-detail">
      <div className="back" onClick={goBack}>
        <ArrowBackIosIcon />
      </div>

      <figure className="single-img-detail">
        <img src={`.${itemDetail.image}`} alt="product-img" />
      </figure>

      <div className="single-content-detail">
        <header>
          <h2>{itemDetail.title}</h2>
          <p>
            {Array(itemDetail.stars)
              .fill()
              .map((star, index) => (
                <strong key={index}>⭐</strong>
              ))}

            <span> 20,897 ratings </span>
            <span> 1000+ answered questions</span>
          </p>
          <h4>
            Amazon's <span>Choice</span>
          </h4>
        </header>

        <p>
          Price:
          <h3>
            ₹{itemDetail.price.toLocaleString("en")}.00 <br />
            <span>Inclusive of all taxes</span>
          </h3>
        </p>

        <p>
          <span>Free delivery:</span> <strong>Saturday,April 3</strong>
          <span>Detail</span>
        </p>

        <p>
          Fastest delivery : <strong>Tomorrow 3PM</strong>
        </p>
        <h4>Order within 18 hr and 38 mins</h4>
        <p>
          EMI starts at ₹2,820. No Cost EMI available <span>EMI options</span>
        </p>
        <small>In stock</small>
        <p>
          Sold by <span> Appario Retail Private Ltd</span> and
          <span>Fulfilled by Amazon. </span>
        </p>
        <span>10-day replacement only </span>
        <p>
          Size name: <strong>128GB</strong>
        </p>
        <div className="btn-group">
          <button>64Gb</button>
          <button>128Gb</button>
          <button>256Gb</button>
        </div>
        <div className="color-group">
          <h1></h1>
          <h2></h2>
          <h3></h3>
          <h4></h4>
        </div>
        <p>Features :-</p>
        <ul>
          <li> 6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display</li>
          <li>
            Water and dust resistant (2 meters for up to 30 minutes, IP68)
          </li>
          <li>
            Dual-camera system with 12MP Ultra Wide and Wide cameras; Night
            mode, Portrait mode, and 4K video up to 60fps
          </li>
          <li>
            12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo
          </li>
          <li> Face ID for secure authentication</li>
          <li> A13 Bionic chip with third-generation Neural Engine</li>
          <li> Fast-charge capable</li>
          <li> Wireless charging</li>
          <li>
            As part of our efforts to reach our environmental goals, iPhone no
            longer includes a power adapter or EarPods. Please use your existing
            Apple power adapter and headphones or buy these accessories
            separately
          </li>
          <li>
            iOS 14 with redesigned widgets on the Home screen, all-new App
            Library, App Clips, and more
          </li>
        </ul>
      </div>

      <div className="addToCart-section">
        <p>
          Quantity:
          <select>
            {quantities.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </p>
        <button className="addtocart-btn" onClick={() => AddToCart(id)}>
          Add to Cart
        </button>
        <button className="buy-now-btn">Buy Now</button>
        <span>
          <LockIcon /> Secure Transaction
        </span>
      </div>
    </section>
  );
};

export default SingleProductDetail;
