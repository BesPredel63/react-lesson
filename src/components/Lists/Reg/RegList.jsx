import React from 'react';
import RegItems from "./RegItems";

const RegList = ({users, remove}) => {

    return (
        <div>
            <RegItems user={users} key={users.id} remove={remove}/>
        </div>
    );
};

export default RegList;