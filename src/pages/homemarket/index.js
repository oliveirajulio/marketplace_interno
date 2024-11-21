import "./index.css"

import SearchIcon from '@mui/icons-material/Search';

const granel = () => {
    window.location = "granel"
}

function homemarket() {
    return (
        <div className="container">
            <header className="main-header">
                <input className="input" placeholder="Pesquisar proudutos ou fornecedores"></input>
                <button className="search"><SearchIcon/></button>
                <nav className="nav">
                    <ul>
                        <li onClick={granel}>Granel</li>
                        <li>Mercearia</li>
                        <li>Suplementos</li>
                        <li>Hortifruiti</li>
                        <li>Vestuário</li>
                    </ul>
                </nav>
            </header>
            <div className="text-main">
                <h1 className="title">
                Abasteça suas prateleiras com os melhores proudutos
                </h1>
            </div>
            <nav className="nav2">
                    <ul>
                        <p className="item">Granel</p>
                        <p className="item">Mercearia</p>
                        <p className="item">Suplementos</p>
                        <p className="item">Hortifruiti</p>
                        <p className="item">Vestuário</p>
                    </ul>
                </nav>
        </div>
    )
}

export default homemarket;