import React from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";

const Home = () => {
    return(
       
             <div className="banner">
            <h1>Best Rental Car in your location</h1>
          

            <a href="#container">
              <button>
              Scroll <CgMouse />
              </button>
            </a>
          </div>

    );
};

export default Home;