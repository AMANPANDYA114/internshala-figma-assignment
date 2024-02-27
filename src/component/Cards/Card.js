import React from 'react';
import { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
export default function Card() {
  const [rating, setRating] = useState(1);

  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
  };

  return (
    <div className='container'>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card mt-2  border-0">
          <div className="d-inline"> {/* Wrapping div to make button inline */}
          <button type="button " className="btn btn-primary border-0" style={{ backgroundColor: "#FF7724" }}>
        
          <img src="https://i.postimg.cc/15yPgcf6/IMAGE-5.png" className=''  />



  Best choice
</button>

             </div>
            <div className="card-body">
            <h5 className=" brr card-title " style={{ color: "#626E79" }}>1</h5>

            <img className="text-center" src="https://i.postimg.cc/85Nh8j2t/download-1.png" alt="Builder 1" style={{paddingLeft: "16%"}} />

            <p className="ms-5 ps-5  ta" style={{ color: "#626E79"  }}>Builder 1</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mt-2 border-0">
            <div className="card-body">
              <div style={{ display: "inline-block" }}>
                <h3 style={{ fontSize: "13px", overflowWrap: "break-word" }}>
                  <span className='font-weight-bold bolds fonts'>WixPro 72-Inch Responsive Website Builder-</span>
               
                  <p className="card-text" style={{ fontSize: "16px", fontWeight: 'lighter'}}>
    
                  Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue) 
</p>

                </h3>
              </div>
              <h1 style={{ fontSize: "15px", fontWeight: 700 }}>Main Highlights</h1>
              <p className="card-text" style={{ fontSize: "16px", fontWeight: 'lighter'}}>
                [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides..
              </p>
              <p className='mt-3' style={{ color: "#1B88F4" }}>show more<img src="https://i.postimg.cc/sDHrx2rX/IMAGE-3.png" width="4%" alt="Show More" /></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3 border-0">
            <div className="card-body d-flex justify-content-center align-items-center" style={{ height: '' }}>
              <div className="custom-box text-center">
                <p className="m-0">9.8 <br /> exceptional</p>
                <br />

             
   
      <StarRatingComponent 
        name="rate1" 
        starCount={5}
        value={rating}
        onStarClick={onStarClick}
      />
   
                {/* <img src="https://i.postimg.cc/L4QS6VLf/IMAGE-4.png" className="img-fluid" alt="Image" /> */}
              </div>

        
            </div>
            <div className="d-flex justify-content-center align-items-center mt-4" style={{ height: " " }}> {/* Wrapping div to center button */}
            <button 
  type="button" 
  className="btn btn-primary border-0" 
  style={{ 
    width: "232px", 
    height: "48px", 
    backgroundColor: "#1B88F4", 
    borderRadius: "12px" // Added comma here
  }}
>
  View
</button>

</div>

          </div>
        </div>
      </div>



      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card border-0">
          <div className="d-inline"> {/* Wrapping div to make button inline */}
          <button type="button " className="btn btn-primary border-0" style={{ backgroundColor: "#FF7724" }}>
  <img src="https://i.postimg.cc/90LdXBMZ/IMAGE-7.png" />
  Best value
</button>
             </div>
            <div className="card-body">
              <h5 className="card-title brr" style={{ color: "#626E79" }}>2</h5>
             
            <img className="text-center" src="https://i.postimg.cc/85Nh8j2t/download-1.png" alt="Builder 1" style={{paddingLeft: "16%"}} />
            <p className="ms-5 ps-5" style={{ color: "#626E79", marginLeft: "16%" }}>Builder 1</p>

            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0  m ">
            <div className="card-body">
              <div style={{ display: "inline-block" }}>
                <h3 style={{ fontSize: "13px", overflowWrap: "break-word" }}>
                  <span className='font-weight-bold bolds fonts'>SiteCraft 68-Inch Ultimate Web Design Studio-</span>
                  <p className="card-text" style={{ fontSize: "16px", fontWeight: 'lighter'}}>
                  Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)
</p>
                </h3>
              </div>
              <h1 style={{ fontSize: "15px", fontWeight: 700 }}>Main Highlights</h1>
              <p className="card-text" style={{ fontSize: "16px", fontWeight: 'lighter'}}>
              [What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.
              </p>
              <p className='mt-3' style={{ color: "#1B88F4" }}>show more<img src="https://i.postimg.cc/sDHrx2rX/IMAGE-3.png" width="4%" alt="Show More" /></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-5  border-0">
            <div className="card-body d-flex justify-content-center align-items-center" style={{ height: '' }}>
              <div className="custom-box text-center ">
                <p className="m-0">9.4 <br /> exceptional</p>
                <br />
           
      <StarRatingComponent 
        name="rate1" 
        starCount={5}
        value={rating}
        onStarClick={onStarClick}
      />
              </div>

        
            </div>
            <div className="d-flex justify-content-center align-items-center  mt-4" style={{ height: " " }}> {/* Wrapping div to center button */}
            <button 
  type="button" 
  className="btn btn-primary border-0" 
  style={{ 
    width: "232px", 
    height: "48px", 
    backgroundColor: "#1B88F4", 
    borderRadius: "12px" // Added comma here
  }}
>
  View
</button>
</div>

          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card border-0">
          <div className="d-inline"> {/* Wrapping div to make button inline */}
        
             </div>
            <div className="card-body">
              <h5 className="card-title  brr" style={{ color: "#626E79" }}>3</h5>
              
            <img className="text-center" src="https://i.postimg.cc/85Nh8j2t/download-1.png" alt="Builder 1" style={{paddingLeft: "16%"}} />
            <p className="ms-5 ps-5" style={{ color: "#626E79" }}>Builder 1</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <div className="card-body">
              <div style={{ display: "inline-block" }}>
                <h3 style={{ fontSize: "13px", overflowWrap: "break-word" }}>
                  <span className='font-weight-bold bolds fonts'>WixPro 72-Inch Responsive Website Builder</span>
                  <p className="card-text" style={{ fontSize: "16px", fontWeight: 'lighter'}}>
                  Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue) 
</p>
                </h3>
              </div>
              <h1 style={{ fontSize: "15px", fontWeight: 700 }}>Main Highlights</h1>
              <p className="card-text" style={{ fontSize: "16px", fontWeight: 'lighter'}}>
                [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides..
              </p>
              <p className='mt-3' style={{ color: "#1B88F4" }}>show more<img src="https://i.postimg.cc/sDHrx2rX/IMAGE-3.png" width="4%" alt="Show More" /></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <div className="card-body d-flex justify-content-center align-items-center" style={{ height: '' }}>
              <div className="custom-box text-center mt-4">
                <p className="m-0">9.4 <br /> very good</p>
                <br />
              
      <StarRatingComponent 
        name="rate1" 
        starCount={5}
        value={rating}
        onStarClick={onStarClick}
      />
              </div>

        
            </div>
            <div className="d-flex justify-content-center align-items-center mt-4" style={{ height: " " }}> 
            <button 
  type="button" 
  className="btn btn-primary border-0" 
  style={{ 
    width: "232px", 
    height: "48px", 
    backgroundColor: "#1B88F4", 
    borderRadius: "12px" // Added comma here
  }}
>
  View
</button>
</div>

          </div>
        </div>
      </div>






      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card border-0">
          <div className="d-inline"> {/* Wrapping div to make button inline */}
         
             </div>
            <div className="card-body">
              <h5 className="card-title  brr" style={{ color: "#626E79" }}>4</h5>
              
            <img className="text-center" src="https://i.postimg.cc/85Nh8j2t/download-1.png" alt="Builder 1" style={{paddingLeft: "16%"}} />
            <p className="ms-5 ps-5" style={{ color: "#626E79", paddingLeft: "40px", margin: "10px" }}>CDK</p>

            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3 border-0">
            <div className="card-body">
              <div style={{ display: "inline-block" }}>
                <h3 style={{ fontSize: "13px", overflowWrap: "break-word" }}>
                  <span className='font-weight-bold bolds fonts'>CDK Resposive Builder:</span>
                  <p className="card-text" style={{ fontSize: "16px", fontWeight: 'lighter'}}>
                  An extensive library of widgets and apps, and detailed step-by-step guides
</p>
                </h3>
              </div>
              <h1 style={{ fontSize: "15px", fontWeight: 700 }}>Main Highlights</h1>
              <p className="card-text" style={{ fontSize: "16px", fontWeight: 'lighter'}}>
                [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides..
              </p>
              <p className='mt-3' style={{ color: "#1B88F4" }}>show more<img src="https://i.postimg.cc/sDHrx2rX/IMAGE-3.png" width="4%" alt="Show More" /></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <div className="card-body d-flex justify-content-center align-items-center" style={{ height: '' }}>
              <div className="custom-box text-center mt-5">
                <p className="m-0">9.6 <br /> good</p>
                <br />
             
      <StarRatingComponent 
        name="rate1" 
        starCount={5}
        value={rating}
        onStarClick={onStarClick}
      />
              </div>

        
            </div>
            <div className="d-flex justify-content-center align-items-center mt-4" style={{ height: " " }}> {/* Wrapping div to center button */}
            <button 
  type="button" 
  className="btn btn-primary border-0" 
  style={{ 
    width: "232px", 
    height: "48px", 
    backgroundColor: "#1B88F4", 
    borderRadius: "12px" // Added comma here
  }}
>
  View
</button>

</div>

          </div>
        </div>
      </div>

























    </div>
  );
}

