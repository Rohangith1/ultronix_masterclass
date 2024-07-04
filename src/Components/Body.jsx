import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Body = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
          Welcome to UiX Master classes. In this master class we will help all
          the upgrowing developer to builed website and Design from the scatch
          with 1-on-1 mentorship. Also, Project Tutorial, notes and Interview
          guide question. Here we provide some real life development including
          deploying website. About Design, We will learn from very beggining to
          master level...
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

      {/* Reviews*/}
      <h1 className="font-PlayFair text-5xl font-bold">Reviews</h1>

      <div className="w-3/4 m-auto ">
        <div className="mt-10">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="bg-red-100 h-[450px] rounded-xl">
                <div className="rounded-t-xl  py-5 bg-indigo-500 flex justify-center items-center">
                  <img
                    src={d.img}
                    alt="img"
                    className="h-44 w-44 rounded-full space-y-2"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <h2 className="text-xl font-PlayFair ">{d.name}</h2>
                  <p className="font-RobotoMono mb-2 align-text-bottom">
                    {d.review}
                  </p>
                  <button className="rounded-md bg-indigo-800 text-white px-2 py-2 font-RobotoMono">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* end Reviews*/}

      {/* email sec*/}

      <div className="flex flex-col justify-between  gap-6 ">
        <h1 className="font-PlayFair text-5xl mt-10 font-bold">
          Leave a comment
        </h1>
        <form className="" action="">
          <div className="font-RobotoMono flex flex-col gap-2   ">
            <input
              className="px-2 py-3 rounded-md"
              type="email"
              placeholder="Enter Your Email"
              name=""
              id=""
            />
            <input
              className="px-2 py-10 rounded-md"
              type="text"
              placeholder="Leave a Message"
              name=""
              id=""
            />
          </div>
          <div>
            <button className="font-semibold flex items-center font-RobotoMono bg-slate-600 rounded-md px-20 py-2 text-white mt-3">
              Send
            </button>
          </div>
        </form>
      </div>

      {/* email sec end*/}
    </div>
  );
};

export default Body;

const data = [
  {
    name: `Stephen`,
    img: `./img/stephen.jpg`,
    review: `This DSA course help me to get in the Meta`,
  },
  {
    name: `Jhon`,
    img: `./img/jhon.jpg`,
    review: `This MERN course help me to become a full stack dev`,
  },
  {
    name: `Bronzz`,
    img: `./img/phuke.png`,
    review: `Trust me I am very good backend dev`,
  },
  {
    name: `Mike`,
    img: `./img/bronzz.jpg`,
    review: `This DSA course help me to get in my dream company`,
  },
  {
    name: `Hanry`,
    img: `./img/new.jpeg`,
    review: `This DSA course help me to get in the Microsoft`,
  },
  {
    name: `Kalisto`,
    img: `./img/kalisto.jpg`,
    review: `Now Im a very good Designer`,
  },
];
