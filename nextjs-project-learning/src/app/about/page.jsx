'use client'

import { useRouter, use } from 'next/navigation'

export default function AboutPage () {

    const router = useRouter()
    return (
        <section>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque assumenda, illum facilis magni consectetur expedita eveniet dolores repellendus vero similique ratione molestiae maxime pariatur placeat eligendi, illo aperiam reiciendis minus corrupti eum! Temporibus illum cumque reiciendis ad qui corrupti ducimus neque aut vel velit quas architecto veniam corporis assumenda voluptate pariatur aperiam, error soluta minus culpa deleniti nobis perferendis repudiandae! Minima a quo sed et suscipit sit dolor iusto sequi nemo! Porro debitis perferendis mollitia provident ratione possimus ducimus, minus sapiente quasi? Asperiores reiciendis, cum esse officia animi laudantium impedit labore rerum iste pariatur illo explicabo est aperiam praesentium incidunt.</p>


            <button onClick={() => {
                alert("Redireccionando hacia _Home_")
                router.push('/')
            }}>
                CLick
            </button>

        </section>
    )
}