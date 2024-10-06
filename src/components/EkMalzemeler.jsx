import React from 'react'
import './EkMalzemeler.css'
import { Form, FormGroup, Input, Label } from 'reactstrap'

const ekMalzemeler = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Sucuk", "Ananas", "Kabak"]

function EkMalzemeler() {
    return (
        <div className='ekmalzemeler'>
            <h2>Ek Malzemeler</h2>
            <p>En fazla 10 malzeme seçebilirsiniz. 5tl</p>
            <Form className='ekmalzemeler-form'>
                {ekMalzemeler.map((item) =>
                    <FormGroup check className='ekmalzemeler-formgroup'>
                        <Input
                            id="checkbox"
                            type="checkbox"
                        />
                        <Label check>
                            {item}
                        </Label>
                    </FormGroup>
                )}

            </Form>


        </div>
    )
}

export default EkMalzemeler