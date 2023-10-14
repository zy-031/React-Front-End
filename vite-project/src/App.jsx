import Header from './Header.jsx'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Index.css';

function App() {

    return (
    <div>
        <Header></Header>
        <class className="form">
            <div class="form-container">
                <Form>
                    <Form.Group id="formFile" className="mb-3 d-flex align-items-start">
                        <Form.Control type="text" value="ID :" readOnly disabled size="lg" id="input-field" />
                        <Form.Control type="text" placeholder="Type in your id here" size="lg" id="input-field2"/>
                        <Button variant="success" id="button2">Generate Proof</Button>
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-start">
                        <Form.Control type="text" placeholder="The result is..."  readOnly disabled size="lg" id="input-field2"/>
                    </Form.Group>
                </Form>
            </div>

        </class>


    </div>

    );

}

export default App