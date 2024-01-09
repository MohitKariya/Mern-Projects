import React from "react";
// import { FaCalenderAlt } from "react-icons/fa";
import "./Home.css";

const Home = () => {
    return(
       
             <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
              Scroll {/* <FaCalenderAlt /> */}
              </button>
            </a>
          </div>

    );
};

export default Home;