 
import  { useEffect, useState } from 'react';
import axios from 'axios'; 
import UserDetails from './UserDetails';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <ul className="w-full md:w-1/3 p-4 space-y-2">
        {users.map(user => (
          <li
            key={user.id}
            className={`cursor-pointer p-4 bg-white rounded shadow hover:bg-gray-100 transition ${
              selectedUser && selectedUser.id === user.id ? 'bg-gray-100' : ''
            }`}
            onClick={() => setSelectedUser(user)}
          >
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </li>
        ))}
      </ul>
      <div className="w-full md:w-2/3 p-4">
        {selectedUser && <UserDetails user={selectedUser} />}
      </div>
    </div>
  );
};

export default UserList;
