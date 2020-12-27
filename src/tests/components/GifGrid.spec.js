import React from 'react';
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs') // Simular llamada al hook

describe('Pruebas en el componente <GifGrid/>', () => {
    const category = 'Dragon Ball'
    test('Debe de mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: false
        })
        const wrapper = shallow(<GifGrid category={ category }/>)
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe de mostrar items cuando se cargan imagens con useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https:://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category={ category }/>)
        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('p').exists()).toBe(false)
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
    })
})