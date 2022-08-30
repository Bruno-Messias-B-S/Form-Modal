import * as C from './styles';
import ReactModal from 'react-modal';
import "../../App.css"
import { useState } from 'react';
import { Form } from '../Form/index';

ReactModal.setAppElement('#root');

export const Login = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const modalIsOpen = () => {
        setModalOpen(true)
    }

    const modalIsClose = () => {
        setModalOpen(false)
    }

    return (
        <C.Container>
            <div>
                <button onClick={modalIsOpen}>Crie Sua Conta!</button>
            </div>

        <ReactModal
            isOpen={modalOpen}
            onRequestClose={modalIsClose}
            overlayClassName="modal-overlay"
            className="modal-content"
            closeTimeoutMS={200}
        >

        <Form click={modalIsClose}/>

        </ReactModal>

        </C.Container>
    );
}