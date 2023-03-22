import { Link } from "react-router-dom";

function MainPrd({goods,setGoods}){
    return(
        <>
            <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                <Link to={`/detail/${goods.id}`}>
                    <img src={goods.img} style={{width:'100%'}}/>
                </Link>
                <h6 className="">{goods.name}</h6>
                <p className="">{goods.subtitle}</p>
                <p>{goods.price.toLocaleString()} 원</p>
            </div> 
        </>
    )
}
export default MainPrd