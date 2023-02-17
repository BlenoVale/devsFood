import React from "react";
import * as C from './styled';

export const CategoryItem = ({ data, activeCategory, setActiveCategory }) => {

    const handleCategoryClick = () => {
        setActiveCategory(data.id);
    }
    return (
        <C.Container
            active={activeCategory}
            index={data.id}
            onClick={handleCategoryClick}
            data-tooltip-content={data.name} 
            id="tip-top"
        >
            <C.CatgegoryImage src={data.image} />
        </C.Container>
    );
}