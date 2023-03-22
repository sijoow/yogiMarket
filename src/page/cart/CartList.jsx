import styles from "./cart.module.css";
function CartList ({cart,handleQuantity,handleRemove,handleCheckList,checkList}){
    return(
        <section className={styles.cart_product_list}>
        <input type="checkbox" />
        <div className={styles.cart_product_wrap}>
          <div className={styles.cart_product_image}>
            <img src={cart.image} alt="product-img" />
          </div>
    
          <div className={styles.cart_product_info}>
            <p className={styles.seller_store}>{cart.name}</p>
            <p className={styles.product_name}>{cart.name}</p>
            <p className={styles.price}>{cart.price*cart.quantity}원</p>
            <p className={styles.delivery}>택배배송 / 무료배송</p>
          </div>
        </div>
    
        <div className={styles.cart_product_count}>
          <img
            className={styles.minus}
            src="/images/icon-minus-line.svg"
            alt="minus"
            onClick={()=>{
              handleQuantity("minus",cart.id,cart.quantity-1) 
            }}
          />
    
          <div className={styles.count}>
            <span>{cart.quantity}</span>
          </div>
          <img
            className={styles.plus}
            src="/images/icon-plus-line.svg"
            alt="plus"
            onClick={()=>{
              //cartList 에는 cart로 아이디가 등록외어있으니
              handleQuantity("plus",cart.id,cart.quantity+1)
            }}
          />
        </div>
    
        <div className={styles.cart_product_price}>
          <p className={styles.total_price}></p>
          <button className={styles.btn_submit}>주문하기</button>
        </div>
        <div className={styles.product_remove}
          onClick={()=>{
            handleRemove(cart.id)
          }}>
          <img src="/images/icon-delete.svg" alt="delete" />
        </div>
      </section>
    )
}
export default CartList