import React from 'react'
import Personal from './Personal.js'
import Education from './Education.js'
import Experience from './Experience.js'

const Resume = () => {
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

export default Resume