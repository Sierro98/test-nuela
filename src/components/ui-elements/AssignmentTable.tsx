import TableRadioButton from "./TableRadioButton";

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
          <button type="button" className="btn btn-primary w-25" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            + Añadir Asignatura
          </button>
        </div>
      </div>

      <div
        className="modal fade"
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
            <div className="modal-body">...</div>
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
