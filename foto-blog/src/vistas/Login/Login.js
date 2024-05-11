import { Button, Form, Input, message, Flex } from "antd";
import { login } from '../../reducers/perfiles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const perfiles = useSelector((state) => state.perfiles.perfiles);

    const onSubmitHandler = () => {
        const existe = perfiles.findIndex((perfil) => perfil.nombreUsuario === usuario);
        if (existe > -1) {
            dispatch(login(usuario));
            navigate('/posts');
        } else {
            messageApi.open({
                type: 'error',
                content: `Usuario ${usuario} no existe`,
            });
        }
    }

    const [usuario, setUsuario] = useState('');
    return (
        <Flex align="center" vertical={true}>
            {contextHolder}
            <h1>FotoBlog™</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                    marginTop: 100
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
                onSubmitCapture={onSubmitHandler}
            >
                <Form.Item
                    label="Usuario"
                    name="usuario"
                    rules={[
                        {
                            required: true,
                            message: 'Nombre de usuario es necesario',
                        },
                    ]}
                    onChange={(event) => {
                        setUsuario(event.target.value);
                    }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Acceder
                    </Button>
                </Form.Item>
            </Form>
        </Flex>
    );
}

export default Login;