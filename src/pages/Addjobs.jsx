import React from 'react'
// import {useState,useEffect} from 'react'
import { useParams,useLoaderData } from 'react-router-dom';
// import Spinner from '../components/Spinner';

const Addjobs = () => {
    const { id } = useParams();
    const job=useLoaderData()
    // const [job,setJob]=useState(null);
    // const [loading,setLoading] = useState(true)

    // useEffect(() =>{
    //     const fetchJob=async () =>{
    //         try{
    //             const res=await fetch(`/api/jobs/${id}`)
    //             const data=await res.json();
    //             setJob(data)
    //           }catch(error){
    //             console.log('Error fetching data',error)
    //           }finally{
    //             setLoading(false)
    //           }
    //     }
    //     fetchJob()
    // }, [])
  
    return  (
        <h1>{job.title}</h1>
    )

    
}
const jobLoader= async ({params}) => {
    const res=await fetch(`/api/jobs/${params.id}`)
    const data= await res.json();
    return data;
}


export { Addjobs as default, jobLoader}