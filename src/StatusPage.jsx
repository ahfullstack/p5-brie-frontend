import { useState, useEffect } from 'react';
import NewForm from './componnetns/NewForm';
import APILink from './apiConfig';
import { AllStatus } from './componnetns/AllStatus';

function StatusPage() {
  const [showForm, setShowForm]= useState(false)
  const handleShow = ()=>{
    setShowForm(!showForm)
  }
  const [status, setStatus] = useState([])
  const [newForm, setNewForm] = useState({
    symptoms: [],
    name: "",
    description: "",
  })
  const handleChange =(e)=>{
    setNewForm({
      ...newForm,
      [e.target.name]: e.target.value
    })
  }
  const [symptoms, setNewSymptoms] = useState({
    feelings: "",
    worries: "",
    troubles: '',
    fears: '',
    })
  const handleSymptoms = (e)=>{
    setNewSymptoms({
      ...symptoms,
      [e.target.name]: e.target.value
    })
  }
  const makeNewForm = async(form, symp)=>{
    form.symptoms = symp
    try {
      const request = await fetch(`${APILink}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      const response = await request.json()
      if(response.success === true){
        setStatus([response.data, ...status])
        setNewForm({
          symptoms: [],
          name: "",
          description: "",
        })
        setNewSymptoms({
          feelings: "",
          worries: "",
          troubles: '',
          fears: '',
          })
      }
    } catch (error) {
      
    }
  }
  const getStatus = async()=>{
    try {
      const request = await fetch(`${APILink}`)
      const response = await request.json()
      if(response.success === true){
        setStatus(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const deleteStatus = async(id)=>{
    try {
      const request = await fetch(`${APILink}${id}`,{
        method: "DELETE",
       })
      const response = await request.json()
      if(response.success === true){
        const newStats = status.filter((stat)=> stat._id !== id)
        setStatus(newStats)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const editStat = async(form, symp, id)=>{
    form.symptoms = [symp]
    console.log(id)
    try {
      const request = await fetch(`${APILink}${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      const response = await request.json()
      if(response.success === true){
        const newStats = status.map((stat)=> stat._id !== id ? stat : response.data)
        setStatus(newStats)
      }
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getStatus()
  }, [])
  return (
    <div className="App">
      <h1 className='heading'>Brie</h1>
      {!showForm && <button className="btn" onClick={()=>handleShow()}>Make New One</button>}
      { showForm && <NewForm  handleShow={handleShow} makeNewForm={makeNewForm} newForm={newForm} symptoms={symptoms} handleSymptoms={handleSymptoms} handleChange={handleChange}/>}
      <AllStatus deleteStatus={deleteStatus} status={status} editStat={editStat}></AllStatus>
    </div>
  );
}

export default StatusPage;