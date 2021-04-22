import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid =  ({ category, results }) => {
    
    const { data:images, loading } = useFetchGifs( category, results );

    return (
        <>
            {
            loading?

                <p className="loading animate__animated animate__flash">Loading...</p>
            :
                (    
                <div> 
                    <hr />

                    <h2 className="h2-input-value animate__animated animate__fadeIn"> 
                        {category === ''? '' : `${ results } results for "${ category }":`} 
                    </h2>
                    
                    <div className="gif-grid">
                        {
                            images.map( image => 
                                
                                <GifGridItem 
                                key = { image.id }
                                image = { image } />
                            )
                        }
                    </div>
                </div>   
                )
            }

        </>    
    )
}
