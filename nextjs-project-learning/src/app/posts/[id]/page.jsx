
import { Suspense } from 'react'
import PostPage from '../page'

async function loadPages(id){
    const page = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await page.json()
    console.log(data)

    return data
}

async function Page({params}) {

    // console.log({params.id});
    const {id} = await params
    const pageDta = await loadPages(id);

    return(
        <div>
            <h1>Post {id}</h1>
            <h2>Titulo: {pageDta.title}</h2>
            <p>Descripcion: {pageDta.body}</p>
            <hr />
            <Suspense>
                <PostPage/>
            </Suspense>
        </div>
        
    )
}

export default Page