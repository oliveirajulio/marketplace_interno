import "./index.css"

import SearchIcon from '@mui/icons-material/Search';

function granelmarket() {
    return (
        <div className="ctn-granel">
            <header className="main-header">
                <input className="input" placeholder="Pesquisar proudutos ou fornecedores"></input>
                <button className="search"><SearchIcon/></button>
                <nav className="nav">
                    <ul>
                        <li>Granel</li>
                        <li>Mercearia</li>
                        <li>Suplementos</li>
                        <li>Hortifruiti</li>
                        <li>Vestuário</li>
                    </ul>
                </nav>
            </header>
            <div className="main-info">
                <h1>Granel</h1>
                <h5>Descubra e compre produtos para sua loja.</h5>
                </div>
                <div className="img">
            </div>
        </div>
    )
}

export default granelmarket;