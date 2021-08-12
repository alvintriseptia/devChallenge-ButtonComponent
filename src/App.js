import { User, Documentation, Footer, Navbar } from "./components";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1024px;
  margin: 2rem;
  margin-left: 15rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
  }
`;

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <User />
        <Documentation />
        <Footer />
      </Container>
    </>
  );
}

export default App;
