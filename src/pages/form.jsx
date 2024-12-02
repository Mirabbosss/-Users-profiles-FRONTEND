import { useState } from "react";
import axios from "axios";
import { Link } from "react-router";

export const FormPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        job: "",
        salary: "",
    });
    const [profilePhoto, setProfilePhoto] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setProfilePhoto(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("surname", formData.surname);
        data.append("job", formData.job);
        data.append("salary", formData.salary);

        if (profilePhoto) {
            data.append("profilePhoto", profilePhoto);
        }

        try {
            await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/api/users`,
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            alert("User created!");
        } catch (error) {
            console.error("Error:", error);
            alert("Error!");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Create new user</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block font-medium">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="surname" className="block font-medium">Surname</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="job" className="block font-medium">Job</label>
                    <input
                        type="text"
                        id="job"
                        name="job"
                        value={formData.job}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="salary" className="block font-medium">Salary</label>
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="profilePhoto" className="block font-medium">Profile picture</label>
                    <input
                        type="file"
                        id="profilePhoto"
                        name="profilePhoto"
                        onChange={handleFileChange}
                        className="w-full border px-3 py-2 rounded"
                        accept="image/*"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-green-500 text-lg font-semibold w-full h-[40px] text-white hover:scale-95 duration-200"
                >
                    Create
                </button>
            </form>

            <Link to={`/`}>
                <div className="w-full py-3 text-lg font-semibold">
                    <button className="bg-blue-500 w-full h-[40px] text-white hover:scale-95 duration-200">All users</button>
                </div>
            </Link>
        </div>
    );
};
