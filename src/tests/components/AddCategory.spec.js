import React from 'react';
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'


describe('Pruebas en <AddCategory/>', () => {

    const setCategories = jest.fn()
    let wrapper

    beforeEach( () => {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    })

    test('Debe de mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input')
        const value = 'Hello world'
        input.simulate('change', { target: { value } })
    })

    test('No debe de postear la informacion onSubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} } )
        expect(setCategories).not.toHaveBeenCalled()
    })

})