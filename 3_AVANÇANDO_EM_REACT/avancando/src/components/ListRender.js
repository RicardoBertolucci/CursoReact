import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Ricardo", "Matheus", "Pedro"]);
    const [users] = useState([
        {id: 1, name: "Ricardo", age: 21},
        {id: 2, name: "Emanuelly", age: 22},
        {id: 3, name: "Gustavo", age: 21},
        {id: 4, name: "Anna", age: 20},
        {id: 5, name: "Agnis", age: 20},
        {id: 6, name: "Henrique", age: 20},
    ])

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
        </div>
    )
}

export default ListRender