import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    //Se doble inicializa por la autocompletacion de VS
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
        
    beforeEach( ()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('debe mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{target: { value }});
    })
    
    test('NO debe de hacer post con submit', () => {
        
        wrapper.find('form').simulate('submit',{ preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
        
    })

    test('debe llamar al setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';
        //Simular el inputChange
        wrapper.find('input').simulate('change',{target: { value }});;
        
        //Simular el submit
        wrapper.find('form').simulate('submit',{ preventDefault(){} });

        //setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        // expect(setCategories).toHaveBeenCalledTimes(2);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        //el valor del input debe esta vacio
        expect(wrapper.find('input').prop('value')).toBe('');
        
    })
    
    
})
