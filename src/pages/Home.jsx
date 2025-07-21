import { useEffect, useState } from 'react';
import UserCard from '../components/userCards';
import Bookmark from '../components/BookMark';
import { Link } from 'react-router-dom';

export default function Home() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [department, setDepartment] = useState('');
    const [rating, setRating] = useState('5');


    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                const ratedUsers = data.users.map(user => ({
                    ...user,
                    rating: Math.floor(Math.random() * 5) + 1
                }));
                setUsers(ratedUsers);
            });
    }, []);

    const filterUser = users.filter((user) => {
        const fullName = `${user.firstName}${user.lastName}`.toLowerCase();
        const matchSearch = fullName.includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase())
        const matchDepartment = department ? user.company.department === department : true;
        const matchRating = rating ? user.rating === Number(rating) : true;

        return matchSearch && matchDepartment && matchRating
    })
    return (


        <div className="min-h-screen bg-base-300">


            <div className="flex flex-col md:flex-row p-4 gap-4">


                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                    <input
                        type='text'
                        placeholder='Search by name or email...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="input input-bordered  bg-white shadow-xl w-full max-w-md mb-6"
                    />
                    <select value={department} onChange={(e) => setDepartment(e.target.value)} className="select bg-white shadow-xl select-bordered">
                        <option value="">All Departments</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Human Resources">Human Resources</option>
                    </select>
                    <select value={rating} onChange={(e) => setRating(e.target.value)} className="select  bg-white shadow-xl select-bordered">
                        <option value="">All Ratings</option>
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                    </select>
                    {filterUser.length > 0 ? (
                        filterUser.map((user) =>
                            <UserCard key={user.id} user={user} />
                        )
                    ) : (
                        <p>Sorry ..... Not Found !!!</p>
                    )}
                </div>


                <div className="w-full md:w-2/3 text-base-content">
                    <div className="bg-base-100 p-4 rounded-xl shadow-md">
                        <Bookmark />


                    </div>

                    <div className="bg-base-100 p-4 rounded-xl shadow-xl m-4 ">
                        <h1 className='text-2xl font-bold mb-4'>Analytical Graph</h1>
                        <p>Quickly spot top performers and team trends --- all in one simple view</p>
                        <Link to="/analytics">
                            <button className="btn btn-primary m-10">See Charts</button>
                        </Link>

                    </div>
                </div>

            </div>
        </div>

    );
}
