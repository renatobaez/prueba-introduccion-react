import { useEffect, useState } from "react";
import { Container, Button, Card, Modal, Form, Spinner, Alert } from "react-bootstrap";
import simpsonsLogo from "./assets/img/The_Simpsons_Logo.svg";
import { MiApi } from "./components/MiApi";
import { Buscador } from "./components/Buscador";

function App() {
  const [url, setUrl] = useState(
    "https://thesimpsonsquoteapi.glitch.me/quotes?count=15"
  );
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [record, setRecord] = useState(15);

  const fetchCharacters = (url) => {
    MiApi({ url, setData, setLoading, setError });
  };

  useEffect(() => {
    fetchCharacters(url);
  }, [url]);

  const handleClose = () => setShow(false);
  const handleShow = (image, title, text) => {
    setImage(image);
    setTitle(title);
    setText(text);
    setShow(true);
  };
  const handleRecord = (e) => {
    document.getElementById("search").value = "";
    document.getElementById("sort").value = "";
    setRecord(e.target.value)
    setUrl(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=" + e.target.value
    );
  };
  const handleSort = (e) => {
    if (e.target.value !== "") {
      let newData = [...data];
      if (newData.length > 0) {
        if (e.target.value === "ascending") {
          let result = newData.sort((a, b) =>
            a.character.localeCompare(b.character)
          );
          setData(result);
        } else {
          let result = newData.sort((a, b) =>
            b.character.localeCompare(a.character)
          );
          setData(result);
        }
      }
    }
  };
  return (
    <>
      <Container>
        <header>
          <section>
            <img src={simpsonsLogo} className="logo" alt="The Simpsons Logo" />
          </section>
          <section>
            <Buscador setUrl={setUrl} record={record}/>
          </section>
        </header>
        <main>
          <section className="sort">
            <Form.Group
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Cantidad de Personajes</Form.Label>
              <Form.Select onChange={handleRecord}>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Ordenar Nombre</Form.Label>
              <Form.Select id="sort" onChange={handleSort}>
                <option value="">Seleccionar...</option>
                <option value="ascending">Ascendente</option>
                <option value="descending">Descendente</option>
              </Form.Select>
            </Form.Group>
          </section>
          <section className="characters">
            {error && <p>Error API</p>}
            {loading && <Spinner animation="border" variant="success" />}
            {data && data.length > 0  && data != undefined ? data.map((character) => (
              <Card className="card" key={Math.random()}>
                <Card.Img className="card-img" src={character.image} />
                <Card.Body>
                  <Card.Title>{character.character}</Card.Title>
                  <Button
                    variant="success"
                    onClick={() => {
                      handleShow(
                        character.image,
                        character.character,
                        character.quote
                      );
                    }}
                  >
                    Ver
                  </Button>
                </Card.Body>
              </Card>
            )):  <Alert variant="success">No se encontró el personaje</Alert>}
          </section>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={image} />
            </Modal.Body>
            <Modal.Footer>{text}</Modal.Footer>
          </Modal>
        </main>
      </Container>
    </>
  );
}
export default App;
