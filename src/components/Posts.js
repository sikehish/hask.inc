import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import { db } from '../firebase';

export default function Posts() {

    function Mailto({email,children}) {
        return (
          <a href={`mailto:${email}`}>
            Email: {children}
          </a>
        );
      }

    const[data,setData]=useState([]);
    const[option, setOption]=useState('all')
      const  {isLogged,user,login,signup,logout,funcLogIn,funcLogOut} = useAuth()

    const getMarker=useCallback(
    async ()=> {
        // console.log(snapshot.docs.forEach(doc=>console.log(doc)))
        if(option==='all')
        {
            const snapshot = await db.collection('users').get()
             setData(snapshot.docs.map(doc => doc.data()));
        }
        else if(option==='my'){
                const getData = await db.collection('users').where('email', '==', user.email).get()
                setData(getData.docs.map(doc => doc.data()));
                // setData(getData);
               } 
        },
   [option]
 )
 
    useEffect(()=> {
         getMarker();
        // console.log(data)
    },[getMarker])


  return (
    <div>
        {!user && <h3><Link to='/signup'>Sign Up</Link> to view posts</h3>}
        {user && (<select onChange={(e)=>setOption(e.target.value)}>
            <option value='all'>Show All Posts</option>
            <option value='my'>Show My Posts</option>
            </select>)}
        {user && data && data.map(doc=>(
                <div className='card' key={Math.random()}>
                    <div className='card-body'>
                        <h2>{doc.title}</h2>
                        <p>{doc.description}</p>
                        <Mailto email={doc.email}>
                        {doc.email}
                        </Mailto>
                    </div>
                </div>
            ))}
    </div>
  )
}
