"use client";
import { useEffect, useState } from "react";

export default function Home() {

  const [myData, setMyData] = useState([])
  const [myName, setMyName] = useState("")


useEffect(() => {
  
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setMyData(data)
  }
  fetchData()

}, [])


  return (
  <>

  <input type="text" name="" id="" className="border" value={myName} onChange={(e)=>setMyName(e.target.value)}/>
  <button className="px-3 py-1 bg-red-500">search</button>
 
  {myData.filter((item)=>myName.length ===0 ? item : item.name.toLowerCase().startsWith(myName.toLowerCase()) ).map((user,index) =>{

    return <div key={index} className="flex flex-col items-center justify-center">
      
        <h1 className="text-2xl font-bold">{user.name}</h1>
        
      </div>
    

  })}
  </>
  
  );
}
