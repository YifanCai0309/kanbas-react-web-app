import "./index.css";
import { LiaFileImportSolid } from "react-icons/lia";
import { LiaFileExportSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { FaSearch } from 'react-icons/fa';

export default function Grades() {
  return (
    <div className="container mt-4">
    
      <div className="d-flex flex-row-reverse">
        <div>
            <IoMdSettings className="fs-2 mt-3 text-secondary"/>
        </div>
      
        <div className="m-2">
          <label className="bg-secondary form-control d-flex ">
            <LiaFileExportSolid className="pe-1 pt-2 fs-3"/>
            <select id="wd-group" className="form-select bg-secondary border-0">
              <option selected>Export</option>
            </select>
          </label>
        </div>
        <div className=" p-2">
          <button className="btn btn-secondary btn-lg">
            <LiaFileImportSolid />
            <i className="bi bi-upload"></i> Import
          </button>
        </div>
       
      </div>
      
      <div className="row mb-3">
        <div className="col-md-6">
            <label htmlFor="search-students" className="form-label">Student Names</label>
            <div className="input-group">
                <span className="input-group-text"><FaSearch /></span>
                <input type="text" id="search-students" className="form-control" placeholder="Search Students" />
            </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="search-assignments" className="form-label">Assignment Names</label>
          <div className="input-group">
            <span className="input-group-text"><FaSearch /></span>
            <input type="text" id="search-assignments" className="form-control" placeholder="Search Assignments" />
          </div>
        </div>
      </div>
      <div className="mb-3">
      <button className="btn btn-secondary">
            <CiFilter className="fs-3"/>
            <i className="bi bi-upload"></i> Apply Filters
          </button>
      </div>
      
      <div className="table-responsive">
        <table className="table align-middle table-striped table-bordered  table-hover ">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>A1 SETUP (Out of 100)</th>
              <th>A2 HTML (Out of 100)</th>
              <th>A3 CSS (Out of 100)</th>
              <th>A4 BOOTSTRAP (Out of 100)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Adams</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>92.18%</td>
              <td>66.22%</td>
            </tr>
            <tr>
              <td>Christina Allen</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Samreen Ansari</td>
              <td>100</td>
              <td>96.67</td>
              <td>92.18</td>
              <td>66.22</td>
            </tr>
            <tr>
              <td>Han Bao</td>
              <td>100</td>
              <td>100</td>
              <td><input type="text" className="form-control w-50" defaultValue="88.03%"/></td>
              <td>100</td>
            </tr>
            <tr>
              <td>Mahi Sai Srinivas Bobbili</td>
              <td>100</td>
              <td>96.67</td>
              <td>92.18</td>
              <td>66.22</td>
            </tr>
            <tr>
              <td>Slran Cao</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
