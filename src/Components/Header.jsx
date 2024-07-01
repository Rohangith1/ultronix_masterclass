import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-between gap-6">
        <img className="size-10" src="./img/uixLogo.png" alt="logo" />
        <button className="bg-gradient-to-r from-neutral-800 via-neutral-700 to-gray-600  hover:from-pink-500 hover:to-yellow-500 rounded-lg px-2 py-1 text-white font-RobotoMono">
          <p>USE CODE: <strong>UIX2024</strong></p>
        </button>
      </div>

      <div>
        <FaBarsStaggered className='size-7'/>
      </div>
    </div>
  );
}

export default Header