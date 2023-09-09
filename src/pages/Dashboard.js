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
                        AICTE Inernship Certificate is successfully verified
                    </h2>
                    <h3 className='ng-binding'>
                        Certificate ID:  8e287451a68241b5883d79952367966b
                    </h3>
                    <h3 className='ng-binding'>
                        Issued On: 12 Oct 2022
                    </h3>
                    <h3 className='ng-binding'>
                        Issued To: YARRA ROHIT
                    </h3>
                    <h3 className='ng-binding'>
                        Institute: Vishnu Institute of Technology
                    </h3>
                    <h3 className='ng-binding'>
                        Internship: CYBERSECURITY VIRTUAL INTERNSHIP (JULY - SEP 2022)
                    </h3>
                    <br></br>
                </div>
            </div>
            <div className='space'>
                hiihgigg
            </div>
        </>
    );
}

export default Dashboard;
