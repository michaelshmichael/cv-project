import React from 'react'
import uniqid from 'uniqid'

class Education extends React.Component {
    constructor() {
        super()
        this.state = {
            university: '',
            qualification: '',
            startDate: '',
            endDate: '',
            studyingNow: '',
            endDateClass: '',
            numberOfQualifications: 0,
            qualificationArray: []
        }
    }

    updateUniversityInformation = (e) => {
        this.setState({
            university: e.target.value
        })
    }

    updateQualificationInformation = (e) => {
        this.setState({
            qualification: e.target.value
        })
    }

    updateStartDate = (e) => {
        this.setState({
            startDate: e.target.value
        })
    }

    updateEndDate = (e) => {
        this.setState({
            endDate: e.target.value
        })
    }

    checkStudyingStatus = () => {
        let studyingNow
        if(this.state.studyingNow){
            studyingNow = true
        } else {
            studyingNow = false
        }
        return studyingNow
    }

    updateStudyingStatus = () => {
        let studyingNow = this.checkStudyingStatus()
        if(studyingNow){
            this.setState({
                studyingNow: false,
                endDateClass: 'endDate'
            })
            
        } else {
            this.setState({
                studyingNow: true,
                endDateClass: 'disabledEndDate'
            })
            
        }
    }

    submitEducationInformation = (e) => {
        console.log(this.state.numberOfQualifications)
        e.preventDefault()
        let endDate
        if(this.state.endDate === ''){
            endDate = 'ongoing'
        } else {
            endDate = this.state.endDate
        }
        let newQualification = {
            university: this.state.university,
            qualification: this.state.qualification,
            startDate: this.state.startDate,
            endDate: endDate
        }
        this.setState({
            qualificationArray: this.state.qualificationArray.concat(newQualification),
            university: '',
            qualification: '',
            startDate: '',
            endDate: '',
            numberOfQualifications: this.state.numberOfQualifications+1  
        })
    }
    

    deleteQualification = (e) => {
        e = parseInt(e)
        let array1 = this.state.qualificationArray.slice(0, e)
        let array2 = this.state.qualificationArray.slice(e+1, this.state.qualificationArray.length)
        let finalArray = array1.concat(array2)
        this.setState({
            qualificationArray: finalArray,
            numberOfQualifications: this.state.numberOfQualifications-1
        })
    }
 
    render(){
        let exampleClassName
        if(this.state.numberOfQualifications > 2){
            exampleClassName = 'educationInputHidden'
        } else {
            exampleClassName = 'educationInput'
        }
        return(
            <div className='educationContainer'>
            <div className={exampleClassName}>
            <div id='switchContainer'>
                <div className='switchText'><p>Still Studying?</p>
                </div>
                <div className="switch">
                <label >
                    <input type="checkbox"
                    onChange={this.updateStudyingStatus}
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
                        placeholder={this.state.university}
                        value={this.state.university}
                        onChange={e => this.updateUniversityInformation(e)}
                    ></input>
                </div>
                <div class="form-group">
                    <label for="qualification">Qualification</label>
                    <input type="text" 
                        class="form-control" 
                        id="qualification"
                        placeholder={this.state.qualification}
                        value={this.state.qualification}
                        onChange={e => this.updateQualificationInformation(e)}
                    ></input>
                </div>
                <div class="form-group">
                    <label for="startDate">Started</label>
                    <input type="date" 
                        class="form-control" 
                        id="startDate"
                        placeholder={this.state.startDate}
                        value={this.state.startDate}
                        onChange={e => this.updateStartDate(e)}
                    ></input>
                </div>
                <div class="form-group">
                    <label for="endDate">Finished</label>
                        
                    <input type="date" 
                        class="form-control" 
                        id={this.state.endDateClass}
                        placeholder={this.state.endDate}
                        value={this.state.endDate}
                        disabled={this.state.studyingNow}
                        onChange={e => this.updateEndDate(e)}
                    ></input>
                    
                </div>
                <button className='btn btn-primary' onClick={e => this.submitEducationInformation(e)}>Save</button>
            </form>
            </div>
            <div className='educationDisplay'>
                <div className='qualificationsContainer'>
                {this.state.qualificationArray.map((qualification, i) => {
                          
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
                        <i id={i} onClick={e => this.deleteQualification(e.target.id)} className="fas fa-trash"></i>
                        </div>
                    </div>
                </div>
                })}
                </div>
            </div>
        </div>
        )
    }
}

export default Education