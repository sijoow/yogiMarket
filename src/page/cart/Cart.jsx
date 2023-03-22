
import { useState } from 'react'
import {Table} from 'react-bootstrap'
import { useSelector,useDispatch } from "react-redux"
import CartHeader from './CartHeader.jsx'
import CartList from './CartList.jsx'
import TotlaCart from './TotlaCart.jsx'

function Cart({cart,setCart,checkList,setCheckList}){
    const[total,setTotal]=useState(0);
    //장바구니 타입으로 타입 아이디 수량을 정한다.
    //일단 내 상품이 장바구니 잇다고 해도 어떤상품인지 파악하는게 필요
    //타입/아이디값/수량 을 매개변수로 추가해준다
    const handleQuantity =(type,id,quantity)=>{
    const found = cart.filter((el)=>el.id ===id)[0];
    const idx = cart.indexOf(found);
    const cartItem={
        id:found.id,
        image:found.image,
        name:found.name,
        price:found.price,
        subtitle:found.subtitle,
        quantity:quantity,
    };
    if(type ==="plus"){
        setCart([...cart.slice(0,idx),cartItem,...cart.slice(idx+1)])
        }else{
            if(quantity===0)return;
            setCart([...cart.slice(0,idx),cartItem,...cart.slice(idx+1)])
        }
    }

  const handleRemove =(id)=>{
    // 동일하지 않은 아이디 값을 제외한 값들을 남긴다.
    setCart(cart.filter((el)=>el.id !==id));
  }

  //체크가 된 상품들에 대해서 값을 반환하는 함수 
    const found = checkList.map((checkList)=>{
        cart.filter((el)=>el.id===checkList);
    })
    return(
        <>
            <header>
                <center>
                  <h1>장바구니</h1>
                </center>
            </header>
            <CartHeader/>
            {
                cart.length ===0 ?(
               <center>
                    <h2>아무것도없어</h2>
                    <p>원하는 상품을 장바구니에 추가</p>
                </center>
                ):(
                    cart.map((cart)=>{
                        return(
                            <CartList
                            key ={`key-${cart.id}`}
                            cart ={cart}
                            handleQuantity={handleQuantity}
                            handleRemove={handleRemove}
                            checkList={checkList}
                            />                        
                    )
                    })                
                )
            }

            {cart.length ==-0? "":<TotlaCart total={total} setTotal={setTotal} cart={cart}found={found}/>}
        
        
        </>



    )
}
export default Cart