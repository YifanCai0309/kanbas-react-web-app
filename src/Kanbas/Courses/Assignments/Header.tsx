import React from "react";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  return (
    <div className="row mb-3 d-flex justify-content-between">
      <div className=" col-md-6">
        <div className="input-group">
          <span className="input-group-text">
          <IoSearch />
        </span>
        <input
          type="text"
          id="search-students"
          className="form-control"
          placeholder="Search..."
        />  
        </div>
        
      </div>

      <div className="d-flex col-md-6 justify-content-end">
        <button
          id="wd-add-assignment-group"
          className="btn btn-lg btn-secondary text-nowrap me-1"
        >
          + Group
        </button>
        <button
          id="wd-add-assignment"
          className="btn btn-lg btn-danger text-nowrap"
        >
          + Assignment
        </button>
      </div>
    </div>
  );
}
