import React from "react";
import yatralogo from "../../assets/yatra_logo.svg";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import reviewicon from "../../assets/review.png";
import adduser from "../../assets/add-user.png";
import styles from "./Booking.module.css";
import Footer from "../Footer";

export const Booking = () => {
  return (
    <>
      <div className={styles.body}>
        <nav className={styles.navbar}>
          <img src={yatralogo} width="200px" alt="img" />
        </nav>
        <div className={styles.bodyWidth}>
          <div className={styles.rel}>
            <div className={styles.justify}>
              <div className={`${styles.flex} ${styles.gradient}`}>
                <img src={reviewicon} alt="img" />
                <div>Review Your booking</div>
              </div>
              <div className={styles.bluefont}>Change Bus</div>
            </div>
            <div className={styles.reviewBox}>
              <div className={styles.bus}>
                <DirectionsBusIcon
                  style={{ fontSize: "100px", color: "rgb(102,102,102)" }}
                />
                <div className={styles.boldfont}>SHAKTI TRAVELS</div>
                <main className={styles.boldfont}>Ac Sester-sleeper (2+1)</main>
              </div>
              <div>
                <div className={styles.justifyReview}>
                  <div>
                    <div>Delhi</div>
                    <div className={styles.bigboldfont}>01:00 AM</div>
                    <div className={styles.boldfont}>Sat, 24 Jul 2021</div>
                  </div>
                  <div className={styles.justify}>
                    <div>5h 15m</div>
                    <div> | </div>
                    <div>281km</div>
                  </div>
                  <div>
                    <div>Jaipur</div>
                    <div className={styles.bigboldfont}>06:15 AM</div>
                    <div className={styles.boldfont}>sat, 24 Jul 2021</div>
                  </div>
                </div>
                <hr />
                <div className={styles.justifyBoarding}>
                  <div>
                    <div className={styles.boarding}>
                      <div className={styles.grayfont}>Boarding Point & Time</div>
                      <div>fatehpur: 01:00 AM</div>
                    </div>
                    <div className={styles.boarding}>
                      <div className={styles.grayfont}>Dropping Point & Time</div>
                      <div>Near Sindhi Camp: 06:25 AM</div>
                    </div>
                  </div>
                  <div className={styles.seatnumber}>
                    <div className={styles.grayfont}>Seat Numbers(s)</div>
                    <div>SL1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.flex}>
              <div className={`${styles.flex} ${styles.gradient}`}>
                <img src={adduser} alt="img" />
                <div>Enter Traveller Details</div>
              </div>
              <div>|</div>
              <div className={styles.bluefont}>Sign In</div>
              <div>to book faster</div>
            </div>
            <div className={styles.addBox}>
              <div className={styles.justify}>
                <div className={styles.boldfont}>Contact Details</div>
                <input type="text" placeholder="Email Id" />
                <select></select>
              </div>
              <div>
                Your booking details will be sent to this email address and
                mobile number.
              </div>
              <hr />
              <div className={styles.justify}>
                <div className={styles.boldfont}>Seat SL1</div>
                <input type="text" placeholder="Traveller Name" />
                <select></select>
                <select></select>
              </div>
            </div>
            <button className={styles.button}>Proceeed To Payment</button>
          </div>

          <div className={styles.details}>
            <div className={styles.boldfont}>Fare Details</div>
            <div className={styles.fare}>
              <div className={styles.justifyOnward}>
                <div>Onward Fare(1 Traveller)</div>
                <div>893</div>
              </div>
              <div className={styles.justifyPay}>
                <div>You Pay:</div>
                <div>893</div>
              </div>
            </div>
            <div className={styles.boldfont}>Promo Code</div>
            <div className={styles.promo}>
              <div>Select a Promo Code</div>
              <div>
                <input type="text" placeholder="YOUR PROMO CODE" />
                <button>Apply</button>
              </div>
              <div className={styles.promocode}>
                <input type="radio" />
                <div>
                  <div className={styles.code}>BUSONYATRA</div>
                  <div>Flat 9% off(Max Rs. 200)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
