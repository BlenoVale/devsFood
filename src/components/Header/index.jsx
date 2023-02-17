import React, { useState } from "react";
import * as C from './styled';

export const Header = ({ search, onSearch }) => {
    const [inputActive, setInputActive] = useState(search == '' ? false : true);

    const handleInputFocus = () => {
        setInputActive(true);
    }

    const handleInputBlur = () => {
        if (search == '') {
            setInputActive(false);
        }
    }

    const handleChange = (e) => {
        onSearch(e.target.value);
    }

    return (
        <C.Container>
            <C.Logo src='/assets/logo.png' />
            <C.SearchInput
                type='text'
                value={search}
                onChange={handleChange}
                placeholder='Digite um produto'
                active={inputActive}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </C.Container>
    );
}