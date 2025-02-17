import Link from "next/link"

export default function NotFound() {
    return (
        <section>
            <h1>404</h1>
            <p>Pagina no encontrada, verifique el Path que intentas ingresar</p>
            
            <Link href="/">
                Voler
            </Link>
        </section>
    )
}