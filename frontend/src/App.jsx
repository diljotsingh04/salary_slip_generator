import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';
import Home from './Pages/Home';
import GetPaySlip from './Pages/GetPaySlip';

function App() {
    const [uploaded, setUploaded] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(null);
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/getdata');
                if (response.data.success) {
                    setData(response.data.data); // Update state with fetched data
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();

    }, []);

    useEffect(() => {
        setData(null);
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/getdata');
                if (response.data.success) {
                    setData(response.data.data); // Update state with fetched data
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        if (uploaded === true) {
            fetchData();
        }
    }, [uploaded]);


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home data={data} setdata={setData} setUploaded={setUploaded} />} />
                    <Route path="/getslip/:userid" element={<GetPaySlip />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
