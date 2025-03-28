import styled from 'styled-components'
import CardRecomendacao from '../CardRecomendacao/index.js'
import { livros } from './dadosUltimosLancamentos.js'
import { H2 } from '../H2'
import imagem from '../../imagens/livro2.png'

const UltimosLancamentosSection = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const UltimosLancamentosDiv = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


function UltimosLancamentos(){
    return (
        <UltimosLancamentosSection>
            <H2 cor = '#EB9B00' tamanhoFonte = "40px">ÚLTIMOS LANÇAMENTOS!!</H2>
            <UltimosLancamentosDiv>
                { livros.map(livro => (
                    <img src={livro.src}></img>
                )) }
            </UltimosLancamentosDiv>

            <CardRecomendacao 
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                src={imagem}
                />

        </UltimosLancamentosSection>
    )

}

export default UltimosLancamentos;