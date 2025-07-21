import { useEffect, useState } from 'react';
import Bookmark from '../components/BookMark';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar'

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
                  <div className="h-screen overflow-y-auto bg-base-100 p-4 rounded-xl shadow-md">
                  <Sidebar />
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
