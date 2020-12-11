import React from 'react'
import Personal from './Personal.js'
import PersonalData from './PersonalData.js'
import Education from './Education.js'
import Experience from './Experience.js'

class Resume extends React.Component {
    constructor() {
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

    submitPersonalInfo = (e) => {
        e.preventDefault()
        this.setState({
            editing: false
        })
    }

    editPersonalInfo = () => {
        this.setState({
            editing: true
        })
    }

    render(){
        const {name, surname, editing, occupation, email} = this.state

        return(
            <div className='resumeContainerdisplay'>
                <div className='personalAndEducationContainer'>
                    <Personal updateInputName={this.updateInputName}
                              updateInputSurname={this.updateInputSurname}
                              updateOccupation={this.updateOccupation}
                              updateEmail={this.updateEmail}
                              submitPersonalInfo={this.submitPersonalInfo}
                              editPersonalInfo={this.editPersonalInfo}
                              name={name}
                              surname={surname}
                              occupation={occupation}
                              email={email}
                              editing={editing} 
                              />
                    <Education/>
                </div>
                <div className='experienceContainer'>
                    <Experience/>
                </div>
            </div>
            
        )
    }
}

export default Resume