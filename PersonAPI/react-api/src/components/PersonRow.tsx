import type { Person } from "../interfaces/Person";

interface Props {
  person: Person;
  onEdit: (p: Person) => void;
  onDelete: (id: number) => void;
  onDetails: (p: Person) => void;
}

const PersonRow = ({ person, onEdit, onDelete, onDetails }: Props) => {
  return (
    <tr>
      <td>{person.id}</td>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>{person.address}</td>
      <td>
        <button className="btn btn-primary" onClick={() => onEdit(person)}>
          Edit
        </button>{" "}
        <button className="btn btn-danger" onClick={() => onDelete(person.id)}>
          Delete
        </button>{" "}
        <button className="btn btn-info" onClick={() => onDetails(person)}>
          Details
        </button>
      </td>
    </tr>
  );
};

export default PersonRow;