import React from "react";
import * as C from './styled';
import { useLocation, useNavigate } from "react-router-dom";

export const MenuItem = ({title, icon, link }) => {
    const navigate = useNavigate();
    const location = useLocation();

    let isActive = location.pathname == link;

    const handleLinkClick = (e) => {
        e.preventDefault();
        navigate(link);
    }

    return (
        <C.LinkArea data-tooltip-content={title} id="tip-right" active={isActive} href={link} onClick={handleLinkClick}>
            <C.LinkIcon src={icon} />
        </C.LinkArea>
    );
}