import { useEffect, useState } from 'react'
import './App.css';

import { supabase } from './supabaseClient';

import LandingPage from './pages/LandingPage';

function App() {

  return (

    <div className='bg-black w-screen min-h-screen'>

      <LandingPage></LandingPage>

    </div>
  )
}

export default App ;





