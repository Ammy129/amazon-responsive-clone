import React from "react";
import Banner from "./components/Banner";
import SingleProduct from "./components/SingleProduct";
import "./css/Home.css";
import ProductData from "./data/ProductData";
import InlineProductData from "./data/InlineProductData";
import SingleInlineProduct from "./components/SingleInlineProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { DataContext } from "./Context";

SwiperCore.use([Navigation]);

const Home = () => {
  const { filteredProducts } = React.useContext(DataContext);

  return (
    <section className="home-section">
      <Banner />

      <div className="product-wrapper">
        {filteredProducts.map(data => (
          <SingleProduct key={data.id} {...data} />
        ))}
      </div>
      <div className="inline-products-wrapper">
        <h2>Today’s Deals</h2>
        <h5>See all deals</h5>

        <Swiper navigation slidesPerView="auto">
          {InlineProductData.map(data => (
            <SwiperSlide key={data.id}>
              <SingleInlineProduct {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Home;
