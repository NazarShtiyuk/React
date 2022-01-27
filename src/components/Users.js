import React, {useEffect, useState} from 'react';

const Users = ({styleClass}) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(value => value.json())
            .then(value => setUsers(value))

    }, [])

    return (
        <div className={styleClass}>
            <ol>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ol>
        </div>
    );
};

export default Users;