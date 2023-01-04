import styled from "styled-components"
import Character from "./Character"


export default function ChracterContainer(props) {

    const {characters, reqApi} = props

    return(
        <>
            <ContainerCharacter>
                {characters.map((character, index) => (

                    <Character dataCharacter={character} key={index}/>

                ))}
            </ContainerCharacter>
            <ContainerButton>
                <Buttom onClick={reqApi}>Recargar personajes</Buttom>
            </ContainerButton>
                                    
        </>
    )
}

const ContainerCharacter = styled.div`
    display: flex;
`
const ContainerButton = styled.div`
    width: 100%;
    text-align: center;
`
const Buttom = styled.button`
    width: 250px;
    background-color: #e76f51;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius:20px;
    foont-size: 18px;
    margin-top; 40px;
    transition: all 0.2s ease-out;

    &:hover {
        cursor: pointer;
        background-color: #1c0950;
    }
`
