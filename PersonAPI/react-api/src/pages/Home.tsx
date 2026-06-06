import { useEffect, useState } from "react";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonList";
import type { Person } from "../interfaces/Person";
import axios from "axios";

const API_URL = "http://localhost:7000/api/person";

const Home = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [editPerson, setEditPerson] = useState<Person | null>(null);

  const load = async () => {
    const res = await axios.get<Person[]>(API_URL);
    setPersons(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const add = async (p: Omit<Person, "id">) => {
    await axios.post(API_URL, p);
    load();
  };

  const update = async (p: Person) => {
    await axios.put(`${API_URL}/${p.id}`, p);
    setEditPerson(null);
    load();
  };

  const remove = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    load();
  };

  return (
    <div className="page-wrapper">

      <h2 className="page-title">
        Person Management System
      </h2>

      <div className="layout-grid">

        <div className="left-panel">
          <PersonForm
            person={editPerson}
            onAdd={add}
            onUpdate={update}
            onCancel={() => setEditPerson(null)}
          />
        </div>

        <div className="right-panel">
          <div className="table-container">
            <PersonList
              persons={persons}
              onEdit={setEditPerson}
              onDelete={remove}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;