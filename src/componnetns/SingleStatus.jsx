import {useState, useEffect} from 'react'
import EditStat from './EditStat';
function SingleStatus (props){
    const symptoms = props.stat.symptoms
    const [showForm, setShowForm]= useState(false)
    const handleShow = ()=>{
        setShowForm(!showForm)
    }
    useEffect(()=>{
      console.log(props.stat)
    }, [])
  return (
    <div className="status-one">
            <p className="status-line"> {props.stat.createdAt.split('T')[0]} {props.stat?.name || 'Anonymous'} Feelings : {symptoms.feelings} Worries : {symptoms.worries} Troubles : {symptoms.troubles} Fears : {symptoms.fears}</p>
            <p>{props.stat?.description || 'No Description'}</p>
            <div className="btn-box">
              <button className="btn btn-min btn-red" onClick={()=>props.deleteStatus(props.stat._id)}>delete</button>
              <button className="btn btn-min " onClick={handleShow}>Edit?</button>
            </div>
  
       {showForm && <EditStat editStat={props.editStat} symptoms={symptoms} stat={props.stat} handleShow={handleShow}/>}
    </div>
  )
}
export default SingleStatus;