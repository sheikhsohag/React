import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import '../../css/Users.css'



const Users = (props) => {
  return (
    <section>
        <div className='users'>
                {props.users && props.users.map((user) => (
                <User user={user} key={user.id} deleteId={props.deleteId}/>
            ))}

        </div>
     
    </section>
  );
};

export default Users;
