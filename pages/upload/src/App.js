import './App.css';

import DropFileInput from './components/drop-file-input/DropFileInput';
import FormFIelds from "./components/FormFields"
function App() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="box" style={{display: 'flex'
        }}> 
            <h2 className="header">
                React drop files input
            </h2>
            <div><FormFIelds /></div>
            
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
        </div>
    );
}

export default App;
