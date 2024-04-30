import React, { FC } from "react";
import transition from "../transition";

const Topics: FC = () => {
  return (
    <div className="container mx-auto h-full flex justify-center">
      <div className="w-full my-auto bg-[red] h-full mt-[100px]">
        <h1 className="text-[--black] text-[32px]">Topics:</h1>
      </div>
    </div>
  );
};

export default transition(Topics);




