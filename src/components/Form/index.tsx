import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import * as C from './styles';

interface IFormInputs {
    nome: string,
    email: string,
    password: string
};

const validationPost = yup.object({
    nome: yup.string().required('O nome é obrigatório').max(15),
    email: yup.string().required('O e-mail é obrigatório'),
    password: yup.string().required('A senha é obrigatória').min(8, 'A senha tem que ter no mínimo 8 caracteres')
});

type Props = {
    click: () => void;
};

export const Form = ({ click }: Props) => {
    const [logged, setLogged] = useState(false)

    const changeLogged = () => {
        setLogged(true)
    }

    const changeSetLogged = () => {
        setLogged(false)
    }

    const sendInfos = () => {
        console.log(validationPost.__inputType)
    }

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(validationPost)
    });
    const onSubmit = (data: IFormInputs) => console.log(data);

    return (        
    <C.Container>
        {!logged &&
        <div className="form-container">
        
        <div className="imagem">
            <img onClick={click} src="./src/assets/close.png"/>
        </div>

        <h1>Cadastrar</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="fields">
                    <label>Nome:</label><br/>
                    <input {...register('nome')} name="nome" type="text"/>
                    <p className="error-message">{errors.nome?.message}</p>
                </div>

                <div className="fields">
                    <label>Email:</label><br/>
                    <input {...register('email')} name="email" type="email"/>
                    <p className="error-message">{errors.email?.message}</p>
                </div>

                <div className="fields">
                    <label>Senha:</label><br/>
                    <input {...register('password')} name="password" type="password"/>
                    <p className="error-message">{errors.password?.message}</p>
                </div>

                <div className="btn-submit">
                    <button onClick={sendInfos}>Enviar</button>
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="fields">
                    <label>Email:</label><br/>
                    <input {...register('email')} name="email" type="email"/>
                    <p className="error-message">{errors.email?.message}</p>
                </div>

                <div className="fields">
                    <label>Senha:</label><br/>
                    <input {...register('password')} name="password" type="password"/>
                    <p className="error-message">{errors.password?.message}</p>
                </div>

                <div className="btn-submit">
                    <button>Entrar</button>
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