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
        
        <Link to="/apply" className="custom-btn btn-13">ApplyNow!</Link>
      </header>
<br/>
      <section className="cards">
  <div className="card">
    <img className='flex-img' src="data:image/jpeg;base64,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" />
    <h2>Customized Loan Solutions</h2>
    <p>At AgroFundX, we understand that every agricultural venture is unique. That's why we offer customized loan solutions tailored to your specific needs. Whether you require seasonal loans, equipment financing, or crop loans, our flexible options are designed to meet the diverse needs of farmers and agricultural businesses.</p>
  </div>

  <div className="card">
    <img className='flex-img ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPClrZr4e05loW794tw6xHLKf4aO2zN86V1Q&usqp=CAU" alt="Quick Approval" />
    <h2>Streamlined Approval Process</h2>
    <p>Experience a quick and hassle-free approval process with AgroFundX. Our streamlined procedures and user-friendly online application options ensure that you can get approved for your agricultural loan in no time. Say goodbye to lengthy paperwork and waiting periods – access funds swiftly when you need them the most.</p>
  </div>

  <div className="card">
    <img className='flex-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgC0ghXjxLmPQUCPQ_FbDUMdxJD6pqLi-hPw&usqp=CAU" alt="Low Interest Rates" />
    <h2>Competitive Interest Rates</h2>
    <p>At AgroFundX, we prioritize your financial well-being. Benefit from competitive interest rates tailored specifically for agricultural loans. Our rates are among the lowest in the industry, enabling you to minimize financing costs and maximize your profits. Secure your agricultural future with AgroFundX.</p>
  </div>
</section>


      
      <main>
        <section className="Features">
          <h2>Features</h2>
          <div className="Feature-cards">
            <FeatureCard title="Quick Approval" description="Get your loan approved in no time." />
            <FeatureCard title="Low Interest Rates" description="Benefit from our competitive interest rates." />
            <FeatureCard title="Flexible Repayment" description="Choose a repayment plan that suits you." />
           
          </div>
        </section>
        <section className="HowItWorks">
          <h2>How It Works</h2>
          <div className="Steps">
            <StepCard step="1" title="Apply Online" description="Fill out our simple online application form." />
            <StepCard step="2" title="Review & Approval" description="Our team will review your application and approve your loan." />
            <StepCard step="3" title="Receive Funds" description="Receive the funds directly into your account." />
          </div>
        </section>
        <section className="Reviews">
          <h2>Reviews</h2>
          <div className="Review-cards">
            <ReviewCard name="John Doe" review="AgriLoan made it easy for me to expand my farm. Highly recommended!" />
            <ReviewCard name="Jane Smith" review="I'm impressed with AgriLoan's customer service. They were very helpful throughout the process." />
            <ReviewCard name="David Johnson" review="AgriLoan provided me with the financial support I needed to modernize my farm equipment. Excellent service!" />
          </div>
        </section>
      </main>

      <footer className="footer" style={{marginTop:'15%', marginBottom:'10px'}}>
        <div className="footer__addr">
          <h1 className="footer__logo">AgroFundX</h1>
          <h2>Contact</h2>
          <address>
            xyz, city-123456<br />
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
function FeatureCard({ title, description }) {
  return (
    <div className="Feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function StepCard({ step, title, description }) {
  return (
    <div className="Step-card">
      <div className="Step-number">{step}</div>
      <div className="Step-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ReviewCard({ name, review }) {
  return (
    <div className="Review-card">
      <p>{review}</p>
      <p>- {name}</p>
    </div>
  );
}
export default Home;
