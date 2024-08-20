
import React from 'react';

import Navbar from '../components/common/Navbar';

import Button from '@/components/ui/button';

const LandingPage = () => {

    return (

        <div className='w-11/12 h-full mx-auto flex flex-col justify-center items-center'>

            <Navbar />

            <div className='flex flex-col mt-16'>

                <h1 className='text-white font-bold text-7xl'>Find Your Dream Job </h1>
                <h1 className='text-white font-bold text-7xl text-center'>and get Hired </h1>  

                <p className='text-center text-slate-600 mt-6'>Explore thousand of job listing or find the perfect candidate  </p>

            </div> 

            <div className='flex gap-10 mt-16'>

                <Button bgColor='sky-500'>Find jobs</Button>

                <Button bgColor='red-900'>Post a job</Button>

            </div>
            

        </div>
    )
}

export default LandingPage;


