import React from 'react';
import FileUpload from '../components/FileUpload';
import {useNavigate} from 'react-router-dom'

const Home = ({ data, setUploaded, setdata }) => {

    const navigate = useNavigate();

    const handleGetSlip = async (id) => {
        navigate(`/getslip/${id}`)
    }

    return (
        <div>
            <FileUpload setUploaded={setUploaded} setdata={setdata}/>

            {data && data.length > 0 && (
                <div>
                    <table className="App" border="4">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Father's name</th>
                                <th>Gross Salary/Daily wages</th>
                                <th>Basic</th>
                                <th>HRA</th>
                                <th>CA</th>
                                <th>MA</th>
                                <th>TOTAL days</th>
                                <th>Salary Payable</th>
                                <th>Get Payslip</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((i, index) => (
                                <tr key={index}>
                                    <td>{i.name}</td>
                                    <td>{i.fatherName}</td>
                                    <td>{i.grossPay}</td>
                                    <td>{i.basicPay}</td>
                                    <td>{i.homeAll}</td>
                                    <td>{i.dearAllo}</td>
                                    <td>{i.medicalAll}</td>
                                    <td>{i.totalDays}</td>
                                    <td>{i.salaryPayable}</td>
                                    <td><button onClick={() => handleGetSlip(i._id)}>Get Payslip</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Home;
