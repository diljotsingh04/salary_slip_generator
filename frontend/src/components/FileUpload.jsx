import React, { useState } from 'react';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests

const FileUpload = ({ setUploaded, setdata }) => {
    const [file, setFile] = useState(null);
    const [message, setmessage] = useState()

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        if(file === null){
            return setmessage("please select a file");
        }

        try {
            const response = await axios.post('http://localhost:3000/uploaddata', formData);
            console.log(response.data);
            if (response.data.success) {
                setUploaded(true);
            }
        } catch (error) {
            console.error('Error uploading file: ', error);
        }
    };

    const handleClearData = async() => {
        try {
            const response = await axios.delete('http://localhost:3000/cleardata');
            console.log(response.data)
            if(response.data.success){
                setUploaded(null);
                setdata(null);
            }
        } catch (error) {
            console.error('Error clearing data:', error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
                <div>{message}</div>
            </form>

        <button onClick={handleClearData}>Clear data</button>
        </>
    );
};

export default FileUpload;
