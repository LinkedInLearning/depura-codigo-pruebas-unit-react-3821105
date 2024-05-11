import { Flex, Button, Avatar, Input, Divider, Space, Collapse } from "antd"
import { ShareAltOutlined, HeartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux'
import { selectUserInfo } from '../../selectors/perfiles'
import { comentarPost, likePost } from '../../reducers/posts';
import { useState } from "react";

const imagenStyles = {
    width: 'calc(-2px + min(620px, 100vw))'
};

const container = {
    padding: '10px 0 20px 0'
}

const textoBold = {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'black',
};

const profileLink = {
    ...textoBold,
    margin: 0
};

const comentariosPanel = (comentarios) => {
    return [{
        key: '1',
        label: `Ver los ${comentarios.length} comentarios`,
        children: comentarios.map((comentario, i) => <p key={i} style={{ margin: '10px 0' }}><span style={{ ...textoBold, fontSize: '0.9rem' }}>{comentario.nombreUsuario}</span> {comentario.comentario}</p>),
    }];
};

const Post = (props) => {

    const dispatch = useDispatch();
    const usuario = useSelector((state) => selectUserInfo(state));
    const [comentario, actualizarComentario] = useState('');

    const agregarComentario = () => {
        dispatch(comentarPost({
            idPost: props.idPost,
            comentario: {
                idUnico: usuario.idUnico,
                nombreUsuario: usuario.nombreUsuario,
                comentario: comentario
            }
        }));
       // actualizarComentario('');
    };

    const agregarLike = () => {
        dispatch(likePost(props.idPost));
    }
    return (
        <Flex vertical={true} style={container} justify="center">
            <Flex vertical={false} align="center" style={{ marginBottom: '10px' }}>
                <Avatar style={{ backgroundColor: '#f56a00' }}>{props.usuario.nombreUsuario[0].toUpperCase()}</Avatar>
                <span style={{ ...textoBold, marginLeft: '10px' }}>{props.usuario.nombreUsuario}</span>
            </Flex>
            <img style={imagenStyles} src={props.imagenUrl} alt="alt prueba" />
            <Flex vertical={false} style={{ marginTop: '10px' }} justify="space-between" align="center">
                <div>
                    <Button onClick={agregarLike} size="large" icon={<HeartOutlined />} shape="circle" type="text" iconPosition="start"></Button>
                    <Button size="large" icon={<ShareAltOutlined />} shape="circle" type="text" iconPosition="start"></Button>
                </div>
                <span style={{ ...textoBold, fontSize: '0.9rem' }}>{props.totalMeGusta} Me gusta</span>
            </Flex>
            <Flex vertical={true}>
                <p><span style={profileLink}>{props.usuario.nombreUsuario}</span> {props.descripcion}</p>
                <Collapse ghost style={{ color: 'grey' }} items={comentariosPanel(props.comentarios)} />
                <Space.Compact style={{ width: '100%' }}>
                    <Input value={comentario} placeholder="Agrega un comentario" variant="borderless" onChange={(event) => { actualizarComentario(event.target.value) }} />
                    <Button size="small" type="text" onClick={agregarComentario}>Publicar</Button>
                </Space.Compact>
                <Divider style={{ margin: 0 }}></Divider>
            </Flex>
        </Flex>
    );
}

export default Post;
