import React from 'react'
import './Home1.css'
import { Link } from 'react-router-dom'

function Home1() {
    return (
        <div className='home1'>
            <img src='../Assets/Iteration-1-assets/home-banner.png' className='home1-img' />
            <div className='home1-text'>
                <h1 className='home1-h1'>Teknolojik Yemekler</h1>
                <h2 className='home1-h2'>KOD ACIKTIRIR <br /> PİZZA, DOYURUR</h2>
                <Link to='order'>
                    <button className='home1-button'>ACIKTIM</button>
                </Link>
            </div>


        </div>
    )
}

export default Home1