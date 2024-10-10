import React, { useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import './BoyutveHamur.css'



export default function BoyutveHamur({ onHandleChange }) {

    const handleChange = (event) => {
        onHandleChange(event);
    }

    return (
        <div className='boyutvehamur'>
            <Form className='boyut'>
                <legend className='boyut-legend'>
                    Boyut Seç<span>*</span>
                </legend>
                <div className='radio-div'>
                    <FormGroup check className='formgroup-radio'>
                        <Input
                            id="radio1"
                            name="boyut"
                            type="radio"
                            value="küçük"
                            data-cy="boyut-input"
                            onChange={handleChange}

                        />
                        <Label check for="radio1" className='custom-radio'>
                            S
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
                        <Label check for="radio2" className='custom-radio'>
                            M
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
                        <Label check for="radio3" className='custom-radio'>
                            L
                        </Label>
                    </FormGroup>
                </div>

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
                        className='custom-select'
                    >
                        <option hidden>
                            --Hamur Kalınlığı Seç --
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
            </Form>
        </ div >
    )
}
