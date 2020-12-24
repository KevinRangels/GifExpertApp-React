import {getGifs} from '../../helpers/getGifs'

describe('Pruebas con getGifs Fetc', () => {
    test('Debe de traer 9 elementos', async() => {
        const gifs = await getGifs('Dragon')

        expect(gifs.length).toBe(9)
    })

    test('Debe de traer 0 elementos', async() => {
        const gifs = await getGifs('')

        expect(gifs.length).toBe(0)
    })
})