import React, {useState} from 'react';
import Email from "../components/UI/Inputs/Email";
import Password from "../components/UI/Inputs/Password";
import InputLabel from "../components/UI/Inputs/InputLabel";
import SelectFormReg from "../components/UI/Selects/SelectFormReg";
import RegistrationForm from "../components/Forms/RegistrationForm";
import RegList from "../components/Lists/Reg/RegList";

const Registration = () => {

    const [users, setUsers] = useState([
        {
            id: 1,
            firstName: 'Евгений',
            secondName: 'Буяков',
            email: 'exmaple@mail.net',
            pass: '***********',
            area: 'Самарская область',
            city: 'Самара',
            street: 'Победы',
            house: 20,
            floor: 25,
            mIndex: 443000
        },
        {
            id: 2,
            firstName: 'Сергей',
            secondName: 'Иванов',
            email: 'exmaple2@mail2.net',
            pass: '***********',
            area: 'Саратовская область',
            city: 'Саратов',
            street: 'Ветеранов',
            house: 19,
            floor: 45,
            mIndex: 442000
        },
    ])

    const createUser = (newUser) => {
        setUsers([...users, newUser])
    }

    const removeUser = (removeUser) => {
        setUsers(users.filter(u => u.id !== removeUser.id))
    }

    // const [firstName, setFirstName] = useState('Иван')
    // const [secondName, setSecondName] = useState('Иванов')
    // const [email, setEmail] = useState('example@mail.com')
    // const [pass, setPass] = useState('')
    // const [area, setArea] = useState('')
    // const [city, setCity] = useState('Самара')
    // const [street, setStreet] = useState('Победы')
    // const [house, setHouse] = useState(10)
    // const [flat, setFlat] = useState(20)
    // const [mIndex, setMIndex] = useState(443101)

    return (
        <div>
            <RegistrationForm create={createUser} />
            <hr style={{color: 'red'}}/>
            <RegList users={users} remove={removeUser}/>
        </div>
    );
};

export default Registration;