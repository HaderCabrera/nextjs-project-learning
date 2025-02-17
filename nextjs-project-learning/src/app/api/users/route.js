import { NextResponse } from 'next/server'


//Extract parameter
//consultar backend /database
//Comunicate whit server

export async function GET() {

    //Extract parameter
    //consultar backend /database
    //Comunicate whit server

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    return NextResponse.json(users)
}

export async function POST(request) {

    const {nombre,apellido} = await request.json();
    console.log(nombre, apellido);

    return NextResponse.json({
        id: 12,
        name: "Agregando"
    })
}

export function PUT() {

    //Extract parameter
    //consultar backend /database
    //Comunicate with server

    return NextResponse.json({
        id: 12,
        name: "Poniendo",
    })
}

export function DELETE() {

    //Extract parameter
    //consultar backend /database
    //Comunicate whit server

    return NextResponse.json({
        id: 12,
        name: "Eliminando"
    })
}