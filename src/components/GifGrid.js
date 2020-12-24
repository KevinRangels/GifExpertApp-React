import React from 'react'
import { GifGridItem } from '../components/GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs( category )
    return (
        <>
        <h3 className="card animate__animated animate__fadeIn animate__delay-2s"> {category} </h3>
        { loading && <p className="card animate__animated animate__flash">Loading..</p> }
        <div className="cardGrid">
                {
                    images.map(img => (
                        <GifGridItem
                          key={img.id}
                          {...img}
                        />
                    ))
                }
        </div>
        </>
    )
}
