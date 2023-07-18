import React from 'react';
import cls from './ModalPosts.module.css'

const ModalPosts = ({children, visible, setVisible}) => {

    // создаем переменную по которой будем отслеживать состояние модального окна
    // в условии прописываем как будет изменяться CSS настройка для модального окна, в нем заложено переключение окна вкл/выкл
    const rootClasses = [cls.myModal]
    if (visible) {
        rootClasses.push(cls.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            {/* у объекта 'e', он же event есть метод stopPropagation, в данном случае он нужен для того,
            чтобы модальное окно не закрывалось при клике в любое место окна */}
            <div className={cls.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalPosts;