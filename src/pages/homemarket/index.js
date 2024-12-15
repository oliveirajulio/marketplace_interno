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
                        <li>Oficinais</li>
                        <li>Oleos Variados</li>
                        <li>Suplementos</li>
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
                    <p onClick={granel}>Granel</p>
                    <p>Mercearia</p>
                    <p>Oficinais</p>
                    <p>Oleos Variados</p>
                    <p>Suplementos</p>
                    <p>Vestuário</p>
                </ul>
            </nav>
            <div className="ctn-dynamic">
                <div className="nav-move">
                    <div className="it1">
                        <img src="/imagens/maca_peruana.png" alt="Descrição da imagem" />
                        <h4>Maca Peruana</h4>


                    </div>
                    <div className="it2">
                        <img src='/imagens/moringa.jpg' alt="moringa" />
                        <h4>Moringa</h4>
                        

                    </div>
                    <div className="it3">
                        <img src='/imagens/curcuma.jpg' alt="moringa" />
                        <h4>Cúrcuma</h4>

                        
                    </div>
                    <div className="it4">
                        <img src='/imagens/farinha_de_uva.jpg' alt="moringa" />
                        <h4>Farinha de Uva</h4>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default homemarket;