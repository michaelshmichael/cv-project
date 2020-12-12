import React from 'react'

class Personal extends React.Component {
    constructor () {
        super()
        this.updateInputName.bind(this)
        this.updateInputSurname.bind(this)
        this.updateOccupation.bind(this)
        this.updateEmail.bind(this)
        this.submitPersonalInfo.bind(this)
        this.editPersonalInfo.bind(this)
        this.state = {
            editing: true,
            name: '',
            surname: '',
            occupation: '',
            email: ''
        }
    }

    updateInputName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    updateInputSurname = (e) => {
        this.setState({
            surname: e.target.value
        })
    }

    updateOccupation = (e) => {
        this.setState({
            occupation: e.target.value
        })
    }

    updateEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleValidation = () => {
        let validForm
        if(this.state.name === '' 
            || this.state.surname === ''
            || this.state.occupation === ''
            || this.state.email === ''){
            validForm = false
        } else {
            validForm = true
        }
        return validForm
    }

    submitPersonalInfo = (e) => {
        e.preventDefault()
        let validForm = this.handleValidation()
        if(validForm){
            this.setState({
                editing: false
            })
        } else {
            alert('All fields must be complete')
        }
    }

    editPersonalInfo = () => {
        this.setState({
            editing: true
        })
    }

    render(){
        if(this.state.editing) {
            return(
            <div className='personalContainer'>
                <h3>Personal Details</h3>
                <form>
                    <div class="form-group">
                        <label for="firstNameInput">First Name</label>
                        <input type="text" 
                            class="form-control" 
                            id="firstNameInput"
                            placeholder={this.state.name}
                            value={this.state.name}
                            onChange={e => this.updateInputName(e)}
                        ></input>
                    </div>
                    <div class="form-group">
                        <label for="surnameInput">Surname</label>
                        <input type="text" 
                            class="form-control" 
                            id="surnameInput"
                            placeholder={this.state.surname}
                            value={this.state.surname}
                            onChange={e => this.updateInputSurname(e)}
                        ></input>
                    </div>
                    <div class="form-group">
                        <label for="occupationInput">Occupation</label>
                        <input type="text" 
                            class="form-control" 
                            id="occupationInput"
                            placeholder={this.state.occupation}
                            value={this.state.occupation}
                            onChange={e => this.updateOccupation(e)}
                        ></input>
                    </div>
                    <div class="form-group">
                        <label for="emailInput">Email</label>
                        <input type="email" 
                            class="form-control" 
                            id="emailInput"
                            placeholder={this.state.email}
                            value={this.state.email}
                            onChange={e => this.updateEmail(e)}
                        ></input>
                    </div>
                    <button className='btn btn-primary' onClick={this.submitPersonalInfo}>Save</button>
                </form>
            </div>
            )
        } else {
            return(
                <div className='personalContainerSubmitted'>
                    <h1>{this.state.name} {this.state.surname}</h1>
                    <h2 className='displayOccupation'>{this.state.occupation}</h2>
                    <hr/>
                    <h4>{this.state.email}</h4>
                    <button className='btn btn-warning editPersonalInfoButton' onClick={this.editPersonalInfo}>Edit</button>
                </div>
            )
        }
        
    }
}

export default Personal