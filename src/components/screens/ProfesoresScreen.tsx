import { useState, useEffect } from "react";
import { supabase } from "../../utils/supaBaseClient";

import RadioButtonGroup from "../ui-elements/RadioButtonGroup";
import HourElement from "../ui-elements/HourElement";
import AssignmentTable from "../ui-elements/AssignmentTable";

function ProfesoresScreen() {
  const [totalHours, setTotalHours] = useState(0);

  useEffect(() => {
    getTotalHours();
  }, []);

  async function getTotalHours() {
    try {
      const { data, error } = await supabase.from("CLASSES").select("hours");
      if (error) throw error;
      if (data != null) {
        let hours = 0;
        data.forEach((hour) => {
          hours += hour.hours;
        });
        setTotalHours(hours);
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  return (
    <div className="col-auto pt-5 px-5">
      <div className="flex flex-col">
        <h1>Profesores</h1>
        <span className="text-secondary">Crea y gestiona los profesores</span>
        <hr />
      </div>
      <div className="d-flex flex-row items-center gap-4 align-items-center justify-content-between">
        <div className="d-flex flex-row gap-4">
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "10px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#E0B0FF",
            }}
          >
            <span className="fw-bold" style={{ fontSize: "35px" }}>
              M M
            </span>
          </div>
          <div className="d-flex flex-column">
            <h2>Marta Martinez</h2>
            <a href="#" className="text-secondary">
              martamartinze@gmail.com
            </a>
            <span className="px-1 text-secondary">+34 675432678</span>
          </div>
        </div>
        <span className="text-primary">Editar</span>
      </div>
      <hr />
      <div className="d-flex flex-row justify-content-center pt-2">
        <RadioButtonGroup
          name="TimeGroup"
          options={[
            { label: "Semanal", value: "1" },
            { label: "Anual", value: "2" },
          ]}
          onChange={(value) => console.log(value)}
          defaultValue="2"
        />
      </div>
      <div className="d-flex flex-row justify-content-between pt-5 pb-4">
        <HourElement hourType="Horas totales" hours={totalHours} />
        <HourElement hourType="Horas lectivas" hours={totalHours} />
        <HourElement hourType="Horas complementarias" hours={0} />
      </div>
      <hr />
      <AssignmentTable />
    </div>
  );
}

export default ProfesoresScreen;
