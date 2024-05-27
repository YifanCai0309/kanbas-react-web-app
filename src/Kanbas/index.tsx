import "./styles.css";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";

export default function Kanbas() {
  return (
    <div id="wd-kanbas-nav" className="h-100">
      <div className="modal fade d-md-none" id="sidebarCollapse-kanbas"  aria-labelledby="exampleModalLabel-kanbas" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel-kanbas">Kanbas Navigation</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <KanbasNavigation />
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-dark position-fixed top-0 start-0 d-md-none"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#sidebarCollapse-kanbas"
      >
        ≣
      </button>
      <div className="d-flex h-100">
        <div className="bg-black d-none d-md-block h-100">
          <KanbasNavigation />
        </div>

        <div className="flex-fill p-4">
          <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:cid/*" element={<Courses />} />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Inbox" element={<h1>Inbox</h1>} />

          </Routes>
        </div>
      </div>
    </div>
  );
}
