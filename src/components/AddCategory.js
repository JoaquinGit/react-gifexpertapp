import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';


export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState({
        categ: '',
        id: '',
        results: '10'
    });
    
    const handleInputChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
            id: nanoid()
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.categ.trim().length > 1) {

            setCategories( cat => [inputValue, ...cat] );
            setInputValue({
                categ: '',
                id: '',
                results: '10'
            });
        } 
    }

    return (

        <form className="form-categ" onSubmit={ handleSubmit }>
            <h2>Add Category:</h2>

            <input
                name="categ"
                className="input-field"
                type="text"
                value={ inputValue.categ }
                onChange= { (e) => handleInputChange(e) }
                placeholder="Search gif..."
            />

            <div className="div-search">
                <div className= "div-select">
                    <p>Number of Results:</p>
                    <select name="results" value={ inputValue.results } onChange={ (e) => handleInputChange(e) }>

                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>

                    </select>
                </div>

                <input className="input-btn" type="submit" value="Search"></input>
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired

}