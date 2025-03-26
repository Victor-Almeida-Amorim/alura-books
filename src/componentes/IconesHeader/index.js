import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const ICONCES = [perfil, sacola]

const IconesContainer = styled.li`
    display: flex;
    align-items: center;

`

const IconeContainer = styled.ul`
    margin-right: 40px;
    width: 25px;
`

function IconesHeader(){
    return (
        <IconesContainer>
          { ICONCES.map( (icone) => (
              <IconeContainer> <img src={icone}></img> </IconeContainer>
            ) ) }
        </IconesContainer>
    )
}

export default IconesHeader;