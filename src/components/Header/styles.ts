import styled from 'styled-components';

export const Container = styled.header`
  background: var(--primary);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--shape);
    background-color: var(--primary-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 720px) {
    button {
      padding: 0 1.5rem;
    }

    img {
      width: 10rem;
      height: 2rem;
      top: 5rem;
      left: 2rem;
    }
  }
`;
