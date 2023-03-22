import './App.css';
import './css/Layout.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './Detail.jsx'
import Cart from './page/cart/Cart.jsx'
import {Button,Navbar,Container,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Visual from './section/Visual.jsx'
import HeaderNav from './header/navbar.jsx'
import Main from './page/Main.jsx'


function App() {
  let [goods,setGoods]=useState([])
  //장바구니 표시
  const [cart,setCart]=useState([]);//배열로 만들어준다
  const [checkList,setCheckList]=useState([])
  let {id} = useParams();
  let navigate = useNavigate()
  return (
    <>
    <HeaderNav cart={cart}/>
     <Routes>
      <Route path="/" element={
        <>
          <Visual/><br/><br/><br/>
         <Main goods={goods} setGoods={setGoods}/>
        </>
        }/>
      <Route path="/detail/:id" element={
        <Detail cart={cart} setCart={setCart}/>
        }></Route>
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart}
      checkList={checkList} setCheckList={setCheckList}
      />
    }></Route>
      <Route path="*" element={ <div>404 form</div> } />
     </Routes>
    </>
  );
}


export default App;


