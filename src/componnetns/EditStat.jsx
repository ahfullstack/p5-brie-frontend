import {useState} from 'react'

function EditStat(props) {
    const nums = [1,2,3,4,5]
    const [edit, setEdit] = useState({
        name: props.stat.name,
        description: props.stat.description,
        spymptoms: props.stat.symptoms,
        _id: props.stat._id
    })

    const [symptoms, setNewSymptoms] = useState({
        feelings: props.symptoms.feelings,
        worries: props.symptoms.worries,
        troubles: props.symptoms.troubles,
        fears: props.symptoms.fears
        })
    const handleChange =(e)=>{
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }
    const handleSymptoms = (e)=>{
        setNewSymptoms({
          ...symptoms,
          [e.target.name]: e.target.value
        })
      }
    const handleSumbit = (e)=>{
        e.preventDefault()
        props.editStat(edit, symptoms, edit._id)
        props.handleShow()
    }
  return (
    <div>
        <button className="btn btn-min" onClick={props.handleShow}>hide</button>
        <form onSubmit={handleSumbit} className="form-section">
            <label htmlFor="feelings">Feelings</label>
            <select 
            name="feelings"
            id=""
            required 
            value={symptoms.feelings}
            onChange={(e)=> handleSymptoms(e)}
            >
                <option></option>
                {nums.map((num)=>{
                    return <option key={`feelings${num}`}value={num}>{num}</option>
                })
    
                }
            </select><br />
            <label htmlFor="worries">Worries</label>
            <select 
            name="worries"
            id=""
            required
            value={symptoms.worries}
            onChange={(e)=> handleSymptoms(e)}
            >
                <option></option>
                {nums.map((num)=>{
                    return <option key={`worries${num}`}value={num}>{num}</option>
                })
    
                }
            </select><br />
            <label htmlFor='troubles'>Troubles</label>
            <select 
            name="troubles"
            id=""
            required
            value={symptoms.troubles}
            onChange={(e)=> handleSymptoms(e)}
            >
                <option></option>
                {nums.map((num)=>{
                    return <option key={`troubles${num}`}value={num}>{num}</option>
                })
    
                }
            </select><br />
            <label htmlFor='fears'>Fears</label>
            <select 
            name="fears"
            id=""
            required
            value={symptoms.fears}
            onChange={(e)=> handleSymptoms(e)}
            >
                <option></option>
                {nums.map((num)=>{
                    return <option key={`feelings${num}`}value={num}>{num}</option>
                })
    
                }
            </select><br />
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" value={edit.name} onChange={(e)=>handleChange(e)} />

            <label htmlFor="description">Description</label>
            <textarea 
            name="description" 
            id="" cols="30" rows="10" 
            value={edit.description} 
            onChange={(e)=>handleChange(e)} 
            /><br />
            <button className="btn btn-min">Sumbit</button>

        </form>
    </div>
  )
}

export default EditStat