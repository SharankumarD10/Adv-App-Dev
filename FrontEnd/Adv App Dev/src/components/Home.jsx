import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>AgroFundX - Empowering Agriculture</h1>
        <p>Apply for agricultural loans online and get the support you need for your farming ventures.</p>
        <br />
        
        <Link to="/apply" className="custom-btn btn-13">Explore</Link>
      </header>
<br/>
      <section className="cards">
  <div className="card">
    <img className='flex-img' src="https://i0.wp.com/www.india-briefing.com/news/wp-content/uploads/2021/11/MicrosoftTeams-image-6.jpg?fit=900%2C506&ssl=1" alt="Flexible Loan Options" />
    <h2>Customized Loan Solutions</h2>
    <p>At AgroFundX, we understand that every agricultural venture is unique. That's why we offer customized loan solutions tailored to your specific needs. Whether you require seasonal loans, equipment financing, or crop loans, our flexible options are designed to meet the diverse needs of farmers and agricultural businesses.</p>
  </div>

  <div className="card">
    <img className='flex-img ' src="https://images.pexels.com/photos/5816283/pexels-photo-5816283.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Quick Approval" />
    <h2>Streamlined Approval Process</h2>
    <p>Experience a quick and hassle-free approval process with AgroFundX. Our streamlined procedures and user-friendly online application options ensure that you can get approved for your agricultural loan in no time. Say goodbye to lengthy paperwork and waiting periods – access funds swiftly when you need them the most.</p>
  </div>

  <div className="card">
    <img className='flex-img' src="https://media.istockphoto.com/id/1339532492/photo/dollar-money-bag-on-farm-field-lending-and-subsidizing-farmers-grants-financial-support.jpg?s=612x612&w=0&k=20&c=4IDoLnV5Rdoaq-GGMFcACdyrwmtaBRm7dAiCp60f4aQ=" alt="Low Interest Rates" />
    <h2>Competitive Interest Rates</h2>
    <p>At AgroFundX, we prioritize your financial well-being. Benefit from competitive interest rates tailored specifically for agricultural loans. Our rates are among the lowest in the industry, enabling you to minimize financing costs and maximize your profits. Secure your agricultural future with AgroFundX.</p>
  </div>
</section>


      <section>
        <header className='head'>
          <h1>APPLY FOR AGRICULTURAL LOANS ONLINE</h1>
        </header>

        <div className="header" style={{marginTop:'15%', marginBottom:'10px'}}>
          <div className="header-content">
            <h3>Crop Loans</h3>
            <p>Crop loans are one of the most common types of agricultural financing. These loans are specifically designed to help farmers cover the expenses associated with crop production, including purchasing seeds, fertilizers, pesticides, and other inputs necessary for cultivation.</p>
            <p>Key features of crop loans include:</p>
            <ul>
              <li><strong>Low Interest Rates:</strong> Many crop loans come with competitive interest rates, helping farmers minimize financing costs and maximize profits.</li>
              <li><strong>Collateral Options:</strong> Depending on the lender and loan terms, farmers may be able to use their crops or land as collateral to secure the loan.</li>
              <li><strong>Quick Approval:</strong> With streamlined application processes and online platforms, farmers can often get quick approval for crop loans, ensuring timely access to funds.</li>
            </ul>
            <p>Whether you're a small-scale farmer or a large agricultural enterprise, crop loans can provide the financial support you need to invest in your crops and achieve a successful harvest.</p>
          </div>

          
        </div>
      </section>

      <footer className="footer" style={{marginTop:'15%', marginBottom:'10px'}}>
        <div className="footer__addr">
          <h1 className="footer__logo">AgroFundX</h1>
          <h2>Contact</h2>
          <address>
            1234 Somewhere In India<br />
            <a className="footer__btn" href="mailto:enquiry@agrofundx.com">Email Us</a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Loans</h2>
            <ul className="nav__ul">
              <li><Link to="loan-list">Crop Loan</Link></li>
              <li><Link to='loan-calculator'>EMI Calculator</Link></li>
            </ul>
          </li>
          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Lenders</h2>
            <ul className="nav__ul nav__ul--extra">
              <li><Link to="loan-list">Bank</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>
            <ul className="nav__ul">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2024 AgroFundX. All rights reserved.</p>
          <div className="legal__links">
            <span>Made with <span className="heart">♥</span> In Coimbatore</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
