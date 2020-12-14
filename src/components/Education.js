import React, {useState} from 'react'
import uniqid from 'uniqid'

const Education = () => {
    const [university, setUniversity] = useState('')
    const [qualification, setQualification] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [studyingNowState, setStudyingNowState] = useState(false)
    const [endDateClassName, setEndDateClassName] = useState('')
    const [numberOfQualifications, setNumberOfQualifications] = useState(0)
    const [qualificationArray, setQualificationArray] = useState([])
        
    const updateUniversityInformation = (e) => {
        setUniversity(e.target.value)
    }

    const updateQualificationInformation = (e) => {
        setQualification(e.target.value8)
    }

    const updateStartDate = (e) => {
        setStartDate(e.target.value)
    }

    const updateEndDate = (e) => {
        setEndDate(e.target.value)
    }

    const checkStudyingStatus = () => {
        let studyingNow
        if(studyingNowState){
            studyingNow = true
        } else {
            studyingNow = false
        }
        return studyingNow
    }

    const updateStudyingStatus = () => {
        let studyingNow = checkStudyingStatus()
        if(studyingNow){
            setStudyingNowState(false)
            setEndDateClassName('endDate')
        } else {
            setStudyingNowState(true)
            setEndDateClassName('disabledEndDate')
            }
    }

    const submitEducationInformation = (e) => {
        e.preventDefault()
        let endDateDisplay
        if(endDate === ''){
            endDateDisplay = 'ongoing'
        } else {
            endDateDisplay = endDate
        }
        let newQualification = {
            university: university,
            qualification: qualification,
            startDate: startDate,
            endDate: endDateDisplay
        }
        setQualificationArray(qualificationArray.concat(newQualification))
        setUniversity('')
        setQualification('')
        setStartDate('')
        setEndDate('')
        setNumberOfQualifications(numberOfQualifications+1)
    }
    
    const deleteQualification = (e) => {
        e = parseInt(e)
        let array1 = qualificationArray.slice(0, e)
        let array2 = qualificationArray.slice(e+1, qualificationArray.length)
        let finalArray = array1.concat(array2)
        setQualificationArray(finalArray)
        setNumberOfQualifications(numberOfQualifications-1)
    }
    
 
    let educationInputClassName
    let maxQualificationsWarning
    let submittedThreeQualifications
    if(numberOfQualifications > 2){
        educationInputClassName = 'educationInputHidden'
        maxQualificationsWarning = 'maxQualificationsWarning'
        submittedThreeQualifications = true
    } else {
        educationInputClassName = 'educationInput'
        maxQualificationsWarning = 'maxQualificationsWarningHidden'
        submittedThreeQualifications = false
    }

    return(
        <div className='educationContainer'>
            <div className={educationInputClassName}>
                <div id='switchContainer'>
                    <div className='switchText'>
                        <p>Still Studying?</p>
                    </div>
                    <div className="switch">
                        <label >
                        <input type="checkbox"
                        onChange={updateStudyingStatus}
                        ></input>
                        <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            <h3>Education Details</h3>
                <form>
                    <div class="form-group">
                        <label for="university">University Name</label>
                        <input type="text" 
                            class="form-control" 
                            id="university"
                            placeholder={university}
                            value={university}
                            onChange={e => updateUniversityInformation(e)}
                        ></input>
                    </div>
                    <div class="form-group">
                        <label for="qualification">Qualification</label>
                        <input type="text" 
                            class="form-control" 
                            id="qualification"
                            placeholder={qualification}
                            value={qualification}
                            onChange={e => updateQualificationInformation(e)}
                        ></input>
                    </div>
                    <div class="form-group">
                        <label for="startDate">Started</label>
                        <input type="date" 
                            class="form-control" 
                            id="startDate"
                            placeholder={startDate}
                            value={startDate}
                            onChange={e => updateStartDate(e)}
                        ></input>
                    </div>
                    <div class="form-group">
                        <label for="endDate">Finished</label>
                        <input type="date" 
                            class="form-control" 
                            id={endDateClassName}
                            placeholder={endDate}
                            value={endDate}
                            disabled={studyingNowState}
                            onChange={e => updateEndDate(e)}
                        ></input> 
                    </div>
                    <button className='btn btn-primary' 
                            onClick={submitEducationInformation}
                            disabled={submittedThreeQualifications}
                            >Save</button>
                </form>
            </div>

            <div className={maxQualificationsWarning}>
                <h2>MAXIMUM 3</h2>
            </div>
                
            <div className='educationDisplay'>
                <div className='qualificationsContainer'>
                    {qualificationArray.map((qualification, i) => {
                        return <div key={uniqid()} className='qualificationContainer'>
                                <div className='qualificationDisplayLeft'>
                                    <div className='universityNameDisplay'> 
                                        {i+1}. {qualification.university} 
                                    </div>
                                    <div className='qualificationNameDisplay'>
                                        {qualification.qualification}
                                    </div>
                                    <div className='dateDisplay'>
                                        {qualification.startDate} - {qualification.endDate}
                                    </div>
                                </div>
                                <div className='qualificationDisplayRight'>
                                    <div className='qualificationButton'>
                                    <i id={i} onClick={e => deleteQualification(e.target.id)} 
                                              className="fas fa-trash">
                                    </i>
                                    </div>
                                </div>
                            </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Education