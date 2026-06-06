import { useEffect, useState } from 'react';
import { getPersons, createPerson, deletePerson} from './services/personService';

function App() {
  const [persons, setPersons] = useState<any[]>([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');

  const loadPersons = async () => {
    const response = await getPersons();
    setPersons(response.data);
  };

  useEffect(() => {
    loadPersons();
  }, []);

  const addPerson = async () => {
    await createPerson({
      firstName,
      lastName,
      address
    });

    setFirstName('');
    setLastName('');
    setAddress('');

    loadPersons();
  };

  const removePerson = async (id: number) => {
    await deletePerson(id);
    loadPersons();
  };

  return (
    <div className="container mt-4">
      <h2>Person CRUD</h2>

      <div className="card p-3 mb-3">
        <input
          className="form-control mb-2"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={addPerson}
        >
          Add Person
        </button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.address}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removePerson(person.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;