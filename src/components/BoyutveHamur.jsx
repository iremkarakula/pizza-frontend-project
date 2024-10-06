import React from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import './BoyutveHamur.css'

export default function BoyutveHamur() {
    return (
        <div className='boyutvehamur'><Form className='boyut'>
            <legend className='boyut-legend'>
                Boyut Seç<span>*</span>
            </legend>
            <FormGroup check className='formgroup-radio'>
                <Input
                    id="radio1"
                    name="radio1"
                    type="radio"
                />
                <Label check for="radio1">
                    Küçük
                </Label>
            </FormGroup>
            <FormGroup check className='formgroup-radio'>
                <Input
                    id="radio2"
                    name="radio2"
                    type="radio"
                />
                <Label check for="radio2">
                    Orta
                </Label>
            </FormGroup>
            <FormGroup check className='formgroup-radio'>
                <Input
                    id="radio3"
                    name="radio3"
                    type="radio"
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
                        name="select"
                        type="select"
                    >
                        <option hidden>
                            Hamur Kalınlığı
                        </option>
                        <option>
                            Kalın
                        </option>
                        <option>
                            Orta
                        </option>
                        <option>
                            İnce
                        </option>

                    </Input>
                </FormGroup>
            </Form></div>
    )
}
