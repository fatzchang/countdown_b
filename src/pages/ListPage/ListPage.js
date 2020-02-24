import React, { useEffect, useState } from 'react';
import classes from './ListPage.module.css';
import { NavLink } from "react-router-dom";

import db from '../../middleware/firebase';
import Add from '../../components/Add/Add'

const ListPage = () => {
  // 撈資料
  const [list, setList] = useState([]);

  useEffect(() => {
    // 取得ts
    db.ref('/list').once('value', e => {
      const fetchedList = Object.values(e.val());

      setList(fetchedList.sort((a, b) => {
        return a.create < b.create ? -1 : 1
      }));
    });
  }, []);

  return (
    <div className={classes.ListPage}>
      {/* <nav className={classes.nav}>
      </nav> */}
      <ul className={classes.ul}>
        {list.map((item) => {
          return (
            <li className={classes.li} key={item.key}>
              <NavLink
                to={{ pathname: `/${item.key}` }}
                className={classes.link}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <Add />
    </div>
  )
}

export default ListPage;