interface Props {
  hours: number;
  hourType: string;
}

const HourElement: React.FC<Props> = ({ hours, hourType }) => {
  return (
    <div
      style={{
        width: "30%",
        borderRadius: "15px",
        overflow: "hidden",
        display: "flex",
      }}
      className="d-flex flex-column bg-white"
    >
      <span className="text-secondary px-3 py-2">
        {hourType}
      </span>
      <span className="px-3 pb-2 fs-3">
        {hours} horas
      </span>
    </div>
  );
};

export default HourElement;
