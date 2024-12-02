import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "../components/card";
import { Link } from "react-router";


export const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/users`);
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="mx-auto max-w-[1440px] w-full container">
      <div className="grid grid-cols-1 sm:flex flex-wrap gap-2">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>

      <Link to={'/form'}>
        <div className="w-[200px] mx-auto mt-5 px-3 py-3 text-lg font-semibold">
          <button className="bg-blue-600 w-full h-[40px] text-white hover:scale-95 duration-200">Create new user</button>
        </div>
      </Link>
    </div>
  );
};
