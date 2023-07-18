import React, {useMemo, useState} from 'react';
import InputLabel from "../components/UI/Inputs/InputLabel";
import ButtonAdd from "../components/UI/Buttons/ButtonAdd";
import UsersList from "../components/Lists/Users/UsersList";
import UserForm from "../components/Forms/UserForm";
import SelectSortUser from "../components/UI/Selects/SelectSortUser";
import UserFilter from "../components/Filters/UserFilter";
import ModalUsers from "../components/UI/ModalWindows/ModalUsers/ModalUsers";

const Users = () => {

    const [person, setPerson] = useState([
        {id: 1, firstName: 'Иван', secondName: 'Иванов', birthDay: '1991-12-25'},
        {id: 2, firstName: 'Сергей', secondName: 'Сергеев', birthDay: '1990-03-14'},
        {id: 3, firstName: 'Петр', secondName: 'Петров', birthDay: '1989-07-01'},
        {id: 4, firstName: 'Семен', secondName: 'Семенов', birthDay: '1987-05-18'},
        {id: 5, firstName: 'Дмитрий', secondName: 'Кузнецов', birthDay: '1978-11-11'},
        {id: 6, firstName: 'Евгений', secondName: 'Макаров', birthDay: '1982-09-19'},
        {id: 7, firstName: 'Владислав', secondName: 'Петров', birthDay: '1982-03-29'},
        {id: 8, firstName: 'Сергей', secondName: 'Кузнецов', birthDay: '1990-07-11'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

    const sortedUsers = useMemo(() => {
        if (filter.sort) {
            return [...person].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return person
    },[filter.sort, person])


    const sortedAndSearchedUsers = useMemo(() => {
        return sortedUsers.filter(user => {
            return user.firstName.toLowerCase().includes(filter.query.toLowerCase()) ||
                   user.secondName.toLowerCase().includes(filter.query.toLowerCase()) ||
                   user.birthDay.toLowerCase().includes(filter.query.toLowerCase())
        })
    }, [filter.query, sortedUsers])

    const createUser = (newUser) => {
        setPerson([...person, newUser])
        setModal(false)
    }

    const removeUser = (user) => {
        setPerson(person.filter(p => p.id !== user.id))
    }

    return (
        <div>
        <h2>Список пользователей</h2>
            <ButtonAdd onClick={() => setModal(true)}>
                &nbsp;Добавить пользователя&nbsp;
            </ButtonAdd>
            <ModalUsers visible={modal} setVisible={setModal}>
                <UserForm create={createUser}/>
            </ModalUsers>
            <UserFilter
                filter={filter}
                setFilter={setFilter}
            />
            <table className="table table-striped mt-4">
                <thead>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Дата рождения</th>
                    <th></th>
                </tr>
                </thead>
                <UsersList person={sortedAndSearchedUsers} remove={removeUser} key={person.id} />
            </table>
        </div>
    );
};

export default Users;