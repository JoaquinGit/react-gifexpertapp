import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    return (
        <div className="container">
            <h1 className="h1-title">GifExpertApp</h1>
            
            <AddCategory setCategories= { setCategories }/>

           <ol>
                { 
                    categories.map( (category) => (

                        <GifGrid
                        key={category.id}
                        category={category.categ}
                        results= {category.results}
                        />
                    
                    ))
                }
           </ol>
        </div>
    )
}



