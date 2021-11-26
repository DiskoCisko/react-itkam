import React from 'react';
import s from './Users.module.css';

const Pagintor = ({totalCount, pageSize, changePage, currentPage}) => {
    let pageCount = Math.ceil(totalCount/(pageSize*100))
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <>
    {pages.map(item => {
        return <span 
            onClick={()=>{changePage(item)}}
            className={currentPage == item&&s.active}
        >
            {item}
        </span>
    })}
 </>
}

export default Pagintor;