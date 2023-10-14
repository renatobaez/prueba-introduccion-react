import { useEffect, useState } from "react";
import { Search } from "./Search";
import { Sort } from "./Sort";
import { Button, Card, Modal, Spinner, Alert } from "react-bootstrap";

export function MiApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [charSearch, setCharSearch] = useState("");
  const [sortList, setSortList] = useState("");
  const [show, setShow] = useState(false);
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [text, setText] = useState();

  useEffect(() => {
    setLoading(true);
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=50")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  function sortAlpha(a, b) {
    if (sortList === "ascending") {
      return a.character.localeCompare(b.character);
    }
    if (sortList === "descending") {
      return b.character.localeCompare(a.character);
    }
  }

  const showCharacter = data
    .filter((character) =>
      character.character.toLowerCase().includes(charSearch.toLowerCase())
    )
    .sort(sortAlpha)
    .map((character) => (
      <Card className="card" key={Math.random()}>
        <Card.Img className="card-img" src={character.image} />
        <Card.Body>
          <Card.Title>{character.character}</Card.Title>
          <Button
            variant="success"
            onClick={() => {
              handleShow(character.image, character.character, character.quote);
            }}
          >
            Ver
          </Button>
        </Card.Body>
      </Card>
    ));
  
  const handleClose = () => setShow(false);
  
  const handleShow = (image, title, text) => {
      setImage(image);
      setTitle(title);
      setText(text);
      setShow(true);
    };
  return (
    <>
      <main>
        <section className="sort">
          <Search setCharSearch={setCharSearch} />
          <Sort setSortList={setSortList} />
        </section>
        <section className="characters">
          {loading && <Spinner animation="border" variant="success" />}
          {showCharacter}
          {!loading && showCharacter.length === 0 && (
            <Alert variant="success">No se encontró el personaje</Alert>
          )}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={image} />
            </Modal.Body>
            <Modal.Footer>{text}</Modal.Footer>
          </Modal>
        </section>
      </main>
    </>
  );
}
