import React from 'react'
import { useEffect, useState } from 'react'
import { getuser,deleteUser } from '../service/Api'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Container,Card} from 'react-bootstrap'
export const AllUser = () => {
  
  const [user,setUser]=useState([])

    useEffect(()=>{
      getalluser()
    },[])

  

  const getalluser= async()=>{
     const response=await getuser()
     console.log(response.data);
     setUser(await response.data)
  }
  const deleteuserdata= async (id)=>{
    await deleteUser(id)
    getalluser()
  }
  return (
    <div>
     
      <h1>User Details</h1>
   
    
         <Table striped bordered hover>
      <thead style={{background:"blueviolet",color:"white"}}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>City</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody style={{background:"aquamarine"}}>
        {user.map((data)=>(
          <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.phone}</td>
          <td>{data.city}</td>
          <td><Link to={`/edit-user/${data.id}`}><Button variant="primary">Edit</Button></Link></td>
          <td><Button onClick={()=>deleteuserdata(data.id)} variant="danger">Delete</Button></td>
        </tr>
        ))}
      </tbody>
      </Table>
     
 </div>
  )
}
