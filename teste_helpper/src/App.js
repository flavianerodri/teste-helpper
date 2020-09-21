import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
  Form,
} from "reactstrap";

function App() {
  const data = [];

  const state = {
    data: data,
    form: {
      id: "",
      nome: "",
      email: "",
      cpf: "",
      telefone: "",
      cep: "",
      logradouro: "",
      numero: "",
      bairro: "",
      cidade: "",
      acoes: "",
    },
  };

  const [user, setUser] = useState(state.form);

  //Inicializa com o valor do data(users) e o setUser atualiza o users

  const [users, setUsers] = useState(data);

  // Ta pegando o user e adicionando na lista

  const addData = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ [name]: value });
  };

  const [ativo, setAtivo] = React.useState(false);

  const deleteData = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="App">
      <>
        <Container>
          <br />
          <Button
            color="success"
            onClick={() => {
              setAtivo(true);
            }}
          >
            Cadastrar Cliente
          </Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF/CNPJ</th>
                <th>Telefone</th>
                <th>CEP</th>
                <th>Logradouro</th>
                <th>Número</th>
                <th>Bairro</th>
                <th>Cidade/Estado</th>
                <th> Ações </th>
              </tr>
            </thead>
            <tbody>
              {users.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.nome}</td>
                  <td>{elemento.email}</td>
                  <td>{elemento.cpf}</td>
                  <td>{elemento.telefone}</td>
                  <td>{elemento.cep}</td>
                  <td>{elemento.logradouro}</td>
                  <td>{elemento.numero}</td>
                  <td>{elemento.bairro}</td>
                  <td>{elemento.cidade}</td>

                  <td>
                    <Button
                      color="danger"
                      onClick={() => {
                        deleteData(elemento.id);
                      }}
                    >
                      Excluir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <Modal isOpen={ativo}>
          <ModalHeader>
            <div>
              <h3>Cadastre o cliente</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <Form method="post">
              <FormGroup>
                <label>Id</label>
                <input
                  className="form-control"
                  readOnly
                  name="id"
                  type="number"
                  value={users.length + 1}
                />
              </FormGroup>
              <FormGroup>
                <label>Nome</label>

                <input
                  className="form-control"
                  name="nome"
                  type="text"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <label>Email</label>
                <input
                  className="form-control"
                  onChange={handleInputChange}
                  name="email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <label>CPF/CNPJ</label>
                <input
                  className="form-control"
                  onChange={handleInputChange}
                  name="cpf"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <label>Telefone</label>
                <input
                  className="form-control"
                  onChange={handleInputChange}
                  name="telefone"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <label>CEP</label>
                <input
                  className="form-control"
                  onChange={handleInputChange}
                  name="cep"
                  type="numer"
                />
              </FormGroup>
              <FormGroup>
                <label>Logradouro</label>
                <input
                  className="form-control"
                  onChange={handleInputChange}
                  name="logradouro"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <label>Número</label>
                <input
                  className="form-control"
                  onChange={handleInputChange}
                  name="numero"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <label>Bairro</label>
                <input
                  className="form-control"
                  onChange={handleInputChange}
                  name="bairro"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <label>Cidade/Estado</label>
                <input
                  className="form-control"
                  onChange={handleInputChange}
                  name="cidade"
                  type="text"
                />
              </FormGroup>
            </Form>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                setAtivo(false);
              }}
            >
              Cancelar
            </Button>
            <Button
              onClick={() => {
                addData(user);
                setAtivo(false);
              }}
            >
              Cadastrar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    </div>
  );
}

export default App;
