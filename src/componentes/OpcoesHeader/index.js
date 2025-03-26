import styled from 'styled-components'

const TEXTO_OPCOES = ['Categorias', 'Minha Estante', 'Favoritos']

const OpcoesContainer = styled.li`
    display: flex;
    text-align: center;

`

const OpcaoContainer = styled.ul`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

function OpcoesHeader () {
    return (
        <OpcoesContainer>
          { TEXTO_OPCOES.map((texto) => (
            <OpcaoContainer className='opcao'><p>{texto}</p></OpcaoContainer>
          ) ) }
        </OpcoesContainer>
    )
}

export default OpcoesHeader;