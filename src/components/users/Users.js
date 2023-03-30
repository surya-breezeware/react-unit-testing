import { useState, useEffect } from 'react'
import Test from '../../Test'

const Users = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data.map((user) => user.name)))
      .catch(() => setError('Error fetching users'))
  }, [])
  return (
    <div>
      {/* <Test /> */}
      <h2>Users</h2>
      {error && (
        <p>
          <Test />
        </p>
      )}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users
