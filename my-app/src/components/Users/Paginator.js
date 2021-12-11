import React, {useState} from 'react';
import s from './Users.module.css';
import common from './../common/CommonStyles.module.css'

const Pagintor = ({totalCount, pageSize = 10, changePage, currentPage = 1}) => {
    let pageCount = (Math.ceil(totalCount/(pageSize)));
    const [currentProtion, setCurrentPortion] = useState(Math.ceil(currentPage/(pageSize)));
    let pages = []
    let portionCount = ((currentProtion - 1)*pageSize) + 1
    let pageView = (pageCount < (portionCount + pageSize))?pageCount:(pageSize + portionCount - 1)
    for (let i = portionCount; i <= pageView; i++) {
        pages.push(i)
    }
    return <>
    {(portionCount > 1)&&<button className={`${common.btn}` +" "+ `${s.btn}`} onClick={()=>{setCurrentPortion(currentProtion - 1)}}>Preview</button>}
    {pages.map((item, index) => {
        return <span 
            onClick={()=>{changePage(item)}}
            className={currentPage === item&&s.active}
            key={index}
        >
            {item}
        </span>
    })}
    {(portionCount < (pageCount - pageSize))&&<button className={`${common.btn}` +" "+ `${s.btn}`} onClick={()=>{setCurrentPortion(currentProtion + 1)}}>Next</button>}
 </>
}

export default Pagintor;