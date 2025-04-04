import styled from "styled-components";
import {H2} from '../H2'

const CardDiv = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%; 
`

const CardH4 = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const CardP = styled.p`
    max-width: 300px;
`
const CardImg = styled.img`
    width: 150px;

`

const CardButton = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }

`

function CardRecomendacao({titulo, subtitulo, descricao, src}){

    return(
        <CardDiv>
            <div>
                <H2 cor='#EB9B00' tamanhoFonte = '24px'>{titulo}</H2>
                <CardH4>{subtitulo}</CardH4>
                <CardP>{descricao}</CardP>
            </div>
            <div>
                <CardImg 
                    src={src}/>
                <CardButton> Saiba Mais </CardButton>
            </div>
        </CardDiv>
    )

}

export default CardRecomendacao