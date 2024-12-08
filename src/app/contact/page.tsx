import React from "react";

const App: React.FC = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img
            src="c:/Users/ESHOP/Downloads/logo.jpeg"
            alt="Logo"
            width="185"
            height="41"
          />
        </div>
        <ul className="navlist">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="icons">
          <i className="fa-light fa-magnifying-glass"></i>
          <i className="fa-light fa-heart"></i>
          <i className="fa-light fa-cart-shopping"></i>
        </div>
      </header>

      <main>
        <section className="contact-section">
          <h3>Get In Touch With Us</h3>
          <p>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="details">
                <h4>Address</h4>
                <p>
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="details">
                <h4>Phone</h4>
                <p>
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="details">
                <h4>Working Time</h4>
                <p>
                  Monday–Friday: 9:00 - 22:00 <br />
                  Saturday–Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          <form id="form">
            <fieldset>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                required
                placeholder="Abc"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                required
                placeholder="Abc@def.com"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="This is optional"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={3}
                placeholder="Hi! I would like to ask about..."
              ></textarea>
            </fieldset>

            <button type="submit">Submit</button>
          </form>
        </section>

        <section className="features">
          <div className="feature-item">
            <i className="icon trophy"></i>
            <h3>High Quality</h3>
            <p>Crafted from top materials</p>
          </div>
          <div className="feature-item">
            <i className="icon check"></i>
            <h3>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
          <div className="feature-item">
            <i className="icon shipping"></i>
            <h3>Free Shipping</h3>
            <p>Order over $150</p>
          </div>
          <div className="feature-item">
            <i className="icon support"></i>
            <h3>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div>
            <h2>Funiro</h2>
            <p>
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div>
            <h4>Navbar</h4>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Help</h4>
            <ul>
              <li>Payment Option</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
          <div>
            <h4>Newsletter</h4>
            <input type="text" placeholder="Your Email" />
            <button type="submit">SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-bottom">
          <hr />
          <p>2023 Funiro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
