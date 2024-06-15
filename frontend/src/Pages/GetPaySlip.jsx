import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const GetPaySlip = () => {
    const { userid } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/getuserdata/${userid}`);
                if (response.data.success) {
                    setData(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [userid]);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Payment Slip</h1>
            {data && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <table border="4">
                        <thead>
                            <tr className="border">
                                <th colSpan="2">ALM FOOD PRODUCTS LTD.</th>
                                <th colSpan="2">Salary Slip for the Month of APRIL-2020</th>
                                <th colSpan="2">ALM Food Products Limited Vill- Behra, Gulabhgarh Road , Dera Bassi,Mohali-140507</th>
                                <th> </th>
                            </tr>
                            <tr>
                                <td>Employee Name:</td>
                                <td>{data.name}</td>
                                <td> </td>
                                <td> </td>
                                <td>Paid days:</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>Designation :</td>
                                <td>ACCOUNTS</td>
                                <td> </td>
                                <td> </td>
                                <td>PF UAN No:</td>
                                <td>XXXXXXXX</td>
                            </tr>
                            <tr>
                                <td>Department:</td>
                                <td>ACCOUNTING</td>
                                <td> </td>
                                <td> </td>
                                <td>ESI IP No:</td>
                                <td>XXXXXXXX</td>
                            </tr>
                            <tr>
                                <td>DOJ:</td>
                                <td>01-05-2019</td>
                                <td> </td>
                                <td> </td>
                                <td>Employee Code:</td>
                                <td>XXXXXXXX</td>
                            </tr>
                            <tr className="border">
                                <td>EMOLUMENTS  </td>
                                <td> </td>
                                <td>AMOUNT Rs.</td>
                                <td>DEDUCTIONS</td>
                                <td> </td>
                                <td>AMOUNT Rs.</td>
                            </tr>
                            <tr>
                                <td>Basic Pay</td>
                                <td> </td>
                                <td>{data.basicPay}</td>
                                <td>Profession Tax</td>
                                <td> </td>
                                <td> -   </td>
                            </tr>
                            <tr>
                                <td>House Rent Allowance</td>
                                <td> </td>
                                <td>{data.homeAll}</td>
                                <td>Provident Fund</td>
                                <td> </td>
                                <td> - </td>
                            </tr>
                            <tr>
                                <td>Dearness Allowance</td>
                                <td> </td>
                                <td>{data.dearAllo}</td>
                                <td>ESI</td>
                                <td> </td>
                                <td> -   </td>
                            </tr>
                            <tr>
                                <td>Medical Allowance</td>
                                <td> </td>
                                <td>{data.medicalAll}</td>
                                <td>L/W</td>
                                <td> </td>
                                <td> - </td>
                            </tr>
                            <tr>
                                <td>Vehicle Allowance</td>
                                <td> </td>
                                <td> -   </td>
                                <td>Group Insurance</td>
                                <td> </td>
                                <td> -   </td>
                            </tr>
                            <tr>
                                <td>Washing Allowance</td>
                                <td> </td>
                                <td> </td>
                                <td>Income Tax(TDS)</td>
                                <td> </td>
                                <td> -   </td>
                            </tr>
                            <tr>
                                <td>Other Allowance</td>
                                <td> </td>
                                <td> </td>
                                <td>Advance</td>
                                <td> </td>
                                <td> -   </td>
                            </tr>
                            <tr>
                                <td>Other Allowance</td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Gross Pay</td>
                                <td> </td>
                                <td>{data.grossPay}</td>
                                <td>Total deduction</td>
                                <td> </td>
                                <td> - </td>
                            </tr>
                            <tr>
                                <td>Salary Payable:</td>
                                <td>{data.salaryPayale}</td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td colSpan="4">Salary Mode:</td>
                                <td colSpan="2">Bank Transfer</td>
                            </tr>
                            <tr>
                                <td colSpan="4">Remarks:</td>
                                <td colSpan="2"> Salary Slip </td>
                            </tr>
                            <tr>
                                <td colSpan="6">This is computer generated payslip and does not require any signature.</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            )}
            <div className="print-button-container" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginRight: "12rem", marginBottom: "12px" }}>
                <button onClick={handlePrint} style={{ marginTop: '20px', display: 'block' }}>Print Payslip</button>
            </div>
        </div>
    );
};

export default GetPaySlip;
