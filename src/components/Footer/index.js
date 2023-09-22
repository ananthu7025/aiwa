
import React from 'react'

const Footer = () => {
    return (
      <footer>
        <div className="footer_section">
          <div className="footer_item">
            <h6>Sign up to our newsletter.</h6>
            <p>
              Receive new product announcements, industry-relevant news and advance
              notice on upcoming deals.
            </p>
            <div className="subscribe">
              <input type="text" placeholder="Enter your email address" />
              <button>SIGN UP</button>
            </div>
          </div>
          <div className="footer_item">
            <h6>Stay connected with us:</h6>
            <div className="social_icons">
              <a href="">
                <i className="fab fa-facebook-square" />
              </a>
              <a href="">
                <i className="fab fa-linkedin" />
              </a>
              <a href="">
                <i className="fab fa-instagram" />
              </a>
              <a href="">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer