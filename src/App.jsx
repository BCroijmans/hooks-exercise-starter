import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>UserList</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}hallo</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
