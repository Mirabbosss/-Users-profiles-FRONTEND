import axios from "axios";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";

export const UserPage = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/users/${id}`);
                setUser(response.data.data);
            } catch (error) {
                console.error("Error:", error);
            }
        }

        fetchUser();
    }, [id]);

    return (
        <div className="mx-auto max-w-[1440px] w-full container">
            <div className="mx-auto w-[300px] min-h-[400px] border border-gray-600">
                <div className="flex items-center flex-col">
                    <img
                        className="w-full h-[200px]"
                        src={user?.profilePhoto}
                        alt={user?.name}
                    />

                    <div className="w-full px-3 py-3 text-lg font-semibold">
                        <h2>Name: <span>{user?.name}</span></h2>
                        <h2>Surname: <span>{user?.surname}</span></h2>
                        <h2>Job: <span>{user?.job}</span></h2>
                        <h2>Salary: <span>${user?.salary}</span></h2>
                    </div>
                </div>

                <Link to={`/`}>
                    <div className="w-full px-3 py-3 text-lg font-semibold">
                        <button className="bg-blue-600 w-full h-[40px] text-white hover:scale-95 duration-200">All users</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};