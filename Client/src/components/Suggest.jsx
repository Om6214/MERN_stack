import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../App.css"
import Card from './Card';

function AutoLayoutExample() {
  return (
    <Container id='info' className="d-flex justify-content-center" style={{width:"95%",marginTop:"50px"}}>
      <h1>Shop By Category</h1>
      <Row style={{width:"95%"}}>
        <div  className="card">
            <img src="/laptop.png" alt="" />
        </div>
        <div  className="card">
            <img src="/headphones.png" alt="" />
        </div>
        <div  className="card">
            <img src="/Accessories.png" alt="" />
        </div>
        <div  className="card">
            <img src="/Cameras.png" alt="cam" />
        </div>
        <div  className="card">
            <img style={{borderRadius:"40px"}} src="https://m.media-amazon.com/images/I/418zidwxGkL._AC_SR320,320_.jpg" alt="" />
        </div>
        
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;