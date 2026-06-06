import { useEffect, useState } from "react";
import { getPersons, createPerson, updatePerson, deletePerson } from "../services/personService";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonList";
import type { Person } from "../interfaces/Person";

const Home = () => {
    const [persons, setPersons] = useState<Person[]>([]);
    const [editPerson, setEditPerson] = useState<Person | null>(null);

    const loadData = async () => {
        const res = await getPersons();
        setPersons(res.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleAdd = async (data: Omit<Person, "id">) => {
        await createPerson(data);
        loadData();
    };

    const handleUpdate = async (data: Person) => {
        await updatePerson(data.id, data);
        setEditPerson(null);
        loadData();
    };

    const handleDelete = async (id: number) => {
        await deletePerson(id);
        loadData();
    };

    return (
        <div className="page-wrapper">

            <h2 className="page-title">Person Management System</h2>

            <div className="layout-grid">

                <div className="left-panel">
                    <PersonForm
                        person={editPerson}
                        onAdd={handleAdd}
                        onUpdate={handleUpdate}
                        onCancel={() => setEditPerson(null)}
                    />
                </div>

                <div className="right-panel">
                    <div className="table-container">
                        <PersonList
                            persons={persons}
                            onEdit={setEditPerson}
                            onDelete={handleDelete}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;