import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  setModules,
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const [error, setError] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const fetchModules = async () => {
    try {
      const modules = await client.findModulesForCourse(cid as string);
      dispatch(setModules(modules));
    } catch (err) {
      setError("Error fetching modules");
    }
  };

  const createModule = async (module: any) => {
    try {
      const newModule = await client.createModule(cid as string, module);
      dispatch(addModule(newModule));
    } catch (err) {
      setError("Error creating module");
    }
  };

  const removeModule = async (moduleId: string) => {
    try {
      await client.deleteModule(moduleId);
      dispatch(deleteModule(moduleId));
    } catch (err) {
      setError("Error deleting module");
    }
  };

  const saveModule = async (module: any) => {
    try {
      await client.updateModule(module);
      dispatch(updateModule(module));
    } catch (err) {
      setError("Error updating module");
    }
  };

  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div id="wd-modules">
      {error && <div className="alert alert-danger">{error}</div>}
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          createModule({ name: moduleName, course: cid });
          setModuleName("");
        }}
      />

      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5">
              <div
                style={{ backgroundColor: "#c7cdd1" }}
                className="wd-title p-3 ps-2"
              >
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      saveModule({ ...module, name: e.target.value })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });
                      }
                    }}
                    value={module.name}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => {
                    removeModule(moduleId);
                  }}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li
                      style={{ borderLeft: "3px solid green" }}
                      className="wd-lesson list-group-item p-3 ps-1"
                    >
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
