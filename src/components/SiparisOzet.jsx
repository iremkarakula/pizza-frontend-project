import React, { useState } from 'react'
import './SiparisOzet.css'

import { useHistory } from 'react-router-dom';

function SiparisOzet({ onSubmit, isButtonDisabled, totalAmount, counter, setCounter, extra }) {



    const history = useHistory();


    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(event);
        history.push('/success');
    };



    return (



        <div className='siparis-ozeti' >
            <div className='counter'>
                <button className='counter-btn ' onClick={() => setCounter(counter === 1 ? 1 : counter - 1)}>-</button>
                <div className='counter-number'>{counter}</div>
                <button className='counter-btn' onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            <div className='ozet'>
                <h2 className='ozet-h2'>Sipariş Toplamı</h2>
                <div className='secimler'><span>Seçimler</span> <span>{extra}tl</span></div>
                <div className='toplam'><span>Toplam</span> <span>{totalAmount}tl</span></div>

                <button className='ozet-btn' onClick={handleSubmit} disabled={isButtonDisabled}>SİPARİŞ VER</button>


            </div>



        </div>
    )
}

export default SiparisOzet