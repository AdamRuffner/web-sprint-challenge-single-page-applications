import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/Schema'


const initialFormValues = {
    //text inputs
    name: '',
    specialInstructions: '',
    //checkbox and radio buttons
    pepperoni: false,
    sausage: false,
    bacon: false,
    spicyItalianSausage: false,
    grilledChicken: false,
    onions: false,
    greenPepper: false,
    tomatos: false,
    sauce: '',
    size: '',
    instructions:''
}

const initialFormErrors = {
    //text inputs
    name: '',
    specialInstructions: '',
    //checkbox and radio buttons
    pepperoni: false,
    sausage: false,
    bacon: false,
    spicyItalianSausage: false,
    grilledChicken: false,
    onions: false,
    greenPepper: false,
    tomatos: false,
    threeCheese: false,
    sauce:'',
    size: '',
    instructions:'',
}

const initialUsers = []
const initialDisabled = true

export default function PizzaForm() {
    const [users, setUsers] = useState(initialUsers)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    
                            
        
        
        
        
        const validate = e => {
            const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
            yup
            .reach(schema, e.target.name)
            .validate(value)
            .then(valid => {
                setFormErrors({
                    ...formErrors,
                    [e.target.name]: ''
                })
            })
            
            .catch(err => {
                setFormErrors({
                    ...formErrors,
                    [e.target.name]: err.errors[0]
                });
            });
        }
        
        useEffect(() => {
            schema.isValid(formValues)
            .then(valid => {
            setDisabled(!valid)
            })
            .catch(err =>  {
                console.log(err)
            })
        }, [formValues])

        const inputChange = e => {
            e.persist();
            validate(e);
            const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
            setFormValues({ ...formValues, [e.target.name]: value });
        };
        
        const formSubmit = e => {
            e.preventDefault();
            axios
            .post("https://reqres.in/api/users", formValues)
            .then(response => {
                const apiReturn = response.data
                console.log(response.data)
                setUsers([...users, apiReturn])
                setFormValues(formValues)
            })
            .catch(err => console.log(err));
        };
        
        
        return (
            <div>
            <form onSubmit={formSubmit}>

                <label htmlFor='size'>
                    <h2>Size</h2>
                    <p>Required</p>
                    <select
                        value={formValues.size}
                        name='size'
                        id='size'
                        onChange={inputChange}
                    >
                        <option value='Default'>--Select Size--</option>
                        <option value='Personal'>Personal</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </label>
                <br></br>
                <div className='sauce' >
                <label htmlFor= 'sauces' >
                        <h2>Sauce</h2>
                <p>Required</p>
                        Original Red
                        <input
                    type='radio'
                    value='originalRed'
                    id='originalRed'
                    name='sauce'
                    checked={formValues.sauce === 'originalRed'}
                    onChange={inputChange}
                />
                
                
                        Garlic Ranch
                        <input
                    type='radio'
                    value='garlicRanch'
                    id='garlicRanch'
                    name='sauce'
                    checked={formValues.sauce === 'garlicRanch'}
                    onChange={inputChange}
                />
                
                
                        bbq
                        <input
                    type='radio'
                    value='bbq'
                    id='bbq'
                    name='sauce'
                    checked={formValues.sauce === 'bbq'}
                    onChange={inputChange}
                />
                
                
                        alfredo:
                        <input
                    type='radio'
                    value='alfredo'
                    name='sauce'
                    id='alfredo'
                    checked={formValues.sauce === 'alfredo'}
                    onChange={inputChange}
                />
                
                </label>
                    </div>
       
        <label htmlFor='toppings'>
            <h2>Toppings</h2>
            <p>required</p>
            Pepperoni:
                        <input
                type='checkbox'
                name='pepperoni'
                id='pepperoni'
                checked={formValues.pepperoni}
                onChange={inputChange}
            />
                        Sausage:
                        <input
                type='checkbox'
                name='sausage'
                id='sausage'
                checked={formValues.sausage}
                onChange={inputChange}
            />
                        bacon:
                        <input
                type='checkbox'
                name='bacon'
                id='bacon'
                checked={formValues.bacon}
                onChange={inputChange}
            />
                        spicyItalianSausage:
                        <input
                type='checkbox'
                name='spicyItalianSausage'
                id='spicyItalianSausage'
                checked={formValues.spicyItalianSausage}
                onChange={inputChange}
            />
                        grilledChicken:
                        <input
                type='checkbox'
                name='grilledChicken'
                id='grilledChicken'
                checked={formValues.grilledChicken}
                onChange={inputChange}
            />
                        onions:
                        <input
                type='checkbox'
                name='onions'
                id='onions'
                checked={formValues.onions}
                onChange={inputChange}
            />
                        greenPepper:
                        <input
                type='checkbox'
                name='greenPepper'
                id='greenPepper'
                checked={formValues.greenPepper}
                onChange={inputChange}
            />
                        tomatos:
                        <input
                type='checkbox'
                name='tomatos'
                id='tomatos'
                checked={formValues.tomatos}
                onChange={inputChange}
            />
                        threeCheese:
                        <input
                type='checkbox'
                name='threeCheese'
                id='threeCheese'
                checked={formValues.threeCheese}
                onChange={inputChange}
            />
            </label>
            <div className ='instructions'>
            <label htmlFor ='instructions'>

            </label>
            </div>
            <br></br>
            <div className="name-div">
            <label htmlFor="name">
                Who is this pizza for?
                <br></br>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Must have at least 2 characters"
                    value={formValues.name}
                    onChange={inputChange}
                />
                
               
        </label>
            </div>
            <label htmlFor ='instructions'>
            <h2>Special Instructions</h2>
            <br></br>
            <textarea 
                name='instructions'
                id='instructions'
                placeholder='must have at least 3 characters'
                value={formValues.instructions}
                onChange={inputChange}
            />
            </label>
            <div className ='submit'>
                <button disabled={disabled}>Add To Order</button>
            </div>
                
            </form >
        </div >
    )
};

