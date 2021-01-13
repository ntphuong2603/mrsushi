import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const MainLayout = (props) => {
    return(
        <div className='container mt-3 mb-3'>
            {props.children}
        </div>
    )
}

export default MainLayout;