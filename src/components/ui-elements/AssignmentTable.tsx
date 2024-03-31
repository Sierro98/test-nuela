import TableRadioButton from "./TableRadioButton";
import { Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { supabase } from "../../utils/supaBaseClient";

import CustomClasses from "../../types/CustomClasses";
import Assignments from "../../types/Assignments";
import ClassType from "../../types/ClassType";
import Courses from "../../types/Courses";
import Group from "../../types/Group";
import Hours from "../../types/Hours";
import ClassSpace from "../../types/ClassSpace";

const AssignmentTable: React.FC = () => {
  const [viewMode, setViewMode] = useState(false);
  const [classes, setClasses] = useState<CustomClasses[]>([]);
  const [assignments, setAssignments] = useState<Assignments[]>([]);
  const [classType, setClassType] = useState<ClassType[]>([]);
  const [courses, setCourses] = useState<Courses[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [hours, setHours] = useState<Hours[]>([]);
  const [classSpace, setClassSpace] = useState<ClassSpace[]>([]);

  const [selectedAssignment, setSelectedAssignment] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedSpace, setSelectedSpace] = useState("");

  const handleAssignmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAssignment(e.target.value);
  };
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };
  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(e.target.value);
  };
  const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGroup(e.target.value);
  };
  const handleHoursChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHours(Number(e.target.value));
  };
  const handleSpaceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSpace(e.target.value);
  };

  async function handleSubmit() {
    const dataToInsert = {
      name: selectedAssignment,
      course: selectedCourse,
      group: selectedGroup,
      hours: selectedHours,
      space: selectedSpace,
      type: selectedType,
      professor_id: 1,
    };

    try {
      const { data, error } = await supabase.from("CLASSES").insert(dataToInsert);
      if (error) throw error;
      getClasses();
      console.log(data);
    } catch (error) {
      alert((error as Error).message);
    }
  }

  useEffect(() => {
    getClasses();
    getAssignments();
    getClassType();
    getCourses();
    getGroups();
    getHours();
    getClassSpace();
  }, []);

  async function getClasses() {
    try {
      const { data, error } = await supabase.from("CLASSES").select("*");
      if (error) throw error;
      if (data != null) {
        setClasses(data);
      }
    } catch (error) {
      alert((error as Error).message);
    }
  }

  async function deleteClasses(id: number) {
    try {
      const { error } = await supabase.from("CLASSES").delete().eq("id", id);
      if (error) throw error;
      getClasses();
    } catch (error) {
      alert((error as Error).message);
    }
  }

  async function getAssignments() {
    try {
      const { data, error } = await supabase.from("CLASS_ASIGNMENT").select("*");
      if (error) throw error;
      if (data != null) {
        setAssignments(data);
      }
    } catch (error) {
      alert((error as Error).message);
    }
  }

  async function getClassType() {
    try {
      const { data, error } = await supabase.from("CLASS_TYPE").select("*");
      if (error) throw error;
      if (data != null) {
        setClassType(data);
      }
    } catch (error) {
      alert((error as Error).message);
    }
  }

  async function getCourses() {
    try {
      const { data, error } = await supabase.from("COURSES").select("*").order("id");
      if (error) throw error;
      if (data != null) {
        setCourses(data);
      }
    } catch (error) {
      alert((error as Error).message);
    }
  }

  async function getGroups() {
    try {
      const { data, error } = await supabase.from("GROUP").select("*");
      if (error) throw error;
      if (data != null) {
        setGroups(data);
      }
    } catch (error) {
      alert((error as Error).message);
    }
  }

  async function getHours() {
    try {
      const { data, error } = await supabase.from("HOURS").select("*");
      if (error) throw error;
      if (data != null) {
        setHours(data);
      }
    } catch (error) {
      alert((error as Error).message);
    }
  }

  async function getClassSpace() {
    try {
      const { data, error } = await supabase.from("REGULAR_SPACE").select("*");
      if (error) throw error;
      if (data != null) {
        setClassSpace(data);
      }
    } catch (error) {
      alert((error as Error).message);
    }
  }

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
              {classes.map((classes) => (
                <tr>
                  <td>{classes.name}</td>
                  <td>{classes.type}</td>
                  <td>{classes.course}</td>
                  <td>{classes.hours} h</td>
                  <td>{classes.space}</td>
                  <td>
                    <span
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      className="btn text-primary"
                      onClick={() => setViewMode(true)}
                    >
                      Ver
                    </span>{" "}
                    <span
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      className="btn text-primary ps-3"
                    >
                      Editar
                    </span>{" "}
                    <span
                      className="btn text-danger ps-3"
                      onClick={() => deleteClasses(classes.id)}
                    >
                      Eliminar
                    </span>
                  </td>
                </tr>
              ))}
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
                onClick={() => setViewMode(false)}
              ></button>
            </div>
            <div className="modal-body">
              <Col>
                <Form.Label>Selecciona la asignatura</Form.Label>
                <Form.Select onChange={handleAssignmentChange}>
                  {assignments.map((assignments) => (
                    <option value={assignments.name}>{assignments.name}</option>
                  ))}
                </Form.Select>
                <Form.Label>Tipo de asignatura</Form.Label>
                <Form.Select onChange={handleTypeChange}>
                  {classType.map((classType) => (
                    <option value={classType.name}>{classType.name}</option>
                  ))}
                </Form.Select>
                <Form.Label>Curso</Form.Label>
                <Form.Select onChange={handleCourseChange}>
                  {courses.map((courses) => (
                    <option value={courses.name}>{courses.name}</option>
                  ))}
                </Form.Select>
                <Form.Label>Grupo</Form.Label>
                <Form.Select onChange={handleGroupChange}>
                  {groups.map((group) => (
                    <option value={group.name}>{group.name}</option>
                  ))}
                </Form.Select>
                <Form.Label>Horas</Form.Label>
                <Form.Select onChange={handleHoursChange}>
                  {hours.map((hour) => (
                    <option value={hour.hours}>{hour.hours} h</option>
                  ))}
                </Form.Select>
                <Form.Label>Espacio</Form.Label>
                <Form.Select onChange={handleSpaceChange}>
                  {classSpace.map((space) => (
                    <option value={space.space}>{space.space}</option>
                  ))}
                </Form.Select>
              </Col>
            </div>
            <div className="modal-footer">
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-primary"
                disabled={viewMode}
              >
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
