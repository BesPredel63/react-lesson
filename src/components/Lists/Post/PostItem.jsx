import React from 'react';
import { useNavigate } from 'react-router-dom';
import cls from "../../Styles.module/PostItem.module.css";
import ButtonDelete from "../../UI/Buttons/ButtonDelete";
import ButtonRead from "../../UI/Buttons/ButtonRead";
import '../../../styles/App.css'

const PostItem = ({posts, remove}) => {

    const router = useNavigate()
    console.log(router)

    if (!posts.length) {
        return (
            <h3 style={{textAlign: 'center'}}>Посты не найдены</h3>
        )
    }

    return (
        <div>
            {posts.map((post) =>
                <div className={cls.post} key={post.id}>
                    <div className="post-content">
                        <strong>{post.id}. {post.title}</strong>
                        <div>
                            {post.body}
                        </div>
                    </div>
                    <div className='post__btns'>
                        <ButtonRead onClick={() => router(`/posts/${post.id}`)}/>
                        <ButtonDelete onClick={() => remove(post)}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostItem;