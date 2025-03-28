import Input from '../Input'
import styled from 'styled-components'
import {useState} from 'react'
import {livros} from './livros-pesquisa.js'


const SectionPesquisa = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const H2Pesquisa = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const H3Pesquisa = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const ResultadoPesquisa = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }

` 

function Pesquisa(){
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    return (
        <SectionPesquisa>
            <H2Pesquisa>Já sabe por onde começar?</H2Pesquisa>
            <H3Pesquisa>Encontre seu livro em nossa estante!!</H3Pesquisa>
            <Input 
                placeholder='Escreva sua próxima leitura'
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultaldoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultaldoPesquisa)
                }}
            />

            { livrosPesquisados.map( livro => (
                <ResultadoPesquisa>
                    <p>{livro.nome}</p>
                    <img src={livro.src}/>
                </ResultadoPesquisa>
            ) ) }   
     
        </SectionPesquisa>
    )
}

export default Pesquisa;