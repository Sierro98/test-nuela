import TableRadioButton from "./TableRadioButton";
import { Col, Form } from "react-bootstrap";

const AssignmentTable: React.FC = () => {
  return (
    <>
      <div className="d-flex flex-column gap-5">
        <TableRadioButton
          name="HourGroup"
          options={[
            { label: "Horas lectivas", value: "1" },
            { label: "Horas complementarias", value: "2" },
          ]}
          onChange={(value) => console.log(value)}
          defaultValue="1"
        />
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary w-25"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            + Añadir Asignatura
          </button>
        </div>
        <div className="rounded-3">
          <table className="table table-striped table-responsive fw-normal">
            <thead>
              <tr>
                <th scope="col" className="fw-normal text-secondary">
                  Nombre
                </th>
                <th scope="col" className="fw-normal text-secondary">
                  Tipo
                </th>
                <th scope="col" className="fw-normal text-secondary">
                  Curso
                </th>
                <th scope="col" className="fw-normal text-secondary">
                  Horas semana
                </th>
                <th scope="col" className="fw-normal text-secondary">
                  Espacio regular
                </th>
                <th scope="col" className="fw-normal text-secondary">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <td>A</td>
                <td>B</td>
                <td>C</td>
                <td>D</td>
                <td>E</td>
                <td>
                  <span className="text-primary">Ver</span>{" "}
                  <span className="text-primary ps-3">Editar</span>{" "}
                  <span className="text-danger ps-3">Eliminar</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* MODAL START */}
      <div
        className="modal modal-lg fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Añadir asignatura
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Col>
                <Form.Label>Selecciona la asignatura</Form.Label>
                <Form.Select></Form.Select>
                <Form.Label>Tipo de asignatura</Form.Label>
                <Form.Select></Form.Select>
                <Form.Label>Curso</Form.Label>
                <Form.Select></Form.Select>
                <Form.Label>Grupo</Form.Label>
                <Form.Select></Form.Select>
                <Form.Label>Horas</Form.Label>
                <Form.Select></Form.Select>
                <Form.Label>Espacio</Form.Label>
                <Form.Select></Form.Select>
              </Col>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                + Añadir asignatura
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentTable;
