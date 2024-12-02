import { Link } from "react-router";

export const Card = ({ user }) => {
    if (!user) {
        return <p>Loading user data...</p>;
    }

    return (
        <>
            <div className="mx-auto w-[300px] min-h-[400px] border border-gray-600">

                <div className="flex items-center flex-col">
                    <img
                        className="w-full h-[200px]"
                        src={user.profilePhoto}
                        alt={user.name}
                    />

                    <div className="w-full px-3 py-3 text-lg font-semibold">
                        <h2>Name: <span>{user.name}</span></h2>
                        <h2>Surname: <span>{user.surname}</span></h2>
                        <h2>Job: <span>{user.job}</span></h2>
                        <h2>Salary: <span>${user.salary}</span></h2>
                    </div>
                </div>

                <Link to={`/users/${user.id}`}>
                    <div className="w-full px-3 py-3 text-lg font-semibold">
                        <button className="bg-blue-600 w-full h-[40px] text-white hover:scale-95 duration-200">View profile</button>
                    </div>
                </Link>
            </div>
        </>
    );
};