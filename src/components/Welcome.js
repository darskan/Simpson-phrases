import styled from "styled-components";
import logo from '../the-simpson.png'

const WelcomeText = styled.p`
  color: #2a9d8f;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  font-size: 25px;
`;

const ImageLogo = styled.img`
width: 450px;
height: auto;

&:hover {
  cursor: pointer;
}
`;

const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`;

export default function Welcome(props) {

  const { reqApi } = props
    
    return(

        <ContentLogo>
            <WelcomeText>
                Bienvenido, para poder utilizar las frases has clic sobre la imagen
            </WelcomeText>
            <ImageLogo 
              src={logo} 
              alt="Logo Simpson" 
              onClick={reqApi} 
            />
        </ContentLogo>
    )
}