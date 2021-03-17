import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe retornar el estado inicial', async() => {

        //Utilizamos React Hooks Testing Library para probar el custom hook
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    })

    test('debe retornar un arreglo de imgs y loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();
        
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBeFalsy();
    })
    

})
