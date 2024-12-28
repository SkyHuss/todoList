import { Close } from '@mui/icons-material';
import { PropsWithChildren, useEffect, useState } from 'react'
import { createPortal } from 'react-dom';
import { ModalPosition } from '../../../constants/Modal'
import './Modal.css'

interface Props {
    position?: ModalPosition,
    title?: string;
    closeModal: () => void
}

export default function Modal(props: PropsWithChildren<Props>) {

    const [showContent, setShowContent] = useState(false);
    const [, setDomReady] = useState(false);

    const appContainerDiv = document.getElementById('app-container');

    //On open
    useEffect(() => {
        setShowContent(true);
    }, []);

    useEffect(() => {
        setDomReady(true);
    }, []);

    return createPortal(
        <div className={`modal-background ${props.position ? props.position : 'center'}`}>
            <div id="modal" className={`modal-container ${showContent ? 'show-modal' : ''}`}>
                <div className="header">
                    <div className="title">{props.title}</div>
                    <div className="close-modal-button" onClick={props.closeModal}>
                        <Close />
                    </div>
                </div>
                {props.children}
            </div>
        </div>,
        appContainerDiv!
    );
}