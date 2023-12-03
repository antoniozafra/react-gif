import React, { useState, useEffect } from 'react'
import { GifGridItem } from './gIFgRIDiTEM.JSX';
import { useFetchGifs } from './useFetchGifs';


export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);


    return (
        <>
            <h1>{category}</h1>
            

            {
                isLoading && (<h2>Cargando</h2>)
                
            }
            


            <div className='card-grid'>

                {images.map( (image) => (

                    <GifGridItem key={image.id}
                    {...image}
                    />
                    )

                )}
            </div>

        </>
    )
}
