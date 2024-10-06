import React from 'react'
import './SiparisOzet.css'

import { useHistory } from 'react-router-dom';

function SiparisOzet({ onSubmit }) {

    const history = useHistory();


    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(event);
        history.push('/success');
    };

    return (



        <div className='siparis-ozeti' >
            <div className='counter'>
                <button className='counter-btn '>-</button>
                <div className='counter-number'>5</div>
                <button className='counter-btn'>+</button>
            </div>
            <div className='ozet'>
                <h2 className='ozet-h2'>Sipariş Toplamı</h2>
                <div className='secimler'><span>Seçimler</span> <span>25.00 tl</span></div>
                <div className='toplam'><span>Toplam</span> <span>100.00 tl</span></div>

                <button className='ozet-btn' onClick={handleSubmit}>SİPARİŞ VER</button>


            </div>



        </div>
    )
}

export default SiparisOzet