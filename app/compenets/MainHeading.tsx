import React from "react";

const MainHeading = ({ title }: { title: string }) => {
  return (
    <div className="w-full border-l-4 border-red-400 pl-4 mb-6">
      <h2 className="text-4xl font-bold text-red-400">
        {title}
      </h2>
    </div>
  );
};

export default MainHeading;
