import React from 'react'

class Header extends React.Component {
    constructor () {
        super()
    }

    render() {
        return(
            <div className='headerContainer'>
                <div>
                    <h1>CV-Builder Application</h1>
                </div>
                <div>
                    <h3>Make your CV with Ease!</h3>
                </div>
            </div>
        )
    }
}

export default Header