import React from 'react'
import './Home1.css'
import { Link } from 'react-router-dom'

function Home1() {
    return (
        <div>
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
                        <button>SİPARİŞ VER</button>
                    </div>
                    <div class="card-items2">
                        <div class="card2">
                            <h1>Hackathlon </h1>
                            <h2>Burger Menü</h2>
                            <button>SİPARİŞ VER</button>
                        </div>
                        <div class="card3">
                            <h1><span style={{ color: "#D80027" }}>Çoooook</span> hızlı</h1>
                            <h2>npm gibi kurye</h2>

                            <button>SİPARİŞ VER</button>
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
                <div class="meal-items20" style={{
                    background: "black",
                    color: "white",
                    borderRadius: "50px",
                    padding: "5px 20px"
                }}>
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

            {/* <footer>
                <div class="main-footer">
                    <div class="upper-footer">
                        <div class="footer-1">
                            <h1>Teknolojik Yemekler</h1>
                            <div class="footer-item-container">
                                <div class="footer-item">
                                    <img src="../Assets/Iteration-2-aseets/footer/icons//icon-1.png" />
                                    <p>341 Londonderry Road, Istanbul Türkiye</p>
                                </div>
                                <div class="footer-item">
                                    <img src="../Assets/Iteration-2-aseets/footer/icons//icon-2.png" />
                                    <p>aciktim@teknolojikyemekler.com</p>
                                </div>
                                <div class="footer-item">
                                    <img src="../Assets/Iteration-2-aseets/footer/icons//icon-3.png" />
                                    <p>+90 216 123 45 67</p>
                                </div>
                            </div>
                        </div>
                        <div class="footer-2">
                            <h2>Hot Menu</h2>
                            <div class="footer-2-container">
                                <p>Terminal Pizza</p>
                                <p>5 Kişilik Hackathlon Pizza</p>
                                <p>useEffect Tavuklu Pizza</p>
                                <p>Beyaz  Console Frosty</p>
                                <p>Testler Geçti Mutlu Burger</p>
                                <p>Position Absolute Acı Burger</p>
                            </div>
                        </div>
                        <div class="footer-3">
                            <h2>Instagram</h2>
                            <div class="photos">
                                <img src="../Assets/Iteration-2-aseets/footer/insta/li-0.png" />
                                <img src="../Assets/Iteration-2-aseets/footer/insta/li-1.png" />
                                <img src="../Assets/Iteration-2-aseets/footer/insta/li-2.png" />
                                <img src="../Assets/Iteration-2-aseets/footer/insta/li-3.png" />
                                <img src="../Assets/Iteration-2-aseets/footer/insta/li-4.png" />
                                <img src="../Assets/Iteration-2-aseets/footer/insta/li-5.png" />
                            </div>
                        </div>
                    </div>

                    <div class="line">
                        <div class="copy1">
                            <p>&copy; 2024 Teknolojik Yemekler.</p>
                            <p><i class="fab fa-twitter"></i></p>
                        </div>
                    </div>

                </div>





            </footer> */}
        </div >



    )
}

export default Home1