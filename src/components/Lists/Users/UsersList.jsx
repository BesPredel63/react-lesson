import React from 'react';
import ButtonDelete from "../../UI/Buttons/ButtonDelete";

const UsersList = (props) => {

    if (!props.person.length) {
        return (
            <tbody>
                <tr><td colSpan='6'><h4 style={{textAlign: 'center'}}>Список пользователей пуст</h4></td></tr>
            </tbody>
        )
    }

    return (
        <tbody>
        {props.person.map((p, index) =>
            <tr key={p.id}>
                <td></td>
                <td>{index + 1}</td>
                <td>{p.firstName}</td>
                <td>{p.secondName}</td>
                <td>{p.birthDay}</td>
                <td>
                    <ButtonDelete onClick={() => props.remove(p)}>
                        {/*&nbsp;Удалить&nbsp;*/}
                    </ButtonDelete>
                </td>
            </tr>
        )}
        </tbody>
    );
};

export default UsersList;