import React, { useState } from 'react';
import s from './Users.module.css';
import common from '../common/CommonStyles.module.css';

type PagintorPropsType = {
  totalCount: number;
  changePage: (item: number) => void;
  pageSize?: number;
  currentPage?: number;
};

const Pagintor: React.FC<PagintorPropsType> = ({
  totalCount,
  changePage,
  pageSize = 10,
  currentPage = 1,
}) => {
  const pageCount = Math.ceil(totalCount / pageSize);
  const [currentProtion, setCurrentPortion] = useState(
    Math.ceil(currentPage / pageSize)
  );
  const pages = [] as Array<number>;
  const portionCount = (currentProtion - 1) * pageSize + 1;
  const pageView =
    pageCount < portionCount + pageSize
      ? pageCount
      : pageSize + portionCount - 1;
  for (let i = portionCount; i <= pageView; i += 1) {
    pages.push(i);
  }
  return (
    <div className={s.paginatorWrp}>
      {portionCount > 1 && (
        <button
          type="button"
          className={`${common.btn} ${s.btn}`}
          onClick={() => {
            setCurrentPortion(currentProtion - 1);
          }}
        >
          Preview
        </button>
      )}
      {pages.map((item) => {
        return (
          <button
            type="button"
            onClick={() => {
              changePage(item);
            }}
            className={currentPage === item && s.active}
            key={item}
          >
            {item}
          </button>
        );
      })}
      {portionCount < pageCount - pageSize && (
        <button
          type="button"
          className={`${common.btn} ${s.btn}`}
          onClick={() => {
            setCurrentPortion(currentProtion + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagintor;
