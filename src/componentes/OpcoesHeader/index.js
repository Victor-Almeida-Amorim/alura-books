import './estilo.css'
const TEXTO_OPCOES = ['Categorias', 'Minha Estante', 'Favoritos']

function OpcoesHeader () {
    return (
        <ul className='opcoes'>
          { TEXTO_OPCOES.map((texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ) ) }
        </ul>
    )
}

export default OpcoesHeader;