
export const metadata = {
    title : 'About Page',
}

export default function AboutLayout ({children}) {
    return (
        <>
            <h1>About Layout</h1>
            {children}
        </>   
    )
}