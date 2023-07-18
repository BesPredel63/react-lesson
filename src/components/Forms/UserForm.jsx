import React, {useState} from 'react';
import InputLabel from "../UI/Inputs/InputLabel";
import ButtonAdd from "../UI/Buttons/ButtonAdd";

const UserForm = ({create}) => {

    // если форма имеет большое кол-во полей можно все эти поля описать в одном хуке
    const [users, setUsers] = useState({
        firstName: '',
        secondName: '',
        birthDay: new Date()
    })
    const addNewPerson = (e) => {
        e.preventDefault()
        // в том случае, когда у нас в хуке уже описан объект со всеми полями, то создавать новый объект подобным образом нет смысла
        // const newPers = {
        //     id: Date.now(),
        //     firstName,
        //     secondName,
        //     birthDay
        // }

        // новый объект можно передать вот таким вот образом
        // вторым аргументом передаем объект, структура тут "произвольная", т.е. первым можно указать ID, а уже потом сам вновь возданный объект
        // если поменять их местами зеркально, то в объект создаться, но сам ID будет в конце, что может нарушить чтение JSON данных
        // setPerson([...person, {id: Date.now(), ...users}])

        // в этом варианте мы создадим обратную связь от дочернего компонента к родительскому, с помощью callback функции
        const newUser = {
            id: Date.now(),
            ...users
        }
        // и вот тут мы передаем в функцию, переданную от родителя, объект сформированный в дочернем элементе
        // таким образом и создается обратная связь от дочернего к родительскому
        create(newUser)

        // очищаем поля после ввода данных о новом пользователе - очистка значений для каждого хука
        // setFirstName('')
        // setSecondName('')
        // setBirthDay(new Date())
        setUsers({
            firstName: '',
            secondName: '',
            birthDay: new Date()
        })
    }

    return (
        <form>
            <h2>Добавить пользователя</h2>
            <div className="row">
                <div className='col-md-6'>
                    <InputLabel
                        title='Имя'
                        type='text'
                        className='form form-control'
                        value={users.firstName}
                        setValue={event => setUsers({...users, firstName: event.target.value})}
                    />
                </div>
                <div className='col-md-6'>
                    <InputLabel
                        title='Фамилия'
                        type='text'
                        className='form form-control'
                        value={users.secondName}
                        setValue={event => setUsers({...users, secondName: event.target.value})}
                    />
                </div>
            </div>
            <div className="row">
                <div className='col-md-6'>
                    <InputLabel
                        title='Дата рождения'
                        type='date'
                        className='form form-control'
                        value={users.birthDay}
                        setValue={event => setUsers({...users, birthDay: event.target.value})}
                    />
                </div>
                <div className='col-md-auto pt-2'>
                    <ButtonAdd onClick={addNewPerson}>&nbsp;Добавить&nbsp;</ButtonAdd>
                </div>
            </div>
        </form>
    );
};

export default UserForm;