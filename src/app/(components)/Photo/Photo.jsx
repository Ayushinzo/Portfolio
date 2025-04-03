import axios from "axios";
import { useState } from "react";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return alert("Please select a file");

        const formData = new FormData();
        formData.append("file", file);

        try {
            setUploadStatus("Uploading...");

            let response = await axios.post("http://localhost:3000/api/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                setUploadStatus(`File uploaded successfully: ${response.data.path}`);
            } else {
                setUploadStatus("Failed to upload file.");
            }
        } catch (error) {
            setUploadStatus("Error during upload.");
        }
    };

    return (
        <div>
            <h1>Upload Image</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            <p>{uploadStatus}</p>
        </div>
    );
};

// export default UploadForm;