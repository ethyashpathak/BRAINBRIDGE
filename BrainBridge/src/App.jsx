import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/footer'
import AuthForm from './components/auth/authform'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home/home'
import Course from './components/courses/course'
import OurTeam from './components/OurTeam/OurTeam'


function App() {
  

  return (
    <div className='bg-white dark:bg-black'>

      <Header/>
      <main className="min-h-[80vh] px-4 py-6 bg-amber-50 dark:bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/OurTeam" element={<OurTeam />} />
          
          <Route path="/courses" element={<Course />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
