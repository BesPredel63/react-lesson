import React, {useState} from 'react';
import InputLabel from "../UI/Inputs/InputLabel";
import ButtonAdd from "../UI/Buttons/ButtonAdd";

import cls from '../Styles.module/PostForm.module.css'

const PostForm = ({create}) => {

    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            ...post
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form className={`form-control`}>
            <h2>Добавить пост</h2>
            <InputLabel
                title='Название поста'
                type='text'
                unit='enterTitlePost'
                value={post.title}
                setValue={e => setPost({...post, title: e.target.value})}
            />
            <InputLabel
                title='Описание поста'
                type='text'
                unit='enterDiscripPost'
                value={post.body}
                setValue={e => setPost({...post, body: e.target.value})}
            />
            <ButtonAdd style={{marginTop: '5px'}} onClick={addNewPost}>
                &nbsp;Добавить&nbsp;
            </ButtonAdd>
        </form>
    );
};

export default PostForm;