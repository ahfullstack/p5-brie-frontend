import React from 'react'

const NewForm = (props) => {
    const nums = [1,2,3,4,5]
    const handleSumbit = (e)=>{
        e.preventDefault()
        props.makeNewForm(props.newForm, props.symptoms)
        props.handleShow()
    }
  return (
    <div>
        <button className="btn btn-min" onClick={props.handleShow}>hide</button>
        <form onSubmit={handleSumbit} className="form-section">
            <div className="form-grid">
                <div className="btn-select">
                <label className="" htmlFor="feelings">Feelings</label>
                    <select 
                name="feelings"
                id=""
                required 
                value={props.symptoms.feelings}
                onChange={(e)=> props.handleSymptoms(e)}
                >
                    <option></option>
                    {nums.map((num)=>{
                        return <option key={`feelings${num}`}value={num}>{num}</option>
                    })
        
                    }
                </select>

                </div>
            <div className="btn-select">
            
            <label htmlFor="worries">Worries</label>
            <select 
            name="worries"
            id=""
            required
            value={props.symptoms.worries}
            onChange={(e)=> props.handleSymptoms(e)}
            >
                <option></option>
                {nums.map((num)=>{
                    return <option key={`worries${num}`}value={num}>{num}</option>
                })
    
                }
            </select>
            </div>
            <div className="btn-select">
            <label htmlFor='troubles'>Troubles</label>
            <select 
            name="troubles"
            id=""
            required
            value={props.symptoms.troubles}
            onChange={(e)=> props.handleSymptoms(e)}
            >
                <option></option>
                {nums.map((num)=>{
                    return <option key={`troubles${num}`}value={num}>{num}</option>
                })
    
                }
            </select>
            </div>
            <div className="btn-select">

            <label htmlFor='fears'>Fears</label>
            <select 
            name="fears"
            id=""
            required
            value={props.symptoms.fears}
            onChange={(e)=> props.handleSymptoms(e)}
            >
                <option></option>
                {nums.map((num)=>{
                    return <option key={`feelings${num}`}value={num}>{num}</option>
                })
    
                }
            </select>
            </div>
            </div>
            <br/>
            <label htmlFor="name">Name</label><br/>
            <input type="text" name="name" id="" value={props.newForm.name} onChange={(e)=>props.handleChange(e)} /><br/>

            <label htmlFor="description">Description</label><br/>
            <textarea 
            name="description" 
            id="" cols="30" rows="10" 
            value={props.newForm.description} 
            onChange={(e)=>props.handleChange(e)} 
            /><br />
            <button className="btn">Sumbit</button>

        </form>
    </div>
  )
}

export default NewForm;