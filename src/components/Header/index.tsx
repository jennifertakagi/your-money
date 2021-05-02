import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

export function Header () {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Your Money"/>
        <button type="button">
          New transaction
        </button>
      </Content>
    </Container>
  )
}