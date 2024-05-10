import { useState } from "react";
import Select from "react-select";
import axios from "../../lib/axios/axios-instance";
import "./UserForm.css";

const UserForm = ({ handleInfo }) => {
  const [userForm, setUserForm] = useState({
    name: "",
    age: "",
    street: "",
    neighborhood: "",
    biography: "",
  });

  const [selectedState, setSelectedState] = useState({
    value: "MG",
    label: "Minas Gerais",
  });
  const [err, setErr] = useState(false);

  const cleanForm = () => {
    setUserForm({
      name: "",
      age: "",
      street: "",
      neighborhood: "",
      biography: "",
    });
  };

  const simpleValidate = () => {
    const empty = Object.values(userForm).some((x) => x === null || x === "");
    empty ? setErr(true) : setErr(false);
    return !empty;
  };

  const states = [
    { value: "AC", label: "Acre" },
    { value: "AL", label: "Alagoas" },
    { value: "AP", label: "Amapá" },
    { value: "AM", label: "Amazonas" },
    { value: "BA", label: "Bahia" },
    { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" },
    { value: "ES", label: "Espírito Santo" },
    { value: "GO", label: "Goiás" },
    { value: "MA", label: "Maranhão" },
    { value: "MT", label: "Mato Grosso" },
    { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MG", label: "Minas Gerais" },
    { value: "PA", label: "Pará" },
    { value: "PB", label: "Paraíba" },
    { value: "PR", label: "Paraná" },
    { value: "PE", label: "Pernambuco" },
    { value: "PI", label: "Piauí" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "RN", label: "Rio Grande do Norte" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "RO", label: "Rondônia" },
    { value: "RR", label: "Roraima" },
    { value: "SC", label: "Santa Catarina" },
    { value: "SP", label: "São Paulo" },
    { value: "SE", label: "Sergipe" },
    { value: "TO", label: "Tocantins" },
  ];

  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (simpleValidate()) {
      try {
        await axios.put("/users/1", {
          name: userForm.name,
          age: userForm.age,
          biography: userForm.biography,
          street: userForm.street,
          neighborhood: userForm.neighborhood,
          state: selectedState.value,
        });
        cleanForm();
        handleInfo();
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="trick">
          <h2>
            <span>Form</span>ulário
          </h2>
        </div>
        <div className="user-form-container" id="form">
          <div className="box-form box-form-1">
            <form className="user-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nome"
                name="name"
                value={userForm.name}
                onChange={(e) =>
                  setUserForm((prev) => ({ ...prev, name: e.target.value }))
                }
              />

              <input
                type="number"
                placeholder="Idade"
                name="age"
                value={userForm.age}
                onChange={(e) =>
                  setUserForm((prev) => ({ ...prev, age: e.target.value }))
                }
              />

              <input
                type="text"
                placeholder="Rua"
                name="street"
                value={userForm.street}
                onChange={(e) =>
                  setUserForm((prev) => ({ ...prev, street: e.target.value }))
                }
              />

              <input
                type="text"
                placeholder="Bairro"
                name="neighborhood"
                value={userForm.neighborhood}
                onChange={(e) =>
                  setUserForm((prev) => ({
                    ...prev,
                    neighborhood: e.target.value,
                  }))
                }
              />
              <div className="custom-select">
                <Select
                  styles={colorStyles}
                  isSearchable="true" // searchable for the closest one
                  placeholder="Acre"
                  options={states}
                  defaultValue={selectedState}
                  onChange={setSelectedState}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: "grey",
                      primary: "grey",
                      neutral0: "black",
                      neutral5: "white",
                      primary50: "#00ffee",
                    },
                  })}
                />
              </div>
              <textarea
                placeholder="Biografia..."
                name="biography"
                value={userForm.biography}
                onChange={(e) =>
                  setUserForm((prev) => ({
                    ...prev,
                    biography: e.target.value,
                  }))
                }
              />
              {err && (
                <span style={{ fontSize: "16", backgroundColor: "orangered", color: "white", width: "100%", padding: "2px"}}>
                  Preencha todos os campos!
                </span>
              )}
              <input type="submit" value="Atualizar" />
            </form>
          </div>
          <div className="box-form box-form-2">
            <p>
              Desafio <span>Sync</span>360
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
