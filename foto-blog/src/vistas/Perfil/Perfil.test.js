import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Perfil from './Perfil';
import configureMockStore from 'redux-mock-store';
import { POSTS } from '../../datos/posts';
import PERFILES from '../../datos/perfiles';

describe('Perfil', () => {

    const mockStore = configureMockStore([]);

    let state = {
        perfiles: {
            perfilActual: 'natyc',
            perfiles: PERFILES
        },
        posts: {
            posts: POSTS
        }
    };

    test('mostrar la información del usuario en sesión', async () => {

        const store = mockStore(() => state);

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
