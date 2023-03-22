import MainPrd from './MainPrd.jsx'
import axios from "axios"
import { useEffect, useState } from "react"
function Main ({goods,setGoods}){
    useEffect(()=>{
        axios.get('/data/prd.json').then((data)=>{
            setGoods(data.data.products)
        })
    },[setGoods])
    return (
        <>
        <div class="main_title">
            <ul>
                <li>전세계가 사랑해요</li>
                <li>전세계 150개 매장에서 만나는 요기보</li>
            </ul>
        </div>
        <div className="row main-prd" style={{width:'90%',margin:'auto'}}>
            {
                goods.map((prd)=>{
                    return(
                        <MainPrd goods={prd} key={`key-${goods.id}`}/>
                    )
                })
            }
        </div>    
        </>
    )
}
export default Main