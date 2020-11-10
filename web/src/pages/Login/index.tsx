import React, { FormEvent, useState } from "react";

import imgRebanho from "../../assets/images/rebanho.jpg";
import { Container } from "./styles";

export const Login = (): JSX.Element => {
  // const [administracao, setAdministracao] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // console.log(administracao);
  }

  return (
    <Container>
      <header>
        <img src={imgRebanho} alt="🐂" />
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>acesso ao produtor</legend>

            {/* <label htmlFor="access">acesso</label>
            <select name="access" id="access" onChange={(e) => setAdministracao(Boolean(e.target.value))}>
              <optgroup label="produtor">
                <option value="false">produtor</option>
              </optgroup>

              <optgroup label="administracao">
                <option value="true">administracao</option>
              </optgroup>
            </select> */}

            <label htmlFor="email">email</label>
            <input type="text" id="email" />

            <label htmlFor="password">senha</label>
            <input type="password" id="password" />
          </fieldset>

          <button type="submit">Login</button>

          <nav>
            <a href="">Recuperar senha</a>
            <a href="">Cadastrar-se</a>
          </nav>
        </form>
      </main>

      <footer>
        <article>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>

        <strong>copyright</strong>
      </footer>
    </Container>
  );
};
