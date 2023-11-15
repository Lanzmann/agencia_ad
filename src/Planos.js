import styled from "styled-components";

const Card = styled.div`
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: calc(33% - 40px);
  height: 100vh;
  padding: 20px;
  margin: 20px;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

function Planos() {
    return (
      <CardContainer>
        <Card>
          <h2>Plano 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Card>
        <Card>
          <h2>Plano 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Card>
        <Card>
          <h2>Plano 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Card>
      </CardContainer>
    );
  }
  
  export default Planos