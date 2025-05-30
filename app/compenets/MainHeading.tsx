import React from "react";

const MainHeading = ({ title }: { title: string }) => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-red-400 mb-5">
        {title}
      </h2>
    </div>
  );
};

export default MainHeading;
