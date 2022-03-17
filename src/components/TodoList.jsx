import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'

import styles from './style.module.css'
function TodoList({items}) {
  const [page,setPage]=useState(1)
    
  const handlePagination = (idx)=>{
      setPage(idx)
  }
  
  let perPage = 3;
  
    let end = page * perPage - 1;
    let start = perPage*(page - 1);
//console.log('items',items,end,start,page);
    let paginatedResult = items.filter((_, i) => i >= start && i <= end)
    console.log(paginatedResult);
  return (
    <div className={styles.list}>
      {paginatedResult?.map((item) => <li className={styles.item} key={item.id}>Task: {item.title} <br></br>Status: {item.status == true ? 'Done' : 'Not Done'}</li>)}  
      
      <Pagination total={5} currentpage={page} onClick={handlePagination}/>
    </div>
  )
}

export default TodoList