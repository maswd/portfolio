import React from 'react';
import Typed from "react-typed"

const Hero = () => {
    return (
        <div id="hero" className="hero route bg-image" style={{ backgroundImage: "url(/img/hero-bg.jpg)" }}>
            <div className="overlay-itro"></div>
            <div className="hero-content display-table">
                <div className="table-cell">
                    <div className="container">

                        <h1 className="hero-title mb-4">I am Masoud Gorgani</h1>
                        <Typed
                            style={{ textAlign: "left",fontSize: "20px" }}
                            strings={[
                                " برنامه نویس ",
                                "طراح سایت ",
                               
                            ]}
                            typeSpeed={200}
                            backSpeed={100}
                            loop
                        />
                        {/* <p className="hero-subtitle"><span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p> */}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
