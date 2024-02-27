import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  justify-content-center nav1">
        <div className="container-fluid">
      

          <button className="navbar-toggler bg-white text-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
{/*         
            <form className="d-flex align-items-center" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ maxWidth: '200px' }} />
            
            </form> */}
           <form className="d-flex align-items-center mt-2" role="search">
  <div className="input-group ">
  <span className="input-group-text bg-white border-0 border-end-0 text-center">
      <i className="bi bi-search" style={{ color: '#626E79' }} ></i>
    </span>
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ maxWidth: '200px' }} />
  </div>
</form>
            <ul className="navbar-nav mb-3 mb-lg-0">
  <li className="nav-item" style={{ marginLeft: '20px' }}>
    <a className="nav-link active" aria-current="page" href="#" style={{ color: '#D1D6DA' }}>categories </a>
  </li>
  <li className="nav-item" style={{ marginLeft: '20px' }}>
    <a className="nav-link active" aria-current="page" href="#" style={{ color: '#D1D6DA' }}>website builders </a>
  </li>
  <li className="nav-item" style={{ marginLeft: '20px' }}>
    <a className="nav-link active" aria-current="page" href="#" style={{ color: '#D1D6DA' }}>Today deal</a>
  </li>
 
</ul>
          </div>
        </div>
      </nav>
    </div>
  );
}