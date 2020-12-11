import React from 'react'

class Personal extends React.Component {
    constructor (props) {
        super(props)
    }

    render(){
        return(
        <div className='personalContainer'>
            <h3>Personal Details</h3>
            <form className='personalInputForm'>
                <div class="form-group">
                    <label for="firstNameInput">First Name</label>
                    <input type="text" 
                        class="form-control" 
                        id="firstNameInput" 
                        value={this.props.name}
                        onChange={e => this.props.updateInputName(e)}
                    ></input>
                </div>
                <div class="form-group">
                    <label for="surnameInput">Surname</label>
                    <input type="text" 
                        class="form-control" 
                        id="surnameInput"
                        value={this.props.surname}
                        onChange={e => this.props.updateInputSurname(e)}
                    ></input>
                </div>
                <div class="form-group">
                    <label for="occupationInput">Occupation</label>
                    <input type="text" class="form-control" id="occupationInput"></input>
                </div>
                <div class="form-group">
                    <label for="emailInput">Email</label>
                    <input type="email" class="form-control" id="emailInput"></input>
                </div>
                <button className='btn btn-primary' onClick={this.props.submitPersonalInfo}>Save</button>
            </form>
        </div>
        )
    }
}

export default Personal