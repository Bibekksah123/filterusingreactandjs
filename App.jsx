
import { useState } from 'react';
import './App.css'
import { data } from './components/data';
function App() {
 const [searchs, setsearch] = useState('')
 const search=(e)=>{
setsearch(e.target.value)
 }

  return (
    <>
    <input type="text" placeholder='enter you id' onChange={search} value={searchs}/>
    {data.filter((item)=>{return searchs.toLowerCase()==''?item:item.first_name.toLowerCase().includes(searchs)}).map((datas)=>(
    <div className="container">
      <h2>{datas.id}
      </h2>
      <h3>{datas.first_name}</h3>
      <h4>{datas.last_name}</h4>
      <h4>{datas.email}</h4>
      <h5>{datas.phone}</h5>
    </div>
))}
  </>
  )
}

export default App
