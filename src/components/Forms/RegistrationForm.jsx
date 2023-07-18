import React, {useState} from 'react';
import InputLabel from "../UI/Inputs/InputLabel";
import Email from "../UI/Inputs/Email";
import Password from "../UI/Inputs/Password";
import SelectFormReg from "../UI/Selects/SelectFormReg";
import ButtonAdd from "../UI/Buttons/ButtonAdd";

const RegistrationForm = ({create}) => {

    const [user, setUser] = useState({
        firstName: '',
        secondName: '',
        email: '',
        pass: '',
        area: '',
        city: '',
        street: '',
        house: 0,
        floor: 0,
        mIndex: 0
    })

    const addUser = (e) => {
        e.preventDefault()
        const newUser = {
            id: Date.now(),
            ...user
        }
        create(newUser)
        setUser(
            {
                firstName: '',
                secondName: '',
                email: '',
                pass: '',
                area: '',
                city: '',
                street: '',
                house: 0,
                floor: 0,
                mIndex: 0
            }
        )
    }

    return (
        <form className="row g-3">
            <h1 style={{textAlign: 'center', margin: '25px 0 15px 0'}}>Форма регистрации</h1>
            <div className="col-md-6">
                <InputLabel
                    title='Фамилия'
                    type='text'
                    unit='inputSecondName'
                    value={user.secondName}
                    setValue={event => setUser({...user, secondName: event.target.value})}/>
            </div>
            <div className="col-md-6">
                <InputLabel
                    title='Имя'
                    type='text'
                    unit='inputFirstName'
                    value={user.firstName}
                    setValue={event => setUser({...user, firstName: event.target.value})}/>
            </div>
            <div className="col-md-6">
                <Email
                    title='Эл. адрес'
                    value={user.email}
                    setValue={event => setUser({...user, email: event.target.value})}
                />
            </div>
            <div className="col-md-6">
                <Password
                    title='Пароль'
                    value={user.pass}
                    setValue={event => setUser({...user, pass: event.target.value})}
                />
            </div>
            <div className="col-md-6">
                <InputLabel
                    title='Город'
                    type='text'
                    unit='inputCity'
                    value={user.city}
                    setValue={event => setUser({...user, city: event.target.value})}
                />
            </div>
            <div className="col-md-4">
                <SelectFormReg
                    title='Область'
                    defaultValue='Выберите регион...'
                    unit='inputAreaSelect'
                    value={user.area}
                    onChange={event => setUser({...user, area: event.target.value})}
                />
            </div>
            <div className="col-md-2">
                <InputLabel
                    title='Индекс'
                    type='number'
                    unit='inputZip'
                    value={user.mIndex}
                    setValue={event => setUser({...user, mIndex: event.target.value})}
                />
            </div>
            <div className="col-6">
                <InputLabel
                    title='Улица'
                    type='text'
                    unit='inputStreet'
                    value={user.street}
                    setValue={event => setUser({...user, street: event.target.value})}
                />
            </div>
            <div className="col-3">
                <InputLabel
                    title='Дом'
                    type='number'
                    unit='inputHouse'
                    value={user.house}
                    setValue={event => setUser({...user, house: event.target.value})}
                />
            </div>
            <div className="col-3">
                <InputLabel
                    title='Квартира'
                    type='number'
                    unit='inputFlat'
                    value={user.floor}
                    setValue={event => setUser({...user, floor: event.target.value})}
                />
            </div>
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Проверить меня
                    </label>
                </div>
            </div>
            <div className="col-12">
                <ButtonAdd onClick={addUser}>
                    &nbsp;Добавить&nbsp;
                </ButtonAdd>
            </div>
        </form>
    );
};

export default RegistrationForm;