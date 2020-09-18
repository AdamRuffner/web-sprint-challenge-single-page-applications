import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/Schema'


const initialFormValues = {
    //text inputs
    name: '',
    specialInstructions: '',
    //checkbox and radio buttons
    pepperroni: false,
    sausage: false,
    bacon: false,
    spicyItalianSausage: false,
    grilledChicken: false,
    onions: false,
    greenPepper: false,
    tomatos: false,
    threeCheese: false,
    originalRed: '',
    garlicRanch: '',
    bbq: '',
    alfredo: '',
    size: '',
}

const initialFormErrors = {
    //text inputs
    name: '',
    specialInstructions: '',
    //checkbox and radio buttons
    pepperroni: false,
    sausage: false,
    bacon: false,
    spicyItalianSausage: false,
    grilledChicken: false,
    onions: false,
    greenPepper: false,
    tomatos: false,
    threeCheese: false,
    originalRed: '',
    garlicRanch: '',
    bbq: '',
    alfredo: '',
    size: '',
}

const initialUsers = []
const initialDisabled = true

export default function PizzaForm() {
    const [users, setUsers] = useState(initialUsers)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    // const getUsers = () => {
    //     axios.get('https://reqres.in/api/users')
    //         .then(res => {
    //             setUsers(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    // const postNewUser = newUser => {
    //     axios.post('https://reqres.in/api/users', newUser)
    //         .then(res => {
    //             setUsers([...users, res.data])
    //             setFormValues(initialFormValues)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //         .finally(() => {

    //         })
    // }

    const validate = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then(valid => {
                setFormErrors({
                    ...formErrors,
                    [name]: ''
                })
            })
            .catch(err => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                });
            });
    }

    const inputChange = (name, value) => {
        validate(name, value)
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const formSubmit = e => {
        e.preventDefault();
        axios.post('https://reqres.in/api/users', formValues)
        .then(res => {
            const apiReturn = res.data
            setUsers([...users, apiReturn])
            setFormValues(formValues)
        })
    }
    
    useEffect(() => {
        schema.isValid(formValues)
        .then(valid => {
            setDisabled(!valid)
        })
    }, [formValues])

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
                    <label htmlFor='sauce'>
                        <h2>Sauce</h2>
                <p>Required</p>
                        Original Red
                        <input
                    type='checkbox'
                    id='originalRed'
                    name='originalRed'
                    checked={formValues.originalRed}
                    onChange={inputChange}
                />
                        Garlic Ranch
                        <input
                    type='checkbox'
                    id='garlicRanch'
                    name='garlicRanch'
                    checked={formValues.garlicRanch}
                    onChange={inputChange}
                />
                        bbq
                        <input
                    type='checkbox'
                    id='bbq'
                    name='bbq'
                    checked={formValues.bbq}
                    onChange={inputChange}
                />
                        alfredo:
                        <input
                    type='checkbox'
                    name='alfredo'
                    id='alfredo'
                    checked={formValues.alfredo}
                    onChange={inputChange}
                />
                    </label>
                    </div>
       
        <label htmlFor='toppings'>
            <h2>Toppings</h2>
            <p>required</p>
            Pepporoni:
                        <input
                type='checkbox'
                name='pepporoni'
                id='pepporoni'
                checked={formValues.pepperroni}
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
                
            </form >
        </div >
    )
};

