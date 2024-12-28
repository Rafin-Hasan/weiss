import React from "react";
import PartOne from "../Components/Page component/PartOne";
import PartTwo from "../Components/Page component/PartTwo";
import PartThree from "../Components/Page component/PartThree";

const MainPage = () => {
  return (
    <>
      <PartOne />
      <PartTwo />
      {/* <PartThree /> */}
      <div className="absolute top-[772px] z-[-1]">
        <img src="./images/bg.png" alt="bg" />
      </div>
    </>
  );
};

export default MainPage;
