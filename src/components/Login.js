import styled from 'styled-components';
const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogo src='/images/cta-logo-one.svg' alt='' />
          <SignUp>GET IT ALL</SignUp>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nisi
            sed doloribus fugiat ea libero, cumque eaque, iusto sint animi
            adipisci deleniti minus voluptatum tempora quidem tenetur soluta
            vitae velit placeat labore corrupti architecto, aut possimus fugit.
            Voluptatum maxime porro optio illum, enim ipsam laudantium
            repudiandae quam quaerat velit deleniti.
          </Description>
          <CTALogo src='/images/cta-logo-two.png' alt='' />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  height: 100%;
  background-image: url('/images/login-background.jpg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const CTALogo = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
export default Login;
