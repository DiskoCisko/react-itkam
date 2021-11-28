import React, {useState} from 'react';
import s from './Users.module.css';

const Pagintor = ({totalCount, pageSize = 10, changePage, currentPage}) => {
    let pageCount = (Math.ceil(totalCount/(pageSize)));
    const [currentProtion, setCurrentPortion] = useState(Math.ceil(currentPage/(pageSize)));
    let pages = []
    let portionCount = ((currentProtion - 1)*pageSize) + 1
    let pageView = (pageCount < (portionCount + pageSize))?pageCount:(pageSize + portionCount - 1)
    for (let i = portionCount; i <= pageView; i++) {
        pages.push(i)
    }
    return <>
    {(portionCount > 1)&&<button onClick={()=>{setCurrentPortion(currentProtion - 1)}}>Preview</button>}
    {pages.map(item => {
        return <span 
            onClick={()=>{changePage(item)}}
            className={currentPage == item&&s.active}
        >
            {item}
        </span>
    })}
    {(portionCount < (pageCount - pageSize))&&<button onClick={()=>{setCurrentPortion(currentProtion + 1)}}>Next</button>}
 </>
}

export default Pagintor;