import "./index.css"

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

function granelmarket() {
    return (
        <div className="ctn-granel">
            <header className="main-header1">
                <input className="input" placeholder="Pesquisar proudutos ou fornecedores"></input>
                <button className="search"><SearchIcon/></button>
                <nav className="nav">
                    <ul>
                        <li>Granel</li>
                        <li>Mercearia</li>
                        <li>Oficinais</li>
                        <li>Oleos Variados</li>
                        <li>Suplementos</li>
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
            
            <div className="main-filter">
                <nav className="nav1">
                <ul>
                    <button>FIltros</button>
                    <button>Mais Vendidos</button>
                    <button>Preço Baixo</button>
                    <button>Novo Esse Mês</button>
                </ul>
                </nav>
            </div>
        </div>
    )
}

export default granelmarket;