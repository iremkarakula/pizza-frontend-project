import React, { useState } from 'react'
import './SiparisOzet.css'

import { useHistory } from 'react-router-dom';

function SiparisOzet({ onSubmit, isValid, totalAmount, counter, setCounter, extra }) {



    const history = useHistory();


    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(event);
        history.push('/success');
    };



    return (



        <section className='siparis-ozeti' >
            <div className='counter'>
                <button className='counter-btn ' onClick={() => setCounter(counter === 1 ? 1 : counter - 1)}>-</button>
                <div className='counter-number'>{counter}</div>
                <button className='counter-btn' onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            <div className='ozet'>
                <h2 className='ozet-h2'>Sipariş Toplamı</h2>
                <p className='secimler'><span>Seçimler</span> <span>{extra}tl</span></p>
                <p className='toplam'><span>Toplam</span> <span>{totalAmount}tl</span></p>
                <button className='ozet-btn' onClick={handleSubmit} disabled={!isValid} data-cy="submit-button">SİPARİŞ VER</button>
            </div>
        </section>
    )
}

export default SiparisOzet