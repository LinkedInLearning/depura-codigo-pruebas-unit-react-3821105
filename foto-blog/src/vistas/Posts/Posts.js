import { Flex } from "antd";
import { useSelector } from 'react-redux'
import Post from "../../componentes/Post/Post";


const dividerStyle = {
    width: 'calc(-2px + min(470px, 100vw))'
};

const Posts = () => {
    const posts = useSelector((state) => state.posts.posts);
    return (
        <Flex vertical={true} align="center" style={dividerStyle}>
            {
                posts.map(post => <Post key={post.idPost} {...post}></Post>)
            }
        </Flex>
    );
}

export default Posts;