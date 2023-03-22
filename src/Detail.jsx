import './css/Detail.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
function Detail({cart,setCart}){
  let {id} = useParams();
  const [goods,setGoods] =useState({});
  let [count,setCount] =useState(1)
  //아이디 값에 만든 값 가져오는방법
  useEffect(()=>{
      axios.get('/data/prd.json').then((data)=>{
        setGoods(data.data.products.find((prd)=>prd.id===parseInt(id)))
    })
  },[id]);
  //counter 증감 함수 
  const handleQuantity =(type)=>{
    if(type==="plus"){
      setCount(count+1)
    }else{
      if(count===1)return;
      setCount(count-1)
    }
  }
  //중복
  const setQauntity =(id,quantity)=>{
    //카트에서의 아이디값이랑 매개변수로 넘긴 아이디 값이 같은지 확인
    //필터는 무조건 new filter 처럼 새로운 값을 리턴 하기 때문에
    //{{},{},{}} 값으로 표현되기 때문에 id의  첫번째 값만 filter로 가져오기 위해[0]을추가해줌
    const found =cart.filter((el) =>el.id=== id)[0];
    //found 객체에 index값도 변수로 저장해둔다
    const idx = cart.indexOf(found);
      const cartItem ={
        id:goods.id,
        image:goods.img,
        name:goods.name,
        price:goods.price,
        subtitle:goods.subtitle,
        quantity:quantity,
      };
      //복사한 카트의 idx값 까지 삭제를 해주고 카트에 값을 다시 추가한후에 idx+1\
      //값만 수정된 새로운 값 리턴하는 방법
      setCart([...cart.slice(0,idx),cartItem,...cart.slice(idx+1)])
  };


 const handleCart =()=>{
  //내가 선택한 상품들의 정보를 카트 아이템에 넣기
    const cartItem ={
      id:goods.id,
      image:goods.img,
      name:goods.name,
      price:goods.price,
      subtitle:goods.subtitle,
      quantity:count
    };
    //기존 카트는 유지하고 새롭게 들어가는 카트를 추가한다.라는방법사용
    //카트에 있는 값중에서 중복된 값이 있다면  중복된 물건이기 때문에 
    //만약 found 라면 setQauntity 함수를 사용 +1로 변경해주고 아니라면 그냥 추가해줘
    const found = cart.find((el)=>el.id===cartItem.id);
    if(found) setQauntity(cartItem.id,found.quantity+1)
    else{
      setCart([...cart,cartItem])
    }
 };
 console.log(cart)
  return(
    goods && (
      <>
      <div id="prd_wrapper" className="row" style={{width:'80%'}}>
          <div className="prd_img col-xl-6 col-md-6 col-sm-12 col-12"><img src={goods.img}/></div>
          <div className="goods_info col-xl-6 col-md-6 col-sm-12 col-12">
            <ul>
              <li>{goods.name}</li>
              <li>{goods.subtitle}</li>
              <li>{goods.price} 원</li>
            </ul>
            <div className="totalPrice">
              <div className="count">총합계 (수량)

                <div class="plus_minus_button">
                  <div class="minus">
                      <img src="/images/icon-minus-line.svg"
                      onClick={()=>{
                        handleQuantity("minus")
                      }}
                      />
                    </div>
                  <div class="count_button">{count}</div>
                  <div class="plus">
                      <img src="/images/icon-plus-line.svg"
                        onClick={()=>{
                          handleQuantity("plus")
                        }}
                      />
                  </div>
                </div>

              </div>
              <div className="price">{goods.price*count}원 <span>({count}개)</span></div>
            </div>
            <div className="calculate">
              <div className="cart"
              onClick={()=>{
                handleCart()
              }}
              
              >장바구니</div>
              <div className="buy">구매하기</div>
            </div>
          </div>
        </div>
      </> 
   )
 )
}



const Button = styled.a`
  background-colour: teal;
  color: white;
  padding: 1rem 2rem;
`

export default Detail