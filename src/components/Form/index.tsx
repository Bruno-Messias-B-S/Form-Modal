import { useState } from 'react';
import * as C from './styles';

type Props = {
    click: () => void;
}

export const Form = ({ click }: Props) => {
    const [logged, setLogged] = useState(false)

    const changeLogged = () => {
        setLogged(true)
    }

    const changeSetLogged = () => {
        setLogged(false)
    }

    return (
    <C.Container>
        {!logged &&
        <div className="form-container">
        
        <div className="imagem">
            <img onClick={click} src="./src/assets/close.png"/>
        </div>

        <h1>Cadastrar</h1>
            <form>
                <div className="fields">
                    <label>Nome:</label><br/>
                    <input type="text"/>
                </div>

                <div className="fields">
                    <label>Email:</label><br/>
                    <input type="email"/>
                </div>

                <div className="fields">
                    <label>Senha:</label><br/>
                    <input type="password"/>
                </div>

                <div className="btn-submit">
                    <button type="submit">Enviar</button>
                </div>

                <div className="option-box">
                    <span>Já tem uma conta? <button onClick={changeLogged}>Entrar</button></span>
                </div>
            </form>
        </div>
        }

        {logged &&
        <div className="form-container">

        <div className="imagem">
            <img onClick={click} src="./src/assets/close.png"/>
        </div>

        <h1>Entrar</h1>
            <form>
                <div className="fields">
                    <label>Email:</label><br/>
                    <input type="email"/>
                </div>

                <div className="fields">
                    <label>Senha:</label><br/>
                    <input type="password"/>
                </div>

                <div className="btn-submit">
                    <button type="submit">Entrar</button>
                </div>

                <div className="option-box">
                    <span>Não tem uma conta? <button onClick={changeSetLogged}>Cadastre-se</button></span>
                </div>
            </form>
        </div>
        }
    </C.Container>
    )
}