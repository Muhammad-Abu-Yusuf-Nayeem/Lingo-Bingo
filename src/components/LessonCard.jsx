import React from "react";

const LessonCard = ({ data }) => {
  return (
    <div>
      <div className="card  bg-gray-200 ">
        <div className="card-body">
          <h2 className="card-title mx-auto font-bold text-3xl bg-amber-200 rounded-lg px-4">{data.word}</h2>
          <p className="grid grid-cols-2 font-semibold text-lg">
            <span>Word </span>
            <span className="text-2xl">{data.word}</span>
          </p>
          <p className="grid grid-cols-2 font-semibold text-lg">
            <span>Pronunciation </span>
            <span>{data.pronunciation}</span>
          </p>
          <p className="grid grid-cols-2 font-semibold text-lg">
            <span>Meaning </span>
            <span>{data.meaning}</span>
          </p>
          <p className="grid grid-cols-2 font-semibold text-lg">
            <span>Part of speech </span>
            <span>{data.part_of_speech}</span>
          </p>
          <p className="grid grid-cols-2 font-semibold text-lg">
            <span>Difficulty </span>
            <span>{data.difficulty}</span>
          </p>
          <p className="grid grid-cols-2 font-semibold text-lg">
            <span>Topic </span>
            <span>{data.theme}</span>
          </p>
          <p className=" font-semibold text-lg">
            <span>When to say: </span>
            <span className="col-span-2 text-gray-600">{data.when_to_say}</span>
          </p>
          <p className=" font-semibold text-lg">
            <span>example: </span>
            <span className="col-span-2 text-gray-600">{data.example}</span>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
