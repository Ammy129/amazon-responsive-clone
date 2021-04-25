import React from "react";
import "./css/Footer.css";
import { upperFooterData, lowerFooterData } from "../data/footerData";

const Footer = () => {
  const backtoTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
    });
  };

  return (
    <footer className="footer-wrapper">
      <div className="backToTop" onClick={backtoTop}>
        Back to top
      </div>

      <article className="links-wrapper">
        {upperFooterData.map((data, index) => {
          const { title, links } = data;
          return (
            <div className="links" key={index}>
              <h3>{title}</h3>

              {links.map((link, index) => (
                <p key={index}>{link}</p>
              ))}
            </div>
          );
        })}
      </article>

      <article className="lower-footer">
        <div className="lower-wrapper">
          {lowerFooterData.map((data, index) => {
            const { title, links } = data;
            return (
              <div className="links" key={index}>
                <h6>{title}</h6>
                <small>{links}</small>
              </div>
            );
          })}
        </div>
      </article>

      <article className="copyright">
        © 1996-{new Date().getFullYear()} amazon.com
      </article>
    </footer>
  );
};

export default Footer;
