import React, { useState, useEffect} from 'react'
import UserList from './UserList'
import UpdateProfile from './UpdateProfile'

import Button from 'react-bootstrap/Button';




function Profile()  {

  const [users, setUsers] = useState([])

  const fetchUsers = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
    const data = await res.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const deleteUser = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    })
    console.log(res.status);
  }

  return (
   <div>
    <UserList />
    <UpdateProfile />
    <h2>Current Profiles</h2>
      
    {users.map(user => 
   <div className='mb-3' key={user.id}>
   <div className='d-flex justify-content-center'>
     <p>{user.name}</p>
   </div>
   <div className='d-flex justify-content-center'>
     <Button className='' size="lg" variant='danger' onClick={() => deleteUser(user.id)}>Delete User</Button>
   </div>
 </div>
      )}
      
   </div>
  )
}

export default Profile
