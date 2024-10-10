import React from 'react'
import './Home1.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Home1() {
    return (
        <div className='page1'>
            <header className='home1'>
                <img src='../Assets/Iteration-1-assets/home-banner.png' className='home1-img' />
                <div className='home1-text'>
                    <h1 className='home1-h1'>Teknolojik Yemekler</h1>
                    <h2 className='home1-h2'>KOD ACIKTIRIR <br /> PİZZA, DOYURUR</h2>
                    <Link to='order'>
                        <button className='home1-button' data-cy="aciktim-button">ACIKTIM</button>
                    </Link>
                </div>


            </header>

            <div class="container1">
                <div class="meal-items">
                    <img src="../Assets/Iteration-2-aseets/icons/1.svg" />
                    <p>YENİ! KORE</p>
                </div>
                <div class="meal-items pizza">
                    <img src="../Assets/Iteration-2-aseets/icons/2.svg" />
                    <p>Pizza</p>
                </div>
                <div class="meal-items">
                    <img src="../Assets/Iteration-2-aseets/icons/3.svg" />
                    <p>Burger</p>
                </div>
                <div class="meal-items">
                    <img src="../Assets/Iteration-2-aseets/icons/4.svg" />
                    <p>Kızartmalar</p>
                </div>
                <div class="meal-items">
                    <img src="../Assets/Iteration-2-aseets/icons/5.svg" />
                    <p>Fast food</p>
                </div>
                <div class="meal-items">
                    <img src="../Assets/Iteration-2-aseets/icons/6.svg" />
                    <p>Gazlı İçecek</p>
                </div>
            </div>

            <div class="container2">
                <div class="card-items">
                    <div class="card1"  >
                        <h1>Özel</h1>
                        <h3>Lezzetus</h3>
                        <h2>Position:Absolute Acı Burger</h2>
                        <Link to='order'>
                            <button>SİPARİŞ VER</button>
                        </Link>

                    </div>
                    <div class="card-items2">
                        <div class="card2">
                            <h1>Hackathlon </h1>
                            <h2>Burger Menü</h2>
                            <Link to='order'>
                                <button>SİPARİŞ VER</button>
                            </Link>

                        </div>
                        <div class="card3">
                            <h1><span style={{ color: "#D80027" }}>Çoooook</span> hızlı</h1>
                            <h2>npm gibi kurye</h2>
                            <Link to='order'>
                                <button>SİPARİŞ VER</button>
                            </Link>

                        </div>
                    </div>


                </div>

            </div>
            <div class="container3">
                <h1>en çok paketlenen menüler</h1>
                <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>

            </div>


            <div class="container20">
                <div class="meal-items20">
                    <img src="../Assets/Iteration-2-aseets/icons/1.svg" />
                    <p>Ramen</p>
                </div>
                <div class="meal-items20 siyah-pizza">
                    <img src="../Assets/Iteration-2-aseets/icons/2.svg" />
                    <p>Pizza</p>
                </div>
                <div class="meal-items20">
                    <img src="../Assets/Iteration-2-aseets/icons/3.svg" />
                    <p>Burger</p>
                </div>
                <div class="meal-items20">
                    <img src="../Assets/Iteration-2-aseets/icons/4.svg" />
                    <p>French Fries</p>
                </div>
                <div class="meal-items20">
                    <img src="../Assets/Iteration-2-aseets/icons/5.svg" />
                    <p>Fast food</p>
                </div>
                <div class="meal-items20">
                    <img src="../Assets/Iteration-2-aseets/icons/6.svg" />
                    <p>Soft drinks</p>
                </div>
            </div>
            <div class="container4">
                <div class="content4">
                    <img src="../Assets/Iteration-2-aseets/pictures/food-1.png" />
                    <h1>Terminal Pizza</h1>
                    <div class="sayilar">
                        <p>4.9</p>
                        <div class="price">
                            <p>200</p>
                            <p><span >60t</span></p>
                        </div>
                    </div>
                </div>
                <div class="content4">
                    <img src="../Assets/Iteration-2-aseets/pictures/food-2.png" />
                    <h1>Position Absolute Acı Pizza</h1>
                    <div class="sayilar">
                        <p>4.9</p>
                        <div class="price">
                            <p>200</p>
                            <p><span >60t</span></p>
                        </div>
                    </div>
                </div>
                <div class="content4">
                    <img src="../Assets/Iteration-2-aseets/pictures/food-3.png" />
                    <h1>useEffect Tavuklu Burger</h1>
                    <div class="sayilar">
                        <p>4.9</p>
                        <div class="price">
                            <p>200</p>
                            <p><span >60t</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >



    )
}

export default Home1