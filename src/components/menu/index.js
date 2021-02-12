import {Link} from 'react-router-dom'

export default function Menu () {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
            <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
            <Link className="navbar-brand" to="/produtos">Produtos</Link>
            <Link className="navbar-brand" to="/endereco">Endereço</Link>
            <Link className="navbar-brand" to="/contatos">Contatos</Link>
            </div>
            </nav>
        </>
    )
}
