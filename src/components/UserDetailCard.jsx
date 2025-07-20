import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


function UserDetailCard() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])
    if (!user) return <p>Loading....................</p>
    return (
        <>
            <div className="card bg-white min-w-80 shadow-xl m-10">
                
                <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow space-y-3">
                    <div className="flex items-center space-x-4">
                        <img src={user.image} alt={user.firstName} className="w-24 h-24 rounded-full border" />
                        <div>
                            <h2 className="text-2xl font-bold">{user.firstName} {user.lastName}</h2>
                            <p className="text-gray-500">Username: {user.username}</p>
                            
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mt-4">Personal Info</h3>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Gender: {user.gender}</p>
                        <p>Age: {user.age}</p>
                        <p>Birthdate: {user.birthDate}</p>
                        <p>Blood Group: {user.bloodGroup}</p>
                        <p>Height: {user.height} cm</p>
                        <p>Weight: {user.weight} kg</p>
                        <p>Eye Color: {user.eyeColor}</p>
                        <p>Hair: {user.hair.color}, {user.hair.type}</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mt-4">Address</h3>
                        <p>{user.address.address}, {user.address.city}</p>
                        <p>{user.address.state} - {user.address.stateCode}, {user.address.postalCode}</p>
                        <p>Country: {user.address.country}</p>
                        <p>Coordinates: {user.address.coordinates.lat}, {user.address.coordinates.lng}</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mt-4">Company</h3>
                        <p>Name: {user.company.name}</p>
                        <p>Department: {user.company.department}</p>
                        <p>Title: {user.company.title}</p>
                        <p>Address: {user.company.address.address}, {user.company.address.city}</p>
                        <p>{user.company.address.state}, {user.company.address.postalCode}</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mt-4">Bank Info</h3>
                        <p>Card Number: {user.bank.cardNumber}</p>
                        <p>Card Expiry: {user.bank.cardExpire}</p>
                        <p>Card Type: {user.bank.cardType}</p>
                        <p>Currency: {user.bank.currency}</p>
                        <p>IBAN: {user.bank.iban}</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mt-4">Crypto Wallet</h3>
                        <p>Coin: {user.crypto.coin}</p>
                        <p>Wallet: {user.crypto.wallet}</p>
                        <p>Network: {user.crypto.network}</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mt-4">Other</h3>
                        <p>IP: {user.ip}</p>
                        <p>MAC: {user.macAddress}</p>
                        <p>University: {user.university}</p>
                        <p>EIN: {user.ein}</p>
                        <p>SSN: {user.ssn}</p>
                        <p>User Agent: {user.userAgent}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UserDetailCard