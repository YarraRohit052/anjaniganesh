import React from 'react';
import './Dashboard.css';
import logo1 from '../images/aicte1million2.png';
import logo2 from '../images/checked.gif';

const Dashboard = () => {
    return (
        <>
            <div className="dashboard">

            </div>
            <div>
                <img src={logo1} alt="AICTE Logo" className='image' />
            </div>
            <div className='verification-box'>
                <div className='verification-box-body'>
                    <h2 className='completion-box-msg'>
                        <img src={logo2} alt="AICTE Logo" className='image1' />
                        <br></br>
                        AICTE Internship Certificate is successfully verified
                    </h2>
                    <h3 className='ng-binding'>
                        Certificate ID: 6d68edbaefe24605d432946f61ecf773
                    </h3>
                    <h3 className='ng-binding'>
                        Issued On: 10 AUG 2023
                    </h3>
                    <h3 className='ng-binding'>
                        Issued To: RAVI NAGA ANJANI GANESH MUTHYALA
                    </h3>
                    <h3 className='ng-binding'>
                        Institute: Vishnu Institute of Technology
                    </h3>
                    <h3 className='ng-binding'>
                        Internship: DATA ANALYTICS VIRTUAL INTERNSHIP (MAY - JULY 2023)
                    </h3>
                    <br></br>
                </div>
            </div>
            <div className='space'>
                <br></br>
                <br></br>
            </div>
        </>
    );
}

export default Dashboard;
