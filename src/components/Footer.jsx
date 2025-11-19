
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>MovieHub</h3>
          <p>Your ultimate destination for premium movie experiences. We bring you the latest blockbusters with state-of-the-art technology and unparalleled comfort.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="YouTube">📺</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/product">Movies</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/tickets">Book Tickets</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">IMAX Experience</a></li>
            <li><a href="#">Dolby Atmos</a></li>
            <li><a href="#">Luxury Seating</a></li>
            <li><a href="#">Food Delivery</a></li>
            <li><a href="#">VIP Lounge</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p>📍 123 Movie Street, Cinema City</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>✉️ info@moviehub.com</p>
            <p>🕒 Open Daily: 10AM - 11PM</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to get updates on new movies and special offers</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 MovieHub. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer