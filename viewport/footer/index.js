import footerLogo from "../../../src/assets/footer-logo.png";
import { FaAngleRight, FaRegEnvelope, FaRegUser, FaPhoneAlt, FaGlobe } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="p-80 pb-0" id="footer">
      <div className="container pb-3">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-5 overflow-hidden">
            <div id="footer-sidebar-first" className="company detail">
              <img src={footerLogo} alt="logo" className="img-fluid w-50 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms" />
              <p className="text-white mt-3 mb-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">Join over 100 food entrepreneurs in across the country that have leased our food trailers</p>
            </div>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 overflow-hidden">
            <h5 className="text-white mt-4 mt-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">Quick Links</h5>
            <ul className="list-unstyled text-white ps-0">
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms"><FaAngleRight /><a href="#home"> Home </a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms"><FaAngleRight /><a href="#clients">Builder Partner </a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms"><FaAngleRight /><a href="#features">Trailer Variety</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1400ms"><FaAngleRight /><a href="#footer">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 overflow-hidden">
            <h5 className="text-white mt-4 mt-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">Contact Us</h5>
            <ul className="list-unstyled text-white ps-0">
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms"><FaRegUser /><a href="about">Jonathan Masland</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms"><FaPhoneAlt /><a href="tel: 6034861711">(603) 486 1711</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms"><FaRegEnvelope /><a href="mailto:jmasland@cassielrentals.com">jmasland@cassielrentals.com</a></li>
              <li className="wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms"><FaGlobe /><a href="https://cassielfinance.com/">https://cassielfinance.com/</a></li>
            </ul>
          </div>
        </div>

      </div>
      <div className="container-fluid blue-bg">
        <div className="row">
          <div className="col-md-12">
            <div className="copyright text-white text-center">
              <p>Copyright © 2017–2022 CassielLLC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
