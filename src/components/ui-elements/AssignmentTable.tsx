
import TableRadioButton from "./TableRadioButton";

const AssignmentTable: React.FC = () => {
    return (
        <div className="d-flex flex-column gap-4">
            <TableRadioButton
              name="HourGroup"
              options={[
                { label: "Horas lectivas", value: "1" },
                { label: "Horas complementarias", value: "2" },
              ]}
              onChange={(value) => console.log(value)}
              defaultValue="1"
             />
        </div>
    );
}

export default AssignmentTable;