import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>

            <div class="upper-footer">
                <div class="footer-1">
                    <h1>Teknolojik Yemekler</h1>
                    <div class="footer-item-container">
                        <div class="footer-item">
                            <img src="../Assets/Iteration-2-aseets/footer/icons//icon-1.png" />
                            <p>341 Londonderry Road, <br />Istanbul Türkiye</p>
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
                        <img src="../Assets/Iteration-2-aseets/footer/insta/li-0.png" className='insta' />
                        <img src="../Assets/Iteration-2-aseets/footer/insta/li-1.png" className='insta' />
                        <img src="../Assets/Iteration-2-aseets/footer/insta/li-2.png" className='insta' />
                        <img src="../Assets/Iteration-2-aseets/footer/insta/li-3.png" className='insta' />
                        <img src="../Assets/Iteration-2-aseets/footer/insta/li-4.png" className='insta' />
                        <img src="../Assets/Iteration-2-aseets/footer/insta/li-5.png" className='insta' />
                    </div>
                </div>
            </div>

            <hr className='footer-hr' />
            <div class="copy1">
                <p>&copy; 2024 Teknolojik Yemekler.</p>
                <p><i class="fab fa-twitter"></i></p>
            </div>








        </footer>
    )
}

export default Footer