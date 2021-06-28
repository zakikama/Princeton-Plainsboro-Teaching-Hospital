import React from 'react'
import Sidebar from '../Sidebar/index'
import '../assets/styles/home.css'
import video from '../assets/movie.mp4';
function Home() {
  return (
    <div class="flex-container">
            <div class="flex-child magenta">
                <Sidebar/>
            </div>
            <div class="flex-child green">
            <video autoplay  muted className='myVideo' >
              <source src={video} type="video/mp4"/>
              
            </video>
            
        </div>
      </div>
  )
}

export default Home
