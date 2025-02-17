
import  { NextResponse } from 'next/server';


export async function GET(request, {params}) {


    const {searchParams} = new URL(request.url)

    console.log(searchParams)

    const { userId } = await params

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    const data = await res.json()

    return NextResponse.json(data)
}