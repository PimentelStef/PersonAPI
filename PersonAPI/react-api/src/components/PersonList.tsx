import type { Person } from "../interfaces/Person";
import PersonRow from "./PersonRow";

interface Props {
  persons: Person[];
  onEdit: (p: Person) => void;
  onDelete: (id: number) => void;
}

const PersonList = ({ persons, onEdit, onDelete }: Props) => {
  if (!persons.length) return <p className="loading">No records found.</p>;

  const handleDetails = (p: Person) => {
    // This is where you handle the "Details" action
    // For now, we'll just show an alert
    alert(`Details for ${p.firstName} ${p.lastName}, ID: ${p.id}`);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {persons.map((p) => (
          <PersonRow
            key={p.id}
            person={p}
            onEdit={onEdit}
            onDelete={onDelete}
            onDetails={handleDetails}
          />
        ))}
      </tbody>
    </table>
  );
};

export default PersonList;