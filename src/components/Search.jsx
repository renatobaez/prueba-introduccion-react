import { InputGroup, Form } from "react-bootstrap";

export function Search({ setCharSearch }) {
  const handleChange = (e) => {
    setCharSearch(e.target.value);
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
