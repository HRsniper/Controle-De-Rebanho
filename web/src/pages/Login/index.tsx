import React from "react";

import { Container } from "./styles";

export const Login = (): JSX.Element => {
  return (
    <Container>
      <header>
        {/* <img src="" alt="" /> */}
        <p>+</p>
      </header>

      <main>
        <form action="" method="GET">
          <fieldset>
            <legend>Login</legend>

            <label htmlFor="access">acesso</label>
            <select name="access" id="access">
              <optgroup label="produtor">
                <option value="prod">produtor</option>
              </optgroup>

              <optgroup label="administracao">
                <option value="adm">administracao</option>
              </optgroup>
            </select>

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
