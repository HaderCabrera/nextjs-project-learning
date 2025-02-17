'use client'

import {useParams} from 'next/navigation'

function UsersPage() {

    const params = useParams();
    console.log(params.userId)

    return (
        
        <div>

            <button onClick={() => {
                alert(`Cliente con ID:${params.userId}`)
            }}>
                Click
            </button>

        </div>

    )
}
export default UsersPage