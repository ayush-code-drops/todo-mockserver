import React, { useState } from 'react'
import styles from "./style.module.css"
function TodoInput({onClick}) {
    const [query, setQuery] = useState("")
    
  return (
      <div className={styles.inputdiv}>
          <input type='text'
              placeholder='Add Something'
              onChange={(e) => setQuery(e.target.value)}
              value={query} />
          <button className={styles.btn}  onClick={()=>onClick(query)}>Add</button>
    </div>
  )
}

export default TodoInput