import React, { useState } from 'react'
import './EkMalzemeler.css'
import { Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'

const ekMalzemeler = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Mantar", "Ananas", "Kabak"]

function EkMalzemeler({ onMalzemeChange, errors, errorMessages }) {
    const [selectedMalzemeler, setSelectedMalzemeler] = useState([]);

    const handleChange = (event) => {
        const malzeme = event.target.value;
        const mevcutMalzemeler = selectedMalzemeler.includes(malzeme);

        let yeniMalzemeler;
        if (mevcutMalzemeler) {
            yeniMalzemeler = selectedMalzemeler.filter(item => item !== malzeme);
        } else {
            yeniMalzemeler = [...selectedMalzemeler, malzeme];
        }

        setSelectedMalzemeler(yeniMalzemeler);
        onMalzemeChange(yeniMalzemeler);
    };
    return (
        <div className='ekmalzemeler'>
            <h2>Ek Malzemeler <span className='span-5tl'>5tl</span></h2>
            {selectedMalzemeler.length < 4 && selectedMalzemeler.length >= 0 ? <FormFeedback className='malzeme1-fb'>
                {errorMessages.malzeme1}
            </FormFeedback> : ""}
            {selectedMalzemeler.length >= 10 ? <FormFeedback className='malzeme1-fb'>
                En fazla 10 malzeme seçebilirsiniz
            </FormFeedback> : ""}
            <Form className='ekmalzemeler-form'>
                {ekMalzemeler.map((item, index) => (
                    <FormGroup check className='ekmalzemeler-formgroup' key={index}>
                        <Input
                            id={index}
                            name="malzemeler"
                            type="checkbox"
                            value={item}
                            onChange={handleChange}
                            checked={selectedMalzemeler.includes(item)}
                            disabled={selectedMalzemeler.length >= 10 && !selectedMalzemeler.includes(item)}
                            data-cy="malzeme-input"


                        />
                        <Label check for={`${index}`} className='ekmalzemeler-label'>
                            <span className='ekmalzemeler-text'>{item}</span>
                        </Label>
                    </FormGroup>
                ))}

            </Form>


        </div >
    )
}

export default EkMalzemeler