import { InputGroup, Form, Button } from "react-bootstrap";

export function Buscador({ setUrl, record }) {
  const handleChange = (e) => {
    if (e.target.value !== "") {
      setUrl(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count="+record+"&character=" +
          e.target.value
      );
    } else {
      setUrl("https://thesimpsonsquoteapi.glitch.me/quotes?count="+record);
    }
  };
  return (
    <InputGroup className="mb-3">
      <Form.Control
        id="search"
        placeholder="Buscar personaje..."
        aria-label="Buscar personaje..."
        aria-describedby="basic-addon2"
        onChange={handleChange}
      />
    </InputGroup>
  );
}
