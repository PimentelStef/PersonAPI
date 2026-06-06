import { useState, useEffect } from "react";
import type { Person } from "../interfaces/Person";

interface Props {
    person?: Person | null;
    onAdd: (p: Omit<Person, "id">) => void;
    onUpdate: (p: Person) => void;
    onCancel: () => void;
  }
  
  const PersonForm = ({ person, onAdd, onUpdate, onCancel }: Props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
  
    useEffect(() => {
      if (person) {
        setFirstName(person.firstName);
        setLastName(person.lastName);
        setAddress(person.address);
      } else {
        setFirstName("");
        setLastName("");
        setAddress("");
      }
    }, [person]);
  
    const submit = (e: React.FormEvent) => {
      e.preventDefault();
      if (person) {
        onUpdate({ id: person.id, firstName, lastName, address });
      } else {
        onAdd({ firstName, lastName, address });
      }
    };
  
    return (
      <div className="custom-card form-box">
        <h3 className="form-title">
          {person ? "Update Person" : "Add Person"}
        </h3>
  
        <form onSubmit={submit}>
          <input
            className="form-input"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="form-input"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="form-input"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
  
          <div className="form-buttons">
            <button className="btn-primary-custom">
              {person ? "Update" : "Save"}
            </button>
            {person && (
              <button
                type="button"
                className="btn-secondary-custom"
                onClick={onCancel}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    );
  };
  
  export default PersonForm;