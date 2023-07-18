import React from 'react';
import cls from "../../Styles.module/PostItem.module.css";
import ButtonDelete from "../../UI/Buttons/ButtonDelete";

const PostItem = ({posts, remove}) => {

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
                    <div>
                        <ButtonDelete onClick={() => remove(post)}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostItem;