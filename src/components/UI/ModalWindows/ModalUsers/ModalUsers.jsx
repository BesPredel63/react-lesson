import React from 'react';
import cls from './ModalUsers.module.css'

const ModalUsers = ({children, visible, setVisible}) => {

    const rootClasses = [cls.myModal]
    if (visible) {
        rootClasses.push(cls.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cls.myModalContent} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalUsers;