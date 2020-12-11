import React from 'react'
import Personal from './Personal.js'
import Education from './Education.js'
import Experience from './Experience.js'

class Resume extends React.Component {
    constructor() {
        super()
        this.updateInputName.bind(this)
        this.updateInputSurname.bind(this)
        this.state = {
            name: '',
            surname: '',
        }
    }

    updateInputName = (e) => {
        this.setState({
            name: e.target.value
        })
        console.log(this.state.name)
    }

    updateInputSurname = (e) => {
        this.setState({
            surname: e.target.value
        })
        console.log(this.state.surname)
    }

    submitPersonalInfo = () => {
        
    }

    render(){
        const {name, surname} = this.state
        return(
            <div className='resumeContainer'>
                <div className='personalAndEducationContainer'>
                    <Personal updateInputName={this.updateInputName}
                              updateInputSurname={this.updateInputSurname} 
                              name={name}
                              surname={surname}
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