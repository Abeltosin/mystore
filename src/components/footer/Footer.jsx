import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid bg-secondary" style={{minHeight: 400}}>
      {/* first row */}
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
        {/* first column */}
        <div className="col">
        <h3>OTA-MART</h3>
      <p className='' style={{textAlign: 'justify', textJustify: 'inter-word'}}>Discover the unparalleled shopping experience awaiting you at Ota-Mart. With our vast array of handpicked products, exceptional customer service, and unbeatable prices, we're committed to redefining your online shopping journey. Join our community today and embark on a seamless voyage of convenience, quality, and savings.</p>
        </div>
        {/* second column */}
        <div className="col">
      <h3 className=''>About Us</h3>
          <p><span className='text-danger'>&gt;</span>Intergrity</p>
          <p><span className='text-danger'>&gt;</span>Trust Worthy</p>
          <p><span className='text-danger'>&gt;</span>Quality</p>
          <p><span className='text-danger'>&gt;</span>Affordability</p>
          <p><span className='text-danger'>&gt;</span>Unique</p>
          <p><span className='text-danger'>&gt;</span>FAQ</p>
          <p><span className='text-danger'>&gt;</span>Terms & Conditions</p>
        </div>
        {/* third column */}
      <div className="col">
      <h3 className=''>Customer Care</h3>
        <p>ota@hotline.com</p>
        <p>07036897888</p>
        <p>help@gmail.0ta</p>
      </div>
      {/* forth column */}
        <div className="col overflow-hidden">
      <h3 className=''>Contact Us</h3>
      <p>07, Victory Estate, Isolo, LAgos, Nigeria</p>
          <p>Phone: 07036897888</p>
          <p>Email: help@gmail.com</p>
        </div>
    </div>
    </div>
  );
}

export default Footer;
