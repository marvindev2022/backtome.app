import './styles.css';
import logo from '../../../assets/card/CardOng/logoOng.svg'

export default function CardOng() {
    return (
        <div className="card-ong">
            <img className='card-logo' src={logo} alt="Logo" />
            <div>
                <h2 className='card-title'>Nome da ONG</h2>
                <span className='card-since'>Desde YYYY</span>
            </div>
            <p className='card-description'>Learn for free about math, art, computer programming, economics, physics, chemistry, biology, medicine, finance, history, and more. (Pequena descrição)</p>
        </div>
    )
}