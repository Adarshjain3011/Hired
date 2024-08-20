
import React from 'react' ;


const Navbar = () => {
  return (
    <div className='bg-black w-full flex justify-between items-center'>

        <div className='w-[100px] h-[100px]'>

            {/* logo */}

            <img src="/logo.png" alt="" className='w-full h-full bg-cover'/>

        </div>

        <div className='text-white bg-slate-800 font-semibold p-2 px-3  rounded-md cursor-pointer'>login</div>

    </div>
  )
}

export default Navbar ;


