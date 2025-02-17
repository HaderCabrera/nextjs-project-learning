
import UserCard from "@/components/UserCard";


async function loadUser (id) {
    const data = await fetch(`https://reqres.in/api/users/${id}`)
    const res = await data.json()
    return res.data
}

async function userPage({params}){

    console.log(params);
    const {user} = await params;
    // //console.log({user})
    const persona = await loadUser(user);
    return (
        <div className="flex flex-col gap-20 mt-20">
            <h1>Estas estalqueado a la persona con el ID : {persona.id}</h1>
             <UserCard user={persona}/>
        </div>
    )
}

export default userPage