import React from "react";
import PageTitle from "../components/PageTitle";
import LessonGrid from "../components/LessonGrid";

const LetsLearnPage = () => {
  return (
    <div>
      {/* page title */}
      <div>
        <PageTitle text="Let's Learn Arabic words"></PageTitle>
      </div>
      {/* main container */}
      <LessonGrid></LessonGrid>
    </div>
  );
};

export default LetsLearnPage;
