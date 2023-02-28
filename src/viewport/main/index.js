import React, { useState } from 'react';
import Popup from "../../components/Popup";
import Banner from "../../../src/assets/banner-img.png";
import builderPartner from "../../../src/assets/builder-partner.png";
import sixElectric from "../../../src/assets/6X12electric.png";
import bigBoyGas from "../../../src/assets/Big-boy-Gas.png";
import sevenElectric from "../../../src/assets/7X14electric.png";
import { FaArrowCircleUp } from 'react-icons/fa';

const Main = () => {
  const [isOpen, setIsOpen,] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="inner-wrap">
      <div className="banner" id="home">
        <div className="container d-flex align-items-center">
          <div className="row">
            <div className="col-lg-6 col-md-12 wow pulse animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <div className="text-wrap">
                <h1 className="heading"><span className="text-orange">Financing</span> Your <br></br> Kitchen on <span className="text-orange">Wheels</span></h1>
                <p className="tagline mb-4">Join over 100 food entrepreneurs in across the country that have leased our food trailers</p>
                <input className="btn block-btn common-btn"
                  type="button"
                  value="Start an Application"
                  onClick={togglePopup}
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-wow-duration="1000ms"
              data-wow-delay="600ms">
              <div className="img-wrap">
                <img className="img-fluid" alt="banner" src={Banner} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clients p-80" id="clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
              <div className="client-left">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="wow fadeInUp animated heading text-blue" data-wow-duration="1000ms" data-wow-delay="600ms">Builder Partner</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <img alt="blank" className="img-fluid" src={builderPartner} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p className="mb-0">Joe The Cart Guy</p>
                    <a target="blank" href="http://www.joethecartguy.com">http://www.joethecartguy.com</a>
                    <a target="blank" href="tel: 804-477-9734">Phone No. 804-477-9734</a>
                    <p className="mb-0">4204 Eubank Rd, Henrico, VA 23231</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mb-lg-0">
              <div className="client-wrapper">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="wow fadeInUp animated heading text-orange" data-wow-duration="1000ms" data-wow-delay="600ms">Cassiel Lease</h1>
                  </div>
                </div>
                <ul className="list-unstyled">
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                    <p className="mb-0 listing-style uppercase">
                      Pre-approval decision within 48 hours of application
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style uppercase">
                      No minimum credit score
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style">
                      Lease to own
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style">
                      Down payment (~20%+ of purchase price) + monthly payments + payment credit
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features p-80" id="features">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-4 mb-5 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="600ms">
              <a href="#lease" className="common-wrap">
                <h4 className="mb-0">6x12 <br /> Electric</h4>
              </a>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
              <a href="#trailer" className="common-wrap">
                <h4 className="mb-0">7x14 <br /> Electric</h4>
              </a>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
              <a href="#process" className="common-wrap">
                <h4 className="mb-0">"Big Boy" <br /> 7x14 Gas </h4>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="lease p-80" id="lease">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="wow fadeInUp animated heading text-orange" data-wow-duration="1000ms" data-wow-delay="600ms">6x12 Electric</h1>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
              <div className="lease-left">
                <div className="row">
                  <div className="col-md-12">
                    <img alt="blank" className="img-fluid" src={sixElectric} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-lg-0">
              <div className="lease-wrapper">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="wow fadeInUp animated heading text-black" data-wow-duration="1000ms" data-wow-delay="600ms">Trailer Equipment Overview</h3>
                  </div>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                    <p className="mb-0 listing-style">
                      <b>Price:</b> $28,800+
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style">
                      <b>Monthly Payment:</b> $600+
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style">
                      <b>Trailer:</b> 6x12 dual axle fully enclosed trailer, 6’6” interior height
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style"><b>Cooking Equipment (commercial):</b> Griddle (24”), Fryer – double basket (20 lbs.), Induction range, Food warmer, Refrigerator (prep table or undercounter), Steel worktable
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style"><b>Plumbing:</b> Hand sink, 3 bowl sink with drainboard, water pump (hot/cold), water tanks
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style"><b>Electric: </b>120v Full Electric Service 100amp service with 50-amp inlet
                    </p>
                  </li>

                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style"><b>Additional: </b>Fire Suppression, 6’ Hood, Air Conditioner.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row text-center mt-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms">
            <div className="col-md-12">
              <input className="btn block-btn common-btn"
                type="button"
                value="Start an Application"
                onClick={togglePopup}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lease p-80" id="trailer">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="wow fadeInUp animated heading text-orange" data-wow-duration="1000ms" data-wow-delay="600ms">7x14 Electric</h1>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 mb-lg-0">
              <div className="lease-wrapper">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="wow fadeInUp animated heading text-black" data-wow-duration="1000ms" data-wow-delay="600ms">Trailer Equipment Overview</h3>
                  </div>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                    <p className="mb-0 listing-style">
                      <b>Price:</b> $35,500+
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style">
                      <b>Monthly Payment:</b> $700+
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style">
                      <b>Trailer:</b> 7x14 dual axle fully enclosed trailer, 6’6” interior height
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style"><b>Cooking Equipment (commercial):</b> Griddle (24”), Fryer – double basket (20 lbs.), Induction range, Food warmer, Refrigerator (prep table or undercounter), Steel worktable
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style"><b>Plumbing:</b> Hand sink, 3 bowl sink with drainboard, water pump (hot/cold), water tanks
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style"><b>Electric: </b>120v Full Electric Service 100amp Service with 50-amp inlet
                    </p>
                  </li>

                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style"><b>Additional: </b>Fire Suppression, 8’ Hood, Air Conditioner.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
              <div className="lease-left">
                <div className="row">
                  <div className="col-md-12">
                    <img alt="blank" className="img-fluid" src={sevenElectric} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center mt-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms">
            <div className="col-md-12">
              <input className="btn block-btn common-btn"
                type="button"
                value="Start an Application"
                onClick={togglePopup}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lease p-80" id="process">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="wow fadeInUp animated heading text-orange" data-wow-duration="1000ms" data-wow-delay="600ms">"Big Boy" - 7x14 Gas</h1>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 mb-lg-0 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
              <div className="lease-left">
                <div className="row">
                  <div className="col-md-12">
                    <img alt="blank" className="img-fluid" src={bigBoyGas} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-lg-0">
              <div className="lease-wrapper">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="wow fadeInUp animated heading text-black" data-wow-duration="1000ms" data-wow-delay="600ms">Trailer Equipment Overview</h3>
                  </div>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="800ms">
                    <p className="mb-0 listing-style">
                      <b>Price:</b> $41,500+
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style">
                      <b>Monthly Payment:</b> $1,000+
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style">
                      <b>Trailer:</b> 7x14 dual axle fully enclosed trailer, 6’6” interior height
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style"><b>Cooking Equipment:</b> Induction Range (36"), Griddle (24”), Oven, Fryer (50 lbs.), Food warmer, Refrigerator (undercounter), Steel worktable 
(24" x 48") 
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style"><b>Plumbing:</b> Hand sink, 3 bowl sink with drainboard, water pump (hot/cold), water tanks
                    </p>
                  </li>
                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style"><b>Electric: </b>120v Full Electric Service 100amp Service with 50-amp inlet
                    </p>
                  </li>

                  <li className="listing wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1000ms">
                    <p className="mb-0 listing-style"><b>Additional: </b>Fire Suppression, 8’ Hood, Air Conditioner.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row text-center mt-5 wow fadeInUp animated" data-wow-duration="1000ms" data-wow-delay="1200ms">
            <div className="col-md-12">
              <input className="btn block-btn common-btn"
                type="button"
                value="Start an Application"
                onClick={togglePopup}
              />
            </div>
          </div>
        </div>
      </div>
      <button className="scroll" type="submit">
        <FaArrowCircleUp onClick={scrollToTop}
          style={{ display: visible ? 'inline' : 'none' }} />
      </button>
      {isOpen && < Popup
        handleClose={togglePopup}
      />}
    </div>
  );
};

export default Main;
