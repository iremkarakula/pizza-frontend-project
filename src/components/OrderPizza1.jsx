import React, { useEffect, useState } from 'react'
import './OrderPizza.css'

import BoyutveHamur from './BoyutveHamur'
import EkMalzemeler from './EkMalzemeler'
import { Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import SiparisOzet from './SiparisOzet'
import axios from 'axios'
import Footer from './Footer'



const initialErrors = {
    isim: false,
    boyut: false,
    hamur: false,

}
export const errorMessages = {
    isim: "Adınızı en az 3 karakter giriniz",
    boyut: "Boyut seçiniz",
    hamur: "Hamur kalınlığı seçiniz",

}

function OrderPizza1({ data, setData, totalAmount, extra, setTotalAmount, setExtra, counter, setCounter, setShouldScroll }) {
    const [dataList, setDataList] = useState([]);


    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState(initialErrors);



    const handleChange = (event) => {

        const { name, value } = event.target;
        setData({ ...data, [name]: value })

        if (name === 'isim') {
            const hasError = value.trim().length < 3;
            setErrors((prevErrors) => ({ ...prevErrors, [name]: hasError }));
        }
    }


    const handleMalzemeChange = (malzeme) => {
        setData((prevData) => ({
            ...prevData,
            malzemeler: malzeme,
        }));

    };



    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isValid) return;

        axios.post(" https://reqres.in/api/pizza ", data).then((response) => {
            console.log(response.data);
            setDataList(pre => [...pre, response.data]);

            setData(initialValue);
            console.log(dataList)

        }).catch((error) => { console.warn(error) })
    }




    useEffect(() => {
        if (data.isim.trim().length < 3 || !data.boyut || !data.hamur || data.malzemeler.length < 4 || data.malzemeler.length > 10) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }, [data])


    useEffect(() => {
        setTotalAmount((5 * data.malzemeler.length + 85.50) * counter);
        setExtra(data.malzemeler.length * 5);
    }, [data.malzemeler, counter])


    useEffect(() => {
        setShouldScroll(false);
        return () => setShouldScroll(true);
    }, [setShouldScroll]);


    return (

        <section className='orderpizza'>

            <header className='op-head'>
                <div className="op-head-text">
                    <h1 className='op-h1'>Teknolojik Yemekler</h1>
                </div>
            </header>
            <img src="../Assets/Iteration-2-aseets/pictures/form-banner.png" className='banner' />
            <div className='op-content'>

                <p className='op-p'>Anasayfa - <span className='span-siparis'>Sipariş Oluştur</span></p>
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
            <BoyutveHamur onHandleChange={handleChange} />
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
                        onChange={handleChange}
                        className='isim-input'
                        data-cy="isim-input"
                    />
                    {errors.isim && <FormFeedback >
                        {errorMessages.isim}
                    </FormFeedback>}
                </FormGroup>
            </Form>
            <Form className='not-form'>
                <FormGroup className='not'>
                    <Label for="exampleText" className='not-label'>
                        Sipariş Notu
                    </Label>
                    <Input
                        id="exampleText"
                        name="not"
                        type="textarea"
                        placeholder='Siparişine eklemek istediğin bir not var mı?'
                        className='not-input'
                        rows='1'
                        value={data.not}
                        onChange={handleChange}

                    />
                </FormGroup>
            </Form>
            <SiparisOzet onSubmit={handleSubmit} isValid={isValid} counter={counter} setCounter={setCounter} totalAmount={totalAmount} extra={extra} />
            <Footer />
        </section>


    )
}

export default OrderPizza1