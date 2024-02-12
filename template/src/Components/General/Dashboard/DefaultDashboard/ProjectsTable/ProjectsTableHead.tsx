import { Input, Label } from "reactstrap";

export const ProjectsTableHead = () => {
  return (
    <thead>
      <tr>
        <th>
          <div className="form-check">
            <Input type="checkbox" />
            <Label check></Label>
          </div>
        </th>
        <th>Files Name</th>
        <th>File Type</th>
        <th>Date</th>
        <th>Sizes</th>
        <th>Author</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};
