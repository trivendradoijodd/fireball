import React from 'react';
import logo from './logo.svg';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "shards-ui/dist/css/shards.min.css"

function App() {
  return (
    <div className="container-fluid">
  <div className="row">
    <main className="main-content col-12 p-0">
      <div className="main-navbar sticky-top bg-white">
        {/* Main Navbar */}
        <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
          <ul className="navbar-nav border-left flex-row ">
            <li className="nav-item dropdown ml-3">
              <a href="#" style={{ textDecoration: "none" }}>
                <h3
                  className="page-title"
                  style={{
                    fontFamily: '"Ruda", sans-serif',
                    lineHeight: "3.5rem"
                  }}
                >
                  <span style={{ color: "black" }}>AGRO</span>
                  <span style={{ color: "#31859C" }}>TRUST</span>
                </h3>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* / .main-navbar */}
      <div className="col-lg-10 main-content-container container-fluid px-4">
        {/* Page Header */}
        <div className="page-header row no-gutters py-0">
          <div className="text-center my-auto">
            <h3
              className="page-title"
              style={{ fontFamily: '"Ruda", sans-serif' }}
            >
              {/* QRIOSITY */}
              <span style={{ color: "black" }}>QR</span>
              <span style={{ color: "#31859C" }}>IOSITY</span>
            </h3>
            <span className="text-uppercase" style={{ fontSize: 9 }}>
              Powered by{" "}
              <span style={{ fontFamily: '"Ruda", sans-serif' }}>
                {/* QRIOSITY */}
                <span style={{ color: "black" }}>AGRO</span>
                <span style={{ color: "#31859C" }}>TRUST</span>
              </span>
            </span>
          </div>
          <div className="col-1.5" style={{ marginLeft: "auto" }}>
            <div
              className="blog-comments__item d-flex p-3"
              style={{ margin: "0 auto" }}
            >
              <div className="blog-comments__avatar">
                <a href="http://www.sahyadrifarms.com">
                <img
                  style={{
                    width: "6.125rem",
                    height: "6.125rem"
                  }}
                  src="./images/sahyadri_logo.png"
                  alt="User avatar"
                />
                </a>
              </div>
              <div className="blog-comments__content"></div>
            </div>
          </div>
        </div>
        {/* End Page Header */}
        {/* Small Stats Blocks */}
        <div className="row">
          <div className="col-lg mb-4">
            <div className="card card-small">
              <div className="card-header border-bottom">
                <h6 className="m-0">
                  Cauliflower-Cauliflower-Piece - 1 Kg to 1.5 Kg (1.25 Kgs)
                </h6>
              </div>
              <div className="card-body p-0">
                <ul className="list-group list-group-small list-group-flush">
                  <li className="list-group-item d-flex px-3">
                    <span className="text-semibold text-fiord-blue  text-reagent-gray">
                      Warehouse name
                    </span>
                    <span className="ml-auto text-right text-semibold">
                      Holding Area - F&amp;V(Holding Area)
                    </span>
                  </li>
                  <li className="list-group-item d-flex px-3">
                    <span className="text-semibold text-fiord-blue text-reagent-gray">
                      Warehouse address
                    </span>
                    <span className="ml-auto text-right text-semibold">
                      Mohadi, Dindori, Nashik, Maharashtra, India, Asia, 422206,
                      Nashik, Maharashtra, India, Asia
                    </span>
                  </li>
                </ul>
              </div>
              <div className="card-footer border-top" />
            </div>
          </div>
        </div>
        {/* End Small Stats Blocks */}
        <div className="row">
          {/* Users Stats */}
          {/* End Users Stats */}
          {/* Users By Device Stats */}
          <div
            className="col-lg-6 col-md-6 col-sm-8 mb-4"
            style={{ margin: "0 auto" }}
          >
            <div className="card card-small">
              <div
                className="card-body d-flex py-0"
                style={{ overflow: "auto" }}
              >
                <div className="blog-comments__item d-flex p-3">
                  <div className="blog-comments__avatar mr-3">
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/cropin-smartfarm/ProductionSAH/SmartFarm/IMG_FarmerImage_2_6_20170912_113511.jpg"
                      alt="User avatar"
                      style={{ width: "10.125rem", height: "11.125rem" }}
                    />{" "}
                  </div>
                  <div
                    className="blog-comments__content"
                    style={{ height: 100, marginTop: "1em" }}
                  >
                    <div className="my-auto">
                      <p className="mb-0 text-secondary" href="#">
                        Kathe Sagar Abaji
                      </p>
                      <p className="m-0 my-0 mb-0 text-muted">Janori</p>
                      <p className="m-0 my-0 mb-2 text-muted">
                        Nashik, Maharashtra, India
                      </p>
                      <button
                        type="button"
                        className="mb-2 btn btn-sm btn-success mr-1"
                        onClick={()=>{
                          window.location.href='https://www.google.com/maps/search/?api=1&query=20.1045 73.8913'
                        }}
                      >
                        <i className="material-icons">gps_fixed</i>&nbsp; Locate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-small">
                <div className="card-body p-0">
                  <ul className="list-group list-group-small list-group-flush">
                    <li className="list-group-item d-flex px-3">
                      <span className="text-semibold text-fiord-blue  text-reagent-gray">
                        Farm Location
                      </span>
                      <span className="ml-auto text-right text-semibold">
                        Dindori Rd, Bajrang Nagar, Maharashtra 422207, India
                      </span>
                    </li>
                    <li className="list-group-item d-flex px-3">
                      <span className="text-semibold text-fiord-blue text-reagent-gray">
                        Farm Area
                      </span>
                      <span className="ml-auto text-left text-semibold">
                        1 acres
                      </span>
                    </li>
                    <li className="list-group-item d-flex px-3">
                      <span className="text-semibold text-fiord-blue text-reagent-gray">
                        Crop Variety
                      </span>
                      <span className="ml-auto text-left text-semibold">
                        Cauliflower - Cauliflower
                      </span>
                    </li>
                    <li className="list-group-item d-flex px-3">
                      <span className="text-semibold text-fiord-blue text-reagent-gray">
                        Sowing Date
                      </span>
                      <span className="ml-auto text-left text-semibold">
                        28 Jul 2019
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="card-footer border-top" />
              </div>
            </div>
          </div>
          {/* End Users By Device Stats */}
          {/* New Draft Component */}
          {/* End New Draft Component */}
          {/* Discussions Component */}
          {/* End Top Referrals Component */}
        </div>
      </div>
      <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
        <span className="copyright ml-auto my-auto mr-2">
          Copyright © 2019 &nbsp;
          <a href="https://agrotrust.io" rel="nofollow">
            AgroTrust
          </a>
        </span>
      </footer>
    </main>
  </div>
</div>
  );
}

export default App;
