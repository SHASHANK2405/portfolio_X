import React from "react";

const Stats = () => {
  const statsData = [
    { count: "250M+", label: "Plays" },
    { count: "10k+", label: "Live Players" },
    { count: "200+", label: "Worked with" },
  ];

  return (
    <div className="relative w-full">
      {/* 🔹 Grid background */}
      <div className="absolute inset-0 h-full w-full flex items-center justify-center bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* 🔹 Top border stripe */}
      <div className="absolute top-0 left-0 w-full h-6 bg-[repeating-linear-gradient(45deg,#a78bfa_0px,#a78bfa_10px,transparent_10px,transparent_20px)] [mask-image:linear-gradient(to_right,black_50%,transparent_50%)] [mask-size:20px_100%] [mask-repeat:repeat]" />

      {/* 🔹 Stats content */}
      <div className="relative flex flex-col gap-10 justify-between w-11/12 max-w-7xl mx-auto py-16">
        <div className="flex flex-row flex-wrap justify-center md:grid md:grid-cols-3 text-center gap-8">
          {statsData.map((data, index) => (
            <div
              className="flex flex-col items-center py-6 px-4 min-w-[120px]"
              key={index}
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-white">
                {data.count}
              </h1>
              <h2 className="font-semibold text-xl sm:text-3xl text-gray-300 mt-2">
                {data.label}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Bottom border stripe */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-[repeating-linear-gradient(-45deg,#a78bfa_0px,#a78bfa_10px,transparent_10px,transparent_20px)] [mask-image:linear-gradient(to_right,black_50%,transparent_50%)] [mask-size:20px_100%] [mask-repeat:repeat]" />
    </div>
  );
};

export default Stats;
