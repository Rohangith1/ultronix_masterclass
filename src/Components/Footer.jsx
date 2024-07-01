import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex flex-col justify-between '>
      <div>
        <h2 className="font-RobotoMono mt-10 text-xl">
          Developed ❤️ with <strong>ULTRONiX</strong>
        </h2>
      </div>
      <div className='flex flex-row justify-between'>
        <h2 className='font-RobotoMono font-semibold'> Connect with Us </h2>
        <ul className="flex flex-row gap-4 text-3xl md:text-5xl ">
          <li>
            <a href="">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="">
              <RiInstagramFill />
            </a>
          </li>
          <li>
            <a href="">
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer