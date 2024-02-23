import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Ricardo", "Matheus", "Pedro"]);
    const [users, setUsers] = useState([
        {id: 1, name: "Ricardo", age: 21},
        {id: 2, name: "Emanuelly", age: 22},
        {id: 3, name: "Gustavo", age: 21},
        {id: 4, name: "Anna", age: 20},
        {id: 5, name: "Agnis", age: 20},
        {id: 6, name: "Henrique", age: 20},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.round(Math.random() * 6);

        setUsers((prevUsers) => {
            console.log(prevUsers, prevUsers.length)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, id) => (
                    <li key={id}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>

            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender