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
                    <h2>Make your CV</h2>
                </div>
            </div>
        )
    }
}

export default Header