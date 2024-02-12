import { useState } from "react";
import Filter from "./Filter";
import Location from "./Location";
import JobTitleClass from "./JobTitle";
import Industry from "./Industry";
import SkillClass from "./Skill";
import { Button } from "reactstrap";
import { JobFilterData } from "@/Constant";

const Sidebar = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const toggle = () => setFilterToggle(!filterToggle);

  return (
    <>
      <Button color="primary" className="email-aside-toggle md-sidebar-toggle" onClick={toggle}>{JobFilterData}</Button>
      <div className={`md-sidebar-aside job-sidebar ${filterToggle ? "open" : ""}`}>
        <div className="default-according style-1 faq-accordion job-accordion">
          <Filter />
          <Location />
          <JobTitleClass />
          <Industry />
          <SkillClass />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
