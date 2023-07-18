import React from 'react';
import cls from '../../Styles.module/RegItems.module.css'
import ButtonDelete from "../../UI/Buttons/ButtonDelete";

const RegItems = (props) => {

    return (
        <div>
            {props.user.map((l, index) =>
                <div className={`row g-3 ${cls.block}`} key={props.user.id}>
                    <div className='col-md-auto'>
                        <strong>{index + 1}</strong>
                    </div>
                    <div className='col-md-auto'>
                        <div>
                            <strong>Персональные данные: </strong>{l.secondName} {l.firstName}; {l.email}; {l.pass}
                        </div>
                        <div>
                            <strong>Адрес: </strong>{l.area}, {l.city}, {l.mIndex}, {l.street}, д.{l.house}, кв.{l.floor}
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <ButtonDelete onClick={() => props.remove(l)}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegItems;