import Image from "next/image";
import Link from "next/link";

async function loadUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function Home() {
  const users = await loadUsers()
  return (
    <div>
      <h1 className="font-bold">Hola a todos a mi red social</h1>
    </div>
  )
}

export default Home