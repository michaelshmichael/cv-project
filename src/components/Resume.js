import React from 'react'
import Personal from './Personal.js'
import PersonalData from './PersonalData.js'
import Education from './Education.js'
import Experience from './Experience.js'

class Resume extends React.Component {
    constructor() {
        super()
    }

    
    render(){
        

        return(
            <div className='resumeContainerdisplay'>
                <div className='personalAndEducationContainer'>
                    <Personal/>
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