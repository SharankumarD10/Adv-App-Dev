import React from 'react';
import './Faq.css';

const AgriLoanFAQ = () => {
    return (
        <div className="faq-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="faq-title text-center pb-3">
                            <h2>Indian Agricultural Loan FAQ</h2>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-3">
                        <div className="faq" id="accordion">
                            {/* Question 1 */}
                            <div className="card">
                                <div className="card-header" id="faqHeading-1">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-1" aria-expanded="true" aria-controls="faqCollapse-1">
                                            <span className="badge">1</span> What types of agricultural loans are available for Indian farmers?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-1" className="collapse" aria-labelledby="faqHeading-1" data-parent="#accordion">
                                    <div className="card-body">
                                        Indian farmers have access to various types of agricultural loans, including crop loans, term loans for purchasing farm equipment, dairy loans, and agricultural gold loans.
                                    </div>
                                </div>
                            </div>

                            {/* Question 2 */}
                            <div className="card">
                                <div className="card-header" id="faqHeading-2">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-2" aria-expanded="false" aria-controls="faqCollapse-2">
                                            <span className="badge">2</span> How can Indian farmers apply for agricultural loans to finance their farming operations?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-2" className="collapse" aria-labelledby="faqHeading-2" data-parent="#accordion">
                                    <div className="card-body">
                                        Indian farmers can apply for agricultural loans through various channels, including cooperative banks, regional rural banks (RRBs), and nationalized banks like State Bank of India (SBI), Bank of Baroda (BoB), etc. They usually need to provide documents such as land records, identity proof, and details of the farming activity for loan processing.
                                    </div>
                                </div>
                            </div>

                            {/* Question 3 */}
                            <div className="card">
                                <div className="card-header" id="faqHeading-3">
                                    <div className="mb-0">
                                        <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-3" aria-expanded="false" aria-controls="faqCollapse-3">
                                            <span className="badge">3</span> What are the interest rates for agricultural loans in India?
                                        </h5>
                                    </div>
                                </div>
                                <div id="faqCollapse-3" className="collapse" aria-labelledby="faqHeading-3" data-parent="#accordion">
                                    <div className="card-body">
                                        The interest rates for agricultural loans in India vary depending on factors such as the type of loan, loan amount, and repayment period. Generally, these rates can range from around 3% to 9% per annum, with government-sponsored schemes often offering lower interest rates.
                                    </div>
                                </div>
                            </div>

                            {/* Repeat similar structure for remaining questions */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgriLoanFAQ;
