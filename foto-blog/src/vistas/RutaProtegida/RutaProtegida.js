import { Layout, Flex, Button } from 'antd'
import { useNavigate, Navigate, Outlet, Link } from "react-router-dom"
import { selectUserInfo } from '../../selectors/perfiles'
import { useSelector } from 'react-redux'


const { Header, Footer, Content } = Layout;

const headerStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: 'white'
};

const contentStyle = {};

const footerStyle = {
    textAlign: 'center'
};

const layoutStyle = {};

function RutaProtegida() {

    const navigate = useNavigate();

    const acceso = useSelector((state) => !!state.perfiles.perfilActual);
    const usuario = useSelector((state) => selectUserInfo(state));

    if (!acceso) {
        return (<Navigate to="/login" />);
    }

    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <Flex vertical={false} justify="space-between" align="center">
                    <Link to={'/posts'}><span style={{ color: 'white' }} >FotoBlog™</span></Link>
                    <Button
                        type="primary"
                        shape="circle"
                        style={{ backgroundColor: '#f56a00' }}
                        onClick={() => {
                            navigate('/perfil');
                        }}
                    >
                        {usuario.nombreUsuario[0].toUpperCase()}
                    </Button>
                </Flex>
            </Header>
            <Content style={contentStyle}>
                <Flex vertical={true} justify="center" align="center">
                    <Outlet />
                </Flex>
            </Content>
            <Footer style={footerStyle}>FotoBlog™</Footer>
        </Layout>
    );
}

export default RutaProtegida;
