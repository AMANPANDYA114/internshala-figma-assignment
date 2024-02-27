import React from 'react';

function Footer() {
 

  return (
    <div>
      <div className="container mb-4 mt-4">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <div className="input-group mb-3">
            <p style={{ whiteSpace: 'nowrap' }} className='text-center mt-1 pt-1 me-3 fontArr customFontSize'>Sign up and get exclusive special deals</p>




              <button className="btn btn-primary btn-sm" type="button" id="button-addon2">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark containers footer text-center ">
        <div className="container ">
          <div className="row">
            <div className="col-md-3 d-flex justify-content-center text-white ">
              <div className="product" style={{ marginRight: '10px' }}>
                <p className="text-center" >Categories</p>
                <ul className="list-unstyled ">
                <li className="text-center" style={{ color: "#B6BDC4" }}>Web Builder</li>

                  <li className="text-center" style={{ color: "#B6BDC4" }}>Hosting</li>
                  <li className="text-center" style={{ color: "#B6BDC4" }}>Data Center</li>
                  <li className="text-center "  style={{ color: "#B6BDC4" }}>Robotic-Automation</li>
               
                </ul>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center text-white ">
              <div className="product" style={{ marginRight: '10px' }}>
                <p className="text-center">Contact</p>
                <ul className="list-unstyled ">
                  <li className="text-center" style={{ color: "#B6BDC4" }}>Contact</li>
                  <li className="text-center" style={{ color: "#B6BDC4" }}>Privacy Policy</li>
                  <li className="text-center" style={{ color: "#B6BDC4" }}>Terms Of Service</li>
                  <li className="text-center" style={{ color: "#B6BDC4" }}>Categories</li>
                  <li className="text-center" style={{ color: "#B6BDC4" }}>About</li>
                
                </ul>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center text-white">
              <div className="product">
                
                <ul className="list-unstyled ">
                  <li className="text-center mt-5" style={{ color: "#B6BDC4" }}>united state <img src="https://i.postimg.cc/qBNM1LcK/IMAGE-6.png"/></li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
