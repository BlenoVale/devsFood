import React from "react";
import './App.css';
import { Container, Menu, PageBody } from "./components/AppStyled";
import { MainRoutes } from './route/MainRoutes';

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip';

import { MenuItem } from "./components/MenuItem";
import { Cart } from "./components/Cart";


function App() {

  return (
    <Container>
      <Menu>
        <MenuItem title='Início' icon='/assets/store.png' link='/' />
        <MenuItem title='Pedidos' icon='/assets/order.png' link='/orders' />
        <MenuItem title='Perfil' icon='/assets/profile.png' link='/profile' />
      </Menu>

      <PageBody>
        <MainRoutes />
      </PageBody>

      <Cart />

      <ReactTooltip anchorId="tip-top" place="top" effect="solid"/>
      <ReactTooltip anchorId="tip-right" place="right" effect="solid"/>
    </Container>
  );
}

export default App;