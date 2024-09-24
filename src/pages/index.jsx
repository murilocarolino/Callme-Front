import React from 'react';

const IndexPage = () => {
  return (
      <div className="container" id="container">
        <div className="form-container sign-up-container">
            <form action="#">

                <img src="./img/logo.png" className="logoCadastro" alt="Logo" />
                <h1>Para quando o mundo parecer turbulento.</h1>

                <div className="categorias">

                    <button type="button" id="paginaUsuario" className="navigate-usuario">
                        Quero desabafar
                    </button>

                    <button type="button" id="paginaEstudante" className="navigate-estudante">
                        Estou cursando psicologia
                    </button>
                
                    <button type="button" id="paginaPsicologo" className="navigate-psicologo">
                        Sou psicólogo
                    </button>

                </div>

                <div className="group-grid">

                    <div className="input-group">
                        <div className="labelCadastro">Nome</div>
                        <input type="text" placeholder="Nome" className="inputCadastro" />
                    </div>

                    <div className="input-group">
                        <div className="labelCadastro">E-mail</div>
                        <input type="email" placeholder="E-mail" className="inputCadastro" />
                    </div>

                    <div className="input-group">
                        <div className="labelCadastro">Senha</div>
                        <input type="password" placeholder="Senha" className="inputCadastro" />
                        <div className="icon">👁️</div>
                    </div>

                    <div className="input-group">
                        <div className="labelCadastro">Confirmar Senha</div>
                        <input type="password" placeholder="Confirmar Senha" className="inputCadastro" />
                    </div>

                    <div className="input-group">
                        <div className="labelCadastro">Nascimento</div>
                        <input type="text" placeholder="Data de nascimento" className="inputCadastro" />
                    </div>

                    <div className="input-group">
                        <div className="labelCadastro">Nascimento</div>
                        <input type="text" placeholder="Data de nascimento" className="inputCadastro" />
                        <div className="icon">📅</div>
                    </div>

                </div>

                <button type="submit">Sign Up</button>
                <div className="backgroundCadastrar"></div>
                <button type="button" className="ghost" id="signIn">Entre</button>
                <div className="backgroundEntrar"></div>
                
            </form>
        </div>

        <div className="form-container sign-in-container">
            <form action="#">

                <div className="header">
                    <img src="./img/logo.png" className="logo" alt="Logo" />
                    <h1>Para quando o mundo parecer turbulento.</h1>
                </div>

                <div className="groupInput">
                    <div className="input-wrapper">
                        <div className="label">E-mail</div>
                        <input type="email" placeholder="Digite seu e-mail" />
                    </div>
                    <div className="input-wrapper">
                        <div className="label">Senha</div>
                        <input type="password" placeholder="Digite sua senha" />
                    </div>
                </div>
                <a href="#" className="forgot-password">Esqueci minha senha</a>

                <button id="entre" type="button">Entre</button>
                <div className="backgroundEntrar"></div>
                <button type="button" className="ghost" id="signUp">Sign Up</button>
                <div className="backgroundCadastrar"></div>

            </form>
        </div>

        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h2>Junte-se a nós, <br /> cadastre-se agora!</h2>
                    <img src="./img/macallme.png" className="macallme" alt="Imagem Callme" />
                </div>
                <div className="overlay-panel overlay-right">
                    <h2>Seja bem vindo ao Callme! <br /> Faça seu login!</h2>
                    <img src="./img/macallme.png" className="macallme" alt="Imagem Callme" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default IndexPage;
