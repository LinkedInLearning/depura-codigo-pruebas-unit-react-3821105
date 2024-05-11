import { Avatar, Col, Divider, Row, Flex } from "antd";
import { useSelector } from 'react-redux'
import { selectUserPosts, selectUserInfo } from '../../selectors/perfiles'


const Posts = () => {

    const posts = useSelector((state) => selectUserPosts(state));
    const usuario = useSelector((state) => selectUserInfo(state));
    return (
        <>
            <Flex style={{ width: '100%', marginTop: 16 }} vertical={false} justify="center" align="center">
                <Avatar style={{ backgroundColor: '#f56a00' }} size={80}>{usuario.nombreUsuario[0].toUpperCase()}</Avatar>
                <div style={{ marginLeft: 50 }}>
                    <h3>{usuario.nombreCompleto}</h3>
                    <h4>{usuario.ciudad}</h4>
                </div>
            </Flex>
            <Divider orientation="left">Posts</Divider>
            <Row gutter={16}>

                {
                    posts.map(post => (<Col key={post.idPost} span={6}><img alt={`alt-imagen-${post.idPost}`} style={{ width: '100%' }} src={post.imagenUrl} /></Col>))
                }
            </Row>
        </>
    );
}

export default Posts;