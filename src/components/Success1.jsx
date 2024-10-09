import React from 'react'
import './Success.css'

function Success1({ data, extra, totalAmount }) {
    return (

        <header className='success'>
            <h1 className='success-h1'>Teknolojik Yemekler</h1>
            <h2 className='success-h2'>TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI!</h2>
            <hr />
            <section className='success-ozet'>
                <h3>Position Absolute Acı Pizza</h3>
                <div className='div1' >
                    <p>Boyut: <span>{data.boyut}</span></p>
                    <p>Hamur: <span>{data.hamur}</span></p>
                    <p>Ek Malzemeler: {data.malzemeler.join(', ')}</p>
                </div>
                <div className='div2'>
                    <h2 >Sipariş Toplamı</h2>
                    <p ><span>Seçimler</span> <span>{extra}tl</span></p>
                    <p ><span>Toplam</span> <span>{totalAmount}tl</span></p>

                </div>
            </section>

        </header>



    )
}

export default Success1