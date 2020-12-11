import React from 'react'

class Personal extends React.Component {
    constructor (props) {
        super(props)
    }

    render(){
        const editing = this.props.editing
        if(editing) {
            return(
            <div className='personalContainer'>
                <h3>Personal Details</h3>
                <form>
                    <div class="form-group">
                        <label for="firstNameInput">First Name</label>
                        <input type="text" 
                            class="form-control" 
                            id="firstNameInput"
                            placeholder={this.props.name}
                            value={this.props.name}
                            onChange={e => this.props.updateInputName(e)}
                        ></input>
                    </div>
                    <div class="form-group">
                        <label for="surnameInput">Surname</label>
                        <input type="text" 
                            class="form-control" 
                            id="surnameInput"
                            placeholder={this.props.surname}
                            value={this.props.surname}
                            onChange={e => this.props.updateInputSurname(e)}
                        ></input>
                    </div>
                    <div class="form-group">
                        <label for="occupationInput">Occupation</label>
                        <input type="text" 
                            class="form-control" 
                            id="occupationInput"
                            placeholder={this.props.occupation}
                            value={this.props.occupation}
                            onChange={e => this.props.updateOccupation(e)}
                        ></input>
                    </div>
                    <div class="form-group">
                        <label for="emailInput">Email</label>
                        <input type="email" 
                            class="form-control" 
                            id="emailInput"
                            placeholder={this.props.email}
                            value={this.props.email}
                            onChange={e => this.props.updateEmail(e)}
                        ></input>
                    </div>
                    <button className='btn btn-primary' onClick={this.props.submitPersonalInfo}>Save</button>
                </form>
            </div>
            )
        } else {
            return(
                <div className='personalContainerSubmitted'>
                    <h1>{this.props.name} {this.props.surname}</h1>
                    <h2 className='displayOccupation'>{this.props.occupation}</h2>
                    <hr/>
                    <h4>{this.props.email}</h4>
                    <button className='btn btn-warning editPersonalInfoButton' onClick={this.props.editPersonalInfo}>Edit</button>
                </div>
            )
        }
        
    }
}

export default Personal