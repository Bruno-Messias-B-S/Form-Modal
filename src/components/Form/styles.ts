import styled from 'styled-components';

export const Container = styled.div`
    border:1px solid black;
    border-radius:7px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;

    h1 {
        border-bottom:1px solid white;
        padding:10px;
        color:white;
        width:80%;
        text-align:center;
        margin:0px auto;
        margin-bottom:20px;
    }

    .imagem {
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    img {
        width:30px;
        margin-top:15px;
        margin-bottom:-15px;
        cursor:pointer;
    }

    .form-container {
        width:350px;
        height:550px;
        margin-top:-20px;
        color:white;
        margin:auto;
        border:1px solid white;
        border-radius:7px;
    }

    input {
        width:98.5%;
        border-radius:5px;
        border:none;
        height:25px;
        margin-top:10px;
        padding:5px;
        font-size:15px;
    }

    .fields {
        margin:10px 20px;
    }

    .btn-submit {
        width:100%;
        display:flex;
        justify-content:center;
        margin-top:30px;

        button {
            width:80%;
            padding:7px 10px;
            border-radius:5px;
            background-color:transparent;
            border:1px solid white;
            font-size:15px;
            color:white;
            cursor:pointer;
            transition:0.5s ease-out;
        }

        button:hover {
            color:grey;
            border:1px solid grey;
        }
    }

    .option-box {
        width:98.5%;
        margin:0px 20px;
        margin-top:20px;
    }

    .option-box {
        button {
            background-color:transparent;
            border:none;
            padding:2px;
            font-size:15px;
            cursor:pointer;
            transition:0.5s ease-out;
            color:grey;
            border-bottom:1px solid grey;
        }

        button:hover {
            border-bottom:1px solid white;
            color:white;
        }
    }

    .error-message {
        color:red;
        margin:5px 0px;
    }

    @media (max-width:700px) {
        .form-container {
            width:300px;
            height:550px;
        }
    }
`;