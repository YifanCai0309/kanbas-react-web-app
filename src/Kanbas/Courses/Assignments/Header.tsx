import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { cid } = useParams();

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/${new Date().getTime().toString()}`);
  };

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
          style={{backgroundColor: '#c7cdd1'}}
          id="wd-add-assignment-group"
          className="btn btn-lg text-nowrap me-1"
        >
          + Group
        </button>
      
        <button
          id="wd-add-assignment"
          className="btn btn-lg btn-danger text-nowrap"
          onClick={handleAddAssignment}
        >
          + Assignment
        </button>
      
      </div>
    </div>
  );
}
