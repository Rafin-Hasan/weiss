import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PartOne from "../Components/Page component/PartOne";
import PartTwo from "../Components/Page component/PartTwo";
import PartThree from "../Components/Page component/PartThree";
import PartFour from "../Components/Page component/PartFour";
import PartFive from "../Components/Page component/PartFive";
import Footer from "../Components/Page component/Footer";

const MainPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second animation duration
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <PartOne />
      </div>
      <div data-aos="fade-up">
        <PartTwo />
      </div>
      <div data-aos="fade-up">
        <PartThree />
      </div>
      <div data-aos="fade-up">
        <PartFour />
      </div>
      <div data-aos="fade-up">
        <PartFive />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
