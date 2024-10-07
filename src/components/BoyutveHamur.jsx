import React, { useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import './BoyutveHamur.css'



export default function BoyutveHamur({ onHandleChange }) {

    const handleChange = (event) => {
        onHandleChange(event);
    }

    return (
        <div className='boyutvehamur'><Form className='boyut'>
            <legend className='boyut-legend'>
                Boyut Seç<span>*</span>
            </legend>
            <FormGroup check className='formgroup-radio'>
                <Input
                    id="radio1"
                    name="boyut"
                    type="radio"
                    value="küçük"
                    data-cy="boyut-input"

                    onChange={handleChange}

                />
                <Label check for="radio1">
                    Küçük
                </Label>
            </FormGroup>
            <FormGroup check className='formgroup-radio' >
                <Input
                    id="radio2"
                    name="boyut"
                    type="radio"
                    value="orta"
                    onChange={handleChange}
                    data-cy="boyut-input"

                />
                <Label check for="radio2">
                    Orta
                </Label>
            </FormGroup>
            <FormGroup check className='formgroup-radio'>
                <Input
                    id="radio3"
                    name="boyut"
                    type="radio"
                    value="büyük"
                    onChange={handleChange}
                    data-cy="boyut-input"

                />
                <Label check for="radio3">
                    Büyük
                </Label>
            </FormGroup>
        </Form>
            <Form className='hamur'>
                <FormGroup className='formgroup-hamur'>
                    <Label for="exampleSelect">
                        Hamur Seç<span>*</span>
                    </Label>
                    <Input
                        id="exampleSelect"
                        name="hamur"
                        type="select"
                        onChange={handleChange}
                        data-cy="hamur-input"
                    >
                        <option hidden>
                            Hamur Kalınlığı
                        </option>
                        <option value="kalın">
                            Kalın
                        </option>
                        <option value="orta">
                            Orta
                        </option>
                        <option value="ince">
                            İnce
                        </option>

                    </Input>
                </FormGroup>
            </Form></div >
    )
}
