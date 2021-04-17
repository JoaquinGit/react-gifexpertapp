import React from 'react'

export const GifGridItem = ( { image } ) => {

    return (
        <div className="grid-item card animate__animated animate__fadeIn">
            <img className="gif" src={ image.url } alt={ image.title }></img>
            <p>{ image.title } </p>
        </div>
    )
}
