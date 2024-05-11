import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Perfil from './Perfil';
import store from '../../store'

describe('Perfil', () => {

    test('mostrar la información del usuario en sesión', async () => {

        render(
            <Provider store={store}>
                <Perfil />
            </Provider>
        );

        screen.getByText(/Natalia Corea/i);
        screen.getByText(/San José/i);

        screen.getAllByAltText(/alt-imagen-10/i);
        screen.getAllByAltText(/alt-imagen-11/i);
        screen.getAllByAltText(/alt-imagen-12/i);
        screen.getAllByAltText(/alt-imagen-20/i);

    });
});
