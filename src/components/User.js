import React from 'react';

const User = ({user: {id, name, username, email}}) => {

    return (
        <div>
            {id}) {name} - {username} - {email}
            <hr/>
        </div>
    );
};

export default User;