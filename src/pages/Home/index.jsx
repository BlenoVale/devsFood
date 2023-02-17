import React, { useState, useEffect } from 'react';
import * as C from './styled';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import api from '../../helpers/api';
import { CategoryItem } from '../../components/CategoryItem';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { ProductItem } from '../../components/ProductItem';
import { Modal } from '../../components/Modal';
import { ModalProduct } from '../../components/ModalProduct';

let searchTimer = null;

export const Home = () => {
    const navigate = useNavigate();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [activePage, setActivePage] = useState(1);

    const [activeCategory, setActiveCategory] = useState(0);
    const [activeSearch, setActiveSerch] = useState('');

    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState({});

    const getProducts = async () => {
        const prods = await api.getProducts(activeCategory, activePage, activeSearch);
        try {
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.page);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            setActiveSerch(headerSearch);
        }, 2000);
    }, [headerSearch]);

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories();
            try {
                setCategories(cat.result);
            } catch (error) {
                console.log(error);
            }
        }
        getCategories();
    }, []);

    useEffect(() => {
        setProducts([]);
        getProducts();
    }, [activeCategory, activePage, activeSearch]);

    const handleProductClick = (data) => {
        setModalData(data);
        setModalStatus(true);
    }

    return (
        <C.PageArea>
            <Header search={headerSearch} onSearch={setHeaderSearch} />

            {categories.length > 0 &&
                <C.CategoryArea>
                    Selecione uma Categoria
                    <C.CategoryList>
                        <CategoryItem
                            data={{
                                id: 0,
                                title: 'Todas as Categorias',
                                image: '/assets/food-and-restaurant.png'
                            }}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                        {categories.map((item, index) => (
                            <CategoryItem
                                key={index}
                                data={item}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        ))}
                    </C.CategoryList>
                </C.CategoryArea>
            }

            {products.length > 0 &&
                <C.ProductArea>
                    <C.ProductList>
                        {products.map((item, index) => (
                            <ProductItem
                                key={index}
                                data={item}
                                onClick={handleProductClick}
                            />
                        ))}
                    </C.ProductList>
                </C.ProductArea>
            }

            {totalPages > 0 &&
                <C.ProductPaginationArea>
                    {Array(totalPages).fill(0).map((item, index) => (
                        <C.ProductPaginationItem
                            key={index}
                            active={activePage}
                            current={index + 1}
                            onClick={() => setActivePage(index + 1)}
                        >
                            {index + 1}
                        </C.ProductPaginationItem>
                    ))}
                </C.ProductPaginationArea>
            }

            <Modal status={modalStatus} setStatus={setModalStatus}>
                <ModalProduct data={modalData} setStatus={setModalStatus}/>
            </Modal>
        </C.PageArea>
    );
}