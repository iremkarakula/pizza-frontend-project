import React, { useEffect, useState } from 'react'
import './OrderPizza.css'

import BoyutveHamur from './BoyutveHamur'
import EkMalzemeler from './EkMalzemeler'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import SiparisOzet from './SiparisOzet'

const initialValue = {
    isim: "",
    boyut: "",
    hamur: "",
    malzemeler: [],
    not: ""
}

function OrderPizza1() {
    const [dataList, setDataList] = useState([]);
    const [data, setData] = useState(initialValue);
    const [totalAmount, setTotalAmount] = useState(0);
    const [counter, setCounter] = useState(1);
    const [extra, setExtra] = useState(0);




    const handleSizeChange = (event) => {
        setData((prevData) => ({
            ...prevData,
            boyut: event,
        }));
    }
    const handleMalzemeChange = (malzeme) => {
        setData((prevData) => ({
            ...prevData,
            malzemeler: malzeme,
        }));

    };


    const handleHamurChange = (event) => {
        setData((prevData) => ({
            ...prevData,
            hamur: event,
        }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        setDataList([...dataList, data])
        setData(initialValue);
        console.log(data);


    }


    const isButtonDisabled = data.isim.trim().length < 4 || !data.boyut || !data.hamur || data.malzemeler.length < 4;

    useEffect(() => {
        setTotalAmount((5 * data.malzemeler.length + 85.50) * counter);
        setExtra(data.malzemeler.length * 5);
    }, [data.malzemeler, counter])


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
            <BoyutveHamur onSizeChange={handleSizeChange} onHamurChange={handleHamurChange} />
            <EkMalzemeler onMalzemeChange={handleMalzemeChange} />
            <Form className='isim-form'>
                <FormGroup className='isim-formgroup'>
                    <Label for="isim" className='isim-label'>
                        Ad
                    </Label>
                    <Input
                        id="isim"
                        name="isim"
                        placeholder="Adınızı giriniz"
                        type="text"
                        value={data.isim}
                        onChange={(e) => setData((prevData) => ({ ...prevData, isim: e.target.value }))}
                        className='isim-input'
                    />
                </FormGroup>
            </Form>
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
                        value={data.not}
                        onChange={(e) => setData((prevData) => ({ ...prevData, not: e.target.value }))}

                    />
                </FormGroup>
            </Form>
            <SiparisOzet onSubmit={handleSubmit} isButtonDisabled={isButtonDisabled} counter={counter} setCounter={setCounter} totalAmount={totalAmount} extra={extra} />






        </div>
    )
}

export default OrderPizza1