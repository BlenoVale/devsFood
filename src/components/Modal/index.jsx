import React from "react";
import * as C from './styled';

export const Modal = ({ status, setStatus, children }) => {

    const handleModalClick = (e) => {
        if (e.target.classList.contains('modalBg')) {
            setStatus(false);
        }
    }

    return (
        <C.Container
            className="modalBg"
            status={status}
            onClick={handleModalClick}>
            <C.ModalBody>
                {children}
            </C.ModalBody>
        </C.Container>
    );
}