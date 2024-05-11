import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Post from './Post';
import configureMockStore from 'redux-mock-store';
import { POSTS } from '../../datos/posts';
import PERFILES from '../../datos/perfiles';

describe('Post', () => {

    const mockStoreFn = configureMockStore([]);

    let state = {
        perfiles: {
            perfilActual: 'natyc',
            perfiles: PERFILES
        },
        posts: {
            posts: POSTS
        }
    };

    test('mostrar la información del post que se pasa como prop', async () => {

        const mockStore = mockStoreFn(() => state);

        render(
            <Provider store={mockStore}>
                <Post {...POSTS[0]} />
            </Provider>
        );

        const instanciasNombreUsuario = screen.getAllByText(/mariagarcia456/i);
        expect(instanciasNombreUsuario).toHaveLength(2);

        screen.getByText(/Descripción del post 1/i);
        screen.getByText(/56 Me gusta/i);

        const botonComentarios = screen.getByRole('button', { expanded: false });
        fireEvent.click(botonComentarios);
        screen.getByText(/Comentario 12/i);
        screen.getByText(/Comentario 20/i);

        screen.getAllByAltText(/alt prueba/i);

    });

    test('agregar un comentario cuando se hace click en el botón Publicar', async () => {

        const mockStore = mockStoreFn(() => state);

        render(
            <Provider store={mockStore}>
                <Post {...POSTS[0]} />
            </Provider>
        );

        const botonComentarios = screen.getByRole('button', { expanded: false });
        fireEvent.click(botonComentarios);

        const input = screen.getByPlaceholderText(/Agrega un comentario/i);
        fireEvent.change(input, { target: { value: 'algún comentario' } });

        const botonComentar = screen.getByRole('button', { name: 'Publicar' });
        fireEvent.click(botonComentar);

        expect(mockStore.getActions()[0].type).toEqual('posts/comentarPost');
        expect(mockStore.getActions()[0].payload).toEqual({
            idPost: 1,
            comentario: {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "algún comentario"
            }
        });
    });
});
