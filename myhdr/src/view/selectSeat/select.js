import Rect, { useEffect, useState, useRef } from "react";
import empty from "../../img/empty.png";
import select from "../../img/select.png";
import selected from "../../img/selected.png";
import "../../sass/home/select/select.scss";
import img from "../../img/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import data from "./data.js";
import Search from "antd/lib/transfer/search";
function Select() {
    const [list, setList] = useState([
        { x: 0, y: 0, flag: true },
        { x: 0, y: 1, flag: true },
        { x: 0, y: 2, flag: true },
        { x: 0, y: 3, flag: true },
        { x: 0, y: 4, flag: true },
        { x: 0, y: 5, flag: true },
        { x: 0, y: 6, flag: true },
        { x: 0, y: 7, flag: true },
        { x: 0, y: 8, flag: true },
        { x: 0, y: 9, flag: true },
        { x: 1, y: 0, flag: true },
        { x: 1, y: 1, flag: true },
        { x: 1, y: 2, flag: true },
        { x: 1, y: 3, flag: true },
        { x: 1, y: 4, flag: true },
        { x: 1, y: 5, flag: true },
        { x: 1, y: 6, flag: true },
        { x: 1, y: 7, flag: true },
        { x: 1, y: 8, flag: true },
        { x: 1, y: 9, flag: true },
        { x: 2, y: 0, flag: true },
        { x: 2, y: 1, flag: true },
        { x: 2, y: 2, flag: true },
        { x: 2, y: 3, flag: true },
        { x: 2, y: 4, flag: true },
        { x: 2, y: 5, flag: true },
        { x: 2, y: 6, flag: true },
        { x: 2, y: 7, flag: true },
        { x: 2, y: 8, flag: true },
        { x: 2, y: 9, flag: true },
        { x: 3, y: 0, flag: true },
        { x: 3, y: 1, flag: true },
        { x: 3, y: 2, flag: true },
        { x: 3, y: 3, flag: true },
        { x: 3, y: 4, flag: true },
        { x: 3, y: 5, flag: true },
        { x: 3, y: 6, flag: true },
        { x: 3, y: 7, flag: true },
        { x: 3, y: 8, flag: true },
        { x: 3, y: 9, flag: true },
        { x: 4, y: 0, flag: true },
        { x: 4, y: 1, flag: true },
        { x: 4, y: 2, flag: true },
        { x: 4, y: 3, flag: true },
        { x: 4, y: 4, flag: true },
        { x: 4, y: 5, flag: true },
        { x: 4, y: 6, flag: true },
        { x: 4, y: 7, flag: true },
        { x: 4, y: 8, flag: true },
        { x: 4, y: 9, flag: true }
    ]);
    const [seat, setSeat] = useState([])
    const change = useRef();
    // console.log("11",seat);
    let math = 2;
    function selectedS() {
        if (list !== []) {
            return list.map((item, index) => {
                if ((item.x === math && item.y === math) || (item.x === math && item.y === math + 1)
                    || (item.x === math + 1 && item.y === math + 1) || (item.x === math + 1 && item.y === math + math)) {
                    return (
                        <img src={selected} key={index} />
                    )
                } else {
                    return (
                        item.flag ? <img src={empty} key={index} onClick={xtiket.bind(null, index)} /> :
                            <img src={select} key={index} onClick={xtiket.bind(null, index)} />
                    )
                }
            })
        }


    }
    function xtiket(index) {
        const newList = [...list];
        // console.log(change);
        if (!seat.includes(newList[index]) && newList[index].flag == true) {
            seat.push(newList[index]);
            newList[index].flag = !newList[index].flag;
            if(seat.length>6){
                alert('??????????????????6???');
                return ;
            }
        }else {
            newList[index].flag = !newList[index].flag
            seat.forEach((item,index )=> {
                console.log(index,item);
                if (item.flag==true) {
                    seat.splice(index,1)
                }
            })

        }

        setList(newList);
    }
    //??????
    function xTiket(){
        if(seat.length===0){
            return (
            <div>
                 <p className="xp">???????????????????????????50?????????</p>
                 <p style={{ marginLeft: '70px' }}>???<span className="c">????????????</span>?????????????????????</p>
                 <p>?????????<span className="c">???<span className="c" style={{ fontSize: '24px' }}>0</span></span></p>
            </div>
        )
        }else{
            // change.current.style.backgroundColor="#f03d37";
            return seat.map((item,index)=>{
                return (
                     
                        <span className="t" key={index}>{item.x+1}???{item.y+1}???</span>
                      
                )
            })
        }
        
    }
    return (
        <div >
            <div className="sbox">
                <div className="sleft">
                    <div className="stop">
                        <div><img src={empty} />????????????</div>
                        <div><img src={select} />????????????</div>
                        <div><img src={selected} />????????????</div>
                    </div>
                    <div className="screen">
                        <div className="ct">????????????</div>
                    </div>
                    <div className="srows">
                        <div className="row">1</div>
                        <div className="row">2</div>
                        <div className="row">3</div>
                        <div className="row">4</div>
                        <div className="row">5</div>
                    </div>
                    <div className="seat">
                        {
                            selectedS()
                        }
                    </div>
                </div>
                <div className="sright">
                    <div className="rtop" style={{ display: 'flex' }}>
                        <div className="ibox"><img src={img} style={{ width: '115px', height: '158px' }} /></div>
                        <div className="text">
                            <p className="title">??????A??????????????????????????????</p>
                            <div>
                                <span className="r">?????????</span>
                                <span className="l">??????</span>
                            </div>
                            <div>
                                <span className="r">?????????</span>
                                <span className="l">??????</span>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <span className="r">?????????</span>
                            <span className="l">??????</span>
                        </div>
                        <div>
                            <span className="r">?????????</span>
                            <span className="l">??????</span>
                        </div>
                        <div>
                            <span className="r">?????????</span>
                            <span className="l">??????</span>
                        </div>
                        <div>
                            <span className="r">?????????</span>
                            <span className="rl">??????</span>
                        </div>
                        <div>
                            <span className="r">?????????</span>
                            <span className="l">???28.5/???</span>
                        </div>
                    </div>
                    <div className="tiketInfo">
                    {
                        seat.length===0?xTiket():
                        <div className="xTiket">
                         <span className="xp">?????????{xTiket()}</span>
                         <p>?????????<span className="c">???<span className="c" style={{ fontSize: '24px' }}>{seat.length*29.5}</span></span></p>
                        </div>
                       
                    }
                </div>
                   
                    
                    <div className="ok">
                        <Link to={{ pathname: '/' }}><div className="isOk" style={{backgroundColor:seat.length==0?"#dedede":"#f03d37"}}>????????????</div></Link>
                    </div>
                </div>
            </div>
            <div className="myBooking">
                    <div className="name">????????????</div>
                    <div className="Info">
                        <div className="Iheader">
                            <span className="orderT">2022-07-04</span><span className="orderN">????????????22222222</span>
                        </div>
                        <div className="odrerInfo" style={{display:'flex'}}>
                            <div>
                                <div><img src={img} className="timg"/></div>
                            </div>
                            <div style={{marginLeft:'20px',width:'400px'}}>
                                <div className="Tcontent">??????????????????</div>
                                <div className="zw">339??????</div>
                                <div className="zw">7?????? ??????</div>
                                <div className="sj">??????</div>
                            </div>
                            <div className="dj">????????????29.5</div>
                            <div className="zj" style={{marginLeft:'150px'}}>????????????29.5</div>
                        </div>
                    </div>


            </div>
        </div>
    )
}
export default Select;