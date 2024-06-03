import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../App.css"

function AutoLayoutExample() {
  return (
    <Container id='info' className="d-flex justify-content-center" style={{width:"95%",marginTop:"50px"}}>
      <Row style={{width:"95%"}}>
        <div  className="card">
            <h1>1st card</h1>
        </div>
        <div  className="card">
            <h1>2nd card</h1>
        </div>
        <div  className="card">
            <h1>3rd card</h1>
        </div>
        <div  className="card">
            <h1>3rd card</h1>
        </div>
        <div  className="card">
            <h1>3rd card</h1>
        </div>
        
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;