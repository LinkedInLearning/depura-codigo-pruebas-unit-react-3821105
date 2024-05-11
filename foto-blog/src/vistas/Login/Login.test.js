import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import Login from './Login';
import store from '../../store'
import * as router from 'react-router'

const navigate = jest.fn()

describe('Login', () => {
    test('debe llamar navegación cuando se hace login', async () => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
        render(
            <Router>
                <Provider store={store}>
                    <Login />
                </Provider>
            </Router>
        );

        const input = screen.getByLabelText(/Usuario/i);
        fireEvent.change(input, { target: { value: 'natyc' } });
        const boton = screen.getByRole('button');
        fireEvent.click(boton);

        expect(navigate).toHaveBeenCalledTimes(1);

    });
});
