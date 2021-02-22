import React, { useState, useEffect } from "react";

function Experience({ id, WorkExperience, setWorkExperience }) {
  //component state
  //   const [experience, setExperience] = useState([
  //     {
  //       JobTitle: "",
  //       Employer: "",
  //       StartDate: "",
  //       EndDate: "",
  //     },
  //   ]);

  //   console.log(experience);

  const [jobTitle, setJobTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  //handle onChange
  //   const handleExperience = (e) => {
  //     console.log(e.target);
  //     const { name, value } = e.target;
  //     setExperience([{ ...experience, [name]: value }]);
  //     //setExperience({ ...experience, [name]: value });
  //   };

  const handleClick = () => {
    //let lastExperience = experience;
    console.log(jobTitle);
  };

  //It will render when the Experience state gets updated
  useEffect(() => {
    setWorkExperience({ ...WorkExperience, [id]: experience });
  });

  //It will render the experience component
  return (
    <div>
      <input
        className="form-control mb-3"
        name="JobTitle"
        value={jobTitle}
        placeholder="Job Title"
        required
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <input
        className="form-control mb-3"
        name="Employer"
        value={employer}
        placeholder="Employer"
        required
        onChange={(e) => setEmployer(e.target.value)}
      />
      <input
        className="form-control mb-3"
        name="StartDate"
        value={startDate}
        placeholder="Start Date"
        required
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        className="form-control mb-3"
        name="EndDate"
        value={endDate}
        placeholder="End Date"
        required
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button className="btn btn-info w-100" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default Experience;
