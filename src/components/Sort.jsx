import { InputGroup, Form } from "react-bootstrap";
export function Sort({setSortList}) {
  const handleSort = (e) => {
    if (e.target.value !== "") {
      setSortList(e.target.value);
    }
  };
  return (
    <InputGroup className="mb-3">
      <Form.Select id="sort" onChange={handleSort}>
        <option value="">Ordenar...</option>
        <option value="ascending">Ordenar de A a Z</option>
        <option value="descending">Ordenar de Z a A</option>
      </Form.Select>
    </InputGroup>
  );
}
