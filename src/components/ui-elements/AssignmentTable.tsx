import TableRadioButton from "./TableRadioButton";

const AssignmentTable: React.FC = () => {
  return (
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
        <button type="button" className="btn btn-primary w-25">
          + Añadir Asignatura
        </button>
      </div>
    </div>
  );
};

export default AssignmentTable;
