'use client'

import Link from "next/link"


function UserCard({user}){
    return (
        <div key={user.id} className="text-center m-5 bg-slate-400 p-5 rounded-md flex flex-col items-center">
            <h1>{user.id}. {user.first_name} {user.last_name}</h1>
            <p className="font-bold">Email : {user.email}</p>
            <button  className="bg-red-500 px-4 " onClick={()=> {}}>Llamar a {user.first_name}</button>
            <p>{user.text}</p>
            <img src={user.avatar} alt="profile puicture" />
            <Link href="/" className="font-bold border-b-4">Volver a inicio</Link>
        </div>
    )
}

export default UserCard