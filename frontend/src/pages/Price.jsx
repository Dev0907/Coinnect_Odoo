import React from 'react';
import "../styles/Price.css";
import { Link } from 'react-router-dom';

function Price() {
  return (
    <>
      <nav className="home-navbar">
        <div className="home-navbar-container">
          <ul className="home-navbar-menu">
            <li>
              <Link to="/about" className="home-navbar-link">ABOUT US</Link>
            </li>
            <li>
              <Link to="/" className="home-navbar-link">HOME</Link>
            </li>
            <li>
              <Link to="/get" className="home-navbar-link">GET IN TOUCH</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="pricing-container">
        <div className="pricing-header">
          <h1>Flexible Pricing for Community Growth</h1>
          <p className="pricing-subheading">Choose the plan that best fits your community and content needs</p>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h2 className='S'>Starter</h2>
              <div className="pricing-price">
                <span className="price-text">Free</span>
              </div>
            </div>
            <div className="pricing-features">
              <div className="feature"><span>Basic Bot Access</span></div>
              <div className="feature"><span>Limited Community Posts</span></div>
              <div className="feature"><span>Access to Public Communities</span></div>
              <div className="feature"><span>Basic Analytics</span></div>
            </div>
            <button className="cta-button starter-button">Get Started</button>
          </div>

          <div className="pricing-card pro-card">
            <div className="popular-tag">Most Popular</div>
            <div className="pricing-card-header">
              <h2 className='P'>Pro</h2>
              <div className="pricing-price">
                <span className="price-text">₹99</span>
                <span className="price-period">/month</span>
              </div>
            </div>
            <div className="pricing-features">
              <div className="feature"><span>Advanced Bots & Automation</span></div>
              <div className="feature"><span>Unlimited Posts & Engagement</span></div>
              <div className="feature"><span>Exclusive Community Access</span></div>
              <div className="feature"><span>Detailed Insights & Reports</span></div>
            </div>
            <button className="cta-button pro-button">Go Pro</button>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-header">
              <h2 className='E'>Enterprise</h2>
              <div className="pricing-price">
                <span className="price-text">Custom Pricing</span>
              </div>
            </div>
            <div className="pricing-features">
              <div className="feature"><span>AI-Powered Bots & Automation</span></div>
              <div className="feature"><span>Unlimited Custom Communities</span></div>
              <div className="feature"><span>Advanced Moderation Tools</span></div>
              <div className="feature"><span>Priority Support & Custom Integration</span></div>
            </div>
            <button className="cta-button enterprise-button">Contact Sales</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;