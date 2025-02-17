import Link from "next/link";

async function loadUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function userPage(){
    const users = await loadUsers()
    return (
        <ul key={users.id}>
          {
            users.map((user) =>
              <Link key={user.id} href={`/${user.id}`}>
                <li key={user.id} className="bg-slate-400 mb-2 p-4 rounded-md flex justify-between">
                  <div>
                    <h5 className="font-bold">{user.id}. {user.first_name} {user.last_name}</h5>
                    <p className="text-slate-100">email: {user.email}</p>
                  </div>
                  <img src={user.avatar} className="rounded-full w-20"></img>
                </li>
              </Link>  
            )
          }
        </ul>      
    );
}

export default userPage