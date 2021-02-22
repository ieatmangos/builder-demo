import React from 'react'
import {EditMyData} from '../edit'
const useMyData = (id, defaults, ) => {
  const { setEditMyData } = React.useContext(EditMyData);
  React.useEffect(()=>{
      const obj = { id, defaults };
      setEditMyData((c) => [...c, obj]);
  },[id, defaults, setEditMyData])
  return null
}
export default useMyData