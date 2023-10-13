import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDataApiAsync } from '../userSlice'


export const LoadUserData = () => {
    
    const disptach=useDispatch()

    let data=[]
    data=useSelector((state)=>state.userSlice.data)


  return (
    <>
    <button onClick={()=>disptach(getUserDataApiAsync())} style={{fontSize:"2rem",padding:"1rem"}}>fetch user data</button>


    {
        data.length===0?("click to load data")
        
        :(
            data.map((data)=>{
                return <div>
                    <button>{data.name}</button>
                </div>
            })
        )
    }

    </>


  )
}
