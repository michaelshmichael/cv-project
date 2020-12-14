import React, {useState} from 'react'

const Personal = () => {
    const [editing, setEditing] = useState(true)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [occupation, setOccupation] = useState('')
    const [email, setEmail] = useState('')

    const updateInputName = (e) => {
        setName(e.target.value)
    }

    const updateInputSurname = (e) => {
        setSurname(e.target.value)
    }

    const updateOccupation = (e) => {
        setOccupation(e.target.value)
    }

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleValidation = () => {
        let validForm
        if(name === '' 
            || surname === ''
            || occupation === ''
            || email === ''){
            validForm = false
        } else {
            validForm = true
        }
        return validForm
    }

    const submitPersonalInfo = (e) => {
        e.preventDefault()
        let validForm = handleValidation()
        if(validForm){
            setEditing(false)
        } else {
            alert('All fields must be complete')
        }
    }

    const editPersonalInfo = () => {
        setEditing(true)
    }

    if(editing){
        return(
        <div className='personalContainer'>
            <h3>Personal Details</h3>
            <form>
                <div class="form-group">
                    <label for="firstNameInput">First Name</label>
                    <input type="text" 
                        class="form-control" 
                        id="firstNameInput"
                        placeholder={name}
                        value={name}
                        onChange={e => updateInputName(e)}
                    ></input>
                </div>
                <div class="form-group">
                    <label for="surnameInput">Surname</label>
                    <input type="text" 
                        class="form-control" 
                        id="surnameInput"
                        placeholder={surname}
                        value={surname}
                        onChange={e => updateInputSurname(e)}
                    ></input>
                </div>
                <div class="form-group">
                    <label for="occupationInput">Occupation</label>
                    <input type="text" 
                        class="form-control" 
                        id="occupationInput"
                        placeholder={occupation}
                        value={occupation}
                        onChange={e => updateOccupation(e)}
                    ></input>
                </div>
                <div class="form-group">
                    <label for="emailInput">Email</label>
                    <input type="email" 
                        class="form-control" 
                        id="emailInput"
                        placeholder={email}
                        value={email}
                        onChange={e => updateEmail(e)}
                    ></input>
                </div>
                <button className='btn btn-primary' onClick={submitPersonalInfo}>Save</button>
            </form>
        </div>
        )
    } else {
        return(
            <div className='personalContainerSubmitted'>
                <h1>{name} {surname}</h1>
                <h2 className='displayOccupation'>{occupation}</h2>
                <hr/>
                <h4>{email}</h4>
                <button className='btn btn-warning editPersonalInfoButton' onClick={editPersonalInfo}>Edit</button>
            </div>
        )
    }
}

export default Personal