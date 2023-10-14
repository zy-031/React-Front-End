import React , { useRef } from "react";
import './Index.css';
import UploadIcon from './assets/cloud-upload-outline.svg';


function Header() {
    const fileInputRef = useRef(null);

    const handleFileButtonClick = () => {
        if (fileInputRef.current) {
        fileInputRef.current.click();
        }
    };

    const handleFileInputChange = (e) => {
        const selectedFile = e.target.files[0];
        alert(`Selected file: ${selectedFile.name}`);
    };

    return (
        <div>
            <nav className="Head">
                "Disabilities Don't Define, Abilities Do"
                <class className="button">
                    <button type="file" id="button" onClick={handleFileButtonClick}>Upload <img src={UploadIcon} id="img2" /> </button>
                    <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileInputChange}
                />
                </class>
            </nav>
            
        </div>
        
    );
}

export default Header;
