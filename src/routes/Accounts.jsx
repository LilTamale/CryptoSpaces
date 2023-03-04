 import React from 'react'
import SavedCoin from '../components/SavedCoin'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom' 

 export const Account = () => {
   const {user, logout} = UserAuth();
   const navigate = useNavigate();
   
   const handleSignOut = async () => {
     try { 
        await logout()
        navigate('/')
     } catch (e) {
        console.log(e.message)
     }

 
   return (
     <div className='max-w-[1140px] mx-auto'>
       <div className='flex justify-between items-center my-12 py-8 border-b rounded-xl shadow-xl'>
         <div>
           <h1 className='text-2xl font-bold'>Account</h1>
           <div>
             <p>Welcome, {user?.email}</p>
           </div>
         </div>
         <div>
           <button onClick = {handleSignOut} className='border rounded-2xl px-6 py-2 shadow-lg hover:shadow-2xl'>Sign Out</button>
         </div>
       </div>
       <div className='flex justify-between items-center my-12 py-8 '>
         <div className='w-full min-h-[300px]'>
           <h1 className='text-2xl font-bold py-4'>Watch List</h1>
           <SavedCoin />
         </div>
       </div>
     </div>
   )
 }
}