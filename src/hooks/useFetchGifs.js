import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category, results) => {
  
    const [state, setState] = useState({
      
        data: [],
        loading: true
    });

    useEffect( () => {
        
        getGifs( category, results )
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                }) 
                  
        })

    }, [ category, results ]);


    return state;
}


