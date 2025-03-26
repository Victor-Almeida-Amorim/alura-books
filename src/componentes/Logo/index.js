import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
`

const LogoContainerImg = styled.img`
    margin-right: 10px;

`

function Logo() {
    return (
    <LogoContainer>
          <LogoContainerImg 
          src={logo} 
          alt='Logo da Alura Books' />
          <p><strong>Alura Books</strong></p>
    </LogoContainer>
    )
}

export default Logo;