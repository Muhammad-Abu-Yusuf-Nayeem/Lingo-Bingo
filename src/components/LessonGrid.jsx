import React, { useEffect, useState } from "react";
import LessonCard from "./LessonCard";

const LessonGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/words.json") // public file → use absolute path
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);
  const selectedIds = ["ar001", "ar071", "ar041"];
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        {/* {data.slice(0, 10).map((lesson) => (
          <LessonCard key={lesson.id} data={lesson} />
        ))} */}

        {data
          .filter((lesson) => selectedIds.includes(lesson.id))
          .map((lesson) => (
            <LessonCard key={lesson.id} data={lesson} />
          ))}
      </div>
      <div className="card-actions justify-end my-4">
        <button className="btn btn-primary">Learn more ...</button>
      </div>
    </div>
  );
};

export default LessonGrid;
