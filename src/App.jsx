import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { MiApi } from "./components/MiApi";
import { Footer } from "./components/Footer";

function App() {

  return (
    <>
        <Header />
        <Container>
          <MiApi />
        </Container>
        <Footer />
    </>
  );
}
export default App;
