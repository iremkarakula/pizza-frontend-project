import React from 'react'
import './OrderPizza.css'

import BoyutveHamur from './BoyutveHamur'
import EkMalzemeler from './EkMalzemeler'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import SiparisOzet from './SiparisOzet'

function OrderPizza1() {
    return (
        <div className='orderpizza'>

            <div className='op-head'>
                <div className="op-head-text">
                    <h1 className='op-h1'>Teknolojik Yemekler</h1>
                    <p className='op-p'>Anasayfa - Seçenekler - <span>Sipariş Oluştur</span></p>
                </div>

            </div>
            <div className='op-content'>
                <h2 className='op-h2'> Position Absolute Acı Pizza</h2>
                <div className='op-sayilar'>
                    <div>85.50tl</div>
                    <div className='op-sayilar2'>
                        <div>4.9</div>
                        <div>(200)</div>
                    </div>
                </div>
                <p className='op-text'>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
            </div>
            <BoyutveHamur />
            <EkMalzemeler />
            <Form className='not-form'>
                <FormGroup className='not'>
                    <Label for="exampleText" className='not-label'>
                        Sipariş Notu
                    </Label>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                        placeholder='Siparişine eklemek istediğin bir not var mı?'
                        className='not-input'
                        rows='1'
                    />
                </FormGroup>
            </Form>
            <SiparisOzet />






        </div>
    )
}

export default OrderPizza1