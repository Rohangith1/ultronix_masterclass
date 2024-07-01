import React from "react";

const Body = () => {
  return (
    <div className="flex flex-col justify-between space-y-9 ">
      <div>
        <img src="./img/file.png" alt="Body-Logo" />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-PlayFair font-bold text-5xl">
          Why ULTRONiX Masterclass?
        </h1>
        <p className="font-RobotoMono text-xl ">
          Welcome to UiX Master classes. In this master class we will help all the upgrowing developer to builed website and Design from the scatch with 1-on-1 mentorship. Also, Project Tutorial, notes and Interview guide question. Here we provide some real life development including deploying website. About Design, We will learn from very beggining to master level...
        </p>
      </div>
      {/* courses */}
      <div>
        <h1 className="font-PlayFair font-bold text-5xl">Courses</h1>
      </div>

      <div className="grid grid-rows-4 grid-flow-col gap-4 ">
        <div className="flex justify-between  items-center px-5 py-10 bg-gradient-to-r from-neutral-800 via-neutral-700 to-gray-600 rounded-lg  hover:from-pink-500 hover:to-yellow-500">
          <div className="flex justify-between flex-col gap-5 ">
            <h2 className=" text-yellow-100  font-PlayFair text-3xl font-bold">
              MERN Stack
            </h2>
            <p className="text-gray-50 font-RobotoMono text-xl ">Ajay Kumar</p>
          </div>

          <div>
            <img className="size-36" src="./img/mern.png" alt="" />
          </div>
        </div>
        <div className=" flex justify-between  items-center px-5 py-10 bg-gradient-to-r from-neutral-800 via-neutral-700 to-gray-600 rounded-lg  hover:from-pink-500 hover:to-yellow-500">
          <div className="flex justify-between flex-col gap-5 ">
            <h2 className=" text-yellow-100  font-PlayFair text-3xl font-bold">
              DSA
            </h2>
            <p className="text-gray-50 font-RobotoMono text-xl ">
              Abhinab Hazarika
            </p>
          </div>

          <div>
            <img className="size-32" src="./img/dsa.png" alt="" />
          </div>
        </div>
        <div className="flex justify-between  items-center px-5 py-10 bg-gradient-to-r from-neutral-800 via-neutral-700 to-gray-600 rounded-lg  hover:from-pink-500 hover:to-yellow-500">
          <div className="flex justify-between flex-col gap-5 ">
            <h2 className=" text-yellow-100  font-PlayFair text-3xl font-bold">
              NEXT JS
            </h2>
            <p className="text-gray-50 font-RobotoMono text-xl ">UiX Phuke</p>
          </div>

          <div>
            <img className="size-36" src="./img/nextJS.png" alt="" />
          </div>
        </div>
        <div className="flex justify-between  items-center px-5 py-10 bg-gradient-to-r from-neutral-800 via-neutral-700 to-gray-600 rounded-lg  hover:from-pink-500 hover:to-yellow-500">
          <div className="flex justify-between flex-col gap-5 ">
            <h2 className=" text-yellow-100  font-PlayFair text-3xl font-bold">
              Adobe Illustrator
            </h2>
            <p className="text-gray-50 font-RobotoMono text-xl ">
              Tonmoy Goswami
            </p>
          </div>

          <div>
            <img className="size-24" src="./img/adobee.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
