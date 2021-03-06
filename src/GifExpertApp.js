import React, {Fragment, useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'


const GifExpertApp = ({ defaultCategories = []}) => {

    const [categories, setCategories] = useState(defaultCategories)

    // const handleAdd = () => {
    //     console.log('Hola')
    //     setCategories([...categories, 'Movil']);
    // setCategories( cats => [...cats, 'Movil']);
    // }

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ul>
                {
                    categories.map( category => (
                        <GifGrid
                          key={ category }
                          category={ category }
                        />
                    ))
                }
            </ul>
            <button>Agregar</button>
        </>
     );
}
 
export default GifExpertApp;