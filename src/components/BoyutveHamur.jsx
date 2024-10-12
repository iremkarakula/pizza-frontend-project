import React, { useState } from 'react'
import { Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import './BoyutveHamur.css'


const hamuroptions = ["Kalın", "Orta", "İnce"];
const boyutoptions = ["S", "M", "L"]
export default function BoyutveHamur({ onHandleChange, errors, errorMessages }) {

    const handleChange = (event) => {
        onHandleChange(event);
    }

    return (
        <div className='boyutvehamur'>
            <Form className='boyut'>
                <legend className='boyut-legend'>
                    Boyut Seç<span>*</span>
                </legend>
                {errors.boyut && <FormFeedback className='boyut-fb'>
                    {errorMessages.boyut}
                </FormFeedback>}
                <div className='radio-div'>
                    {boyutoptions.map((boyut, index) =>
                        <FormGroup check className='formgroup-radio'>
                            <Input
                                id={`radio${index}`}
                                name="boyut"
                                type="radio"
                                value={boyut}
                                data-cy="boyut-input"
                                onChange={handleChange}

                            />
                            <Label check for={`radio${index}`} className='custom-radio'>
                                {boyut}
                            </Label>
                        </FormGroup>
                    )}


                </div>


            </Form>
            <Form className='hamur'>
                <FormGroup className='formgroup-hamur'>
                    <Label for="exampleSelect">
                        Hamur Seç<span>*</span>
                    </Label>
                    {errors.hamur && <FormFeedback className='hamur-fb'>
                        {errorMessages.hamur}
                    </FormFeedback>}
                    { }
                    <Input
                        id="exampleSelect"
                        name="hamur"
                        type="select"
                        onChange={handleChange}
                        data-cy="hamur-input"
                        className='custom-select'
                    >  <option hidden>
                            --Hamur Kalınlığı Seç --
                        </option>
                        {hamuroptions.map((hamur) => (
                            <option value={hamur}>
                                {hamur}
                            </option>
                        ))
                        }

                    </Input>
                </FormGroup>
            </Form>
        </ div >
    )
}
