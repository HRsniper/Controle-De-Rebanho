import styled from "styled-components";

export const Container = styled.div`
  /* width: 100vw; */
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-size: 1.6rem;

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 24rem;
      width: 100%;
      object-fit: cover;
    }
  }

  main {
    width: 98%;
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: var(--lightgray);
      padding: 0.8rem;
      border: 1px solid var(--black);
      border-radius: 0.8rem;

      fieldset {
        border: 0;

        legend {
          font-size: 2.4rem;
          margin-bottom: 1.6rem;
        }

        /* select, */
        input {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid var(--black);
          border-radius: 0.8rem;
        }

        label + input {
          margin-bottom: 1.6rem;
        }
      }

      button {
        border: 1px solid var(--black);
        background: var(--green);
        padding: 0.8rem;
        border-radius: 0.8rem;
        transition: background 0.2s;
        color: var(--white);

        &:hover,
        &:active {
          background: var(--black);
        }
      }

      nav {
        margin-top: 1.6rem;
        display: flex;
        justify-content: space-between;

        a {
          color: var(--black);
          padding: 0.8rem;
          border-radius: 0.8rem;
          transition: background 0.2s;

          &:hover,
          &:active {
            color: var(--white);
            background: var(--black);
          }
        }
      }
    }
  }

  footer {
    width: 90%;
    text-align: center;

    article {
      border: 1px solid var(--black);
      background: var(--bluesky);
      border-radius: 0.8rem;
      padding: 0.8rem;
      margin-bottom: 1.6rem;
    }

    strong {
      /* padding: 0.8rem; */
    }
  }
`;
