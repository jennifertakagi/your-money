import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;

      &.mobileTitle {
        display: none;
      }
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--secondary);
      }

      &.withdrawal {
        color: var(--red);
      }

      &.deposit .withdrawal {
      }
    }
  }

  @media (max-width: 720px) {
    table {
      .title {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-between;
        align-items: center;
      }

      th {
        &:not(.mobileTitle) {
          display: none;
        }

        &.mobileTitle {
          display: block;
          width: 20rem;
        }
      }

      tbody tr {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        margin: 1rem auto;
        max-width: 95%;
      }

      td {
        padding: 0rem 1rem 0rem 2.2rem;

        &:first-child {
          padding-top: 3.2rem;
        }

        &:last-child {
          padding-bottom: 3.2rem;
        }

        &.deposit,
        &.withdrawal {
          font-weight: 400;
          font-size: 1.4rem;
        }
      }
    }
  }
`;
