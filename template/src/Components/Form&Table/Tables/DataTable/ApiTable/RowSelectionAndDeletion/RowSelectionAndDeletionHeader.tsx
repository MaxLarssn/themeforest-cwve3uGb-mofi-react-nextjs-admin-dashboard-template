import React from "react";
import { RowsSelectionAndDeletions } from "@/Constant";
import { CardHeader } from "reactstrap";

const RowSelectionAndDeletionHeader = () => {
  return (
    <CardHeader>
      <h4 className="mb-3">{RowsSelectionAndDeletions}</h4>
      <span>
        It can be useful to provide the user with the option to select rows in a DataTable. This can be done by using a click event to add / remove a class on the table rows. The{" "}
        <code className="api" title="DataTables API method">
          rows().data()
        </code>
        method can then be used to get the data for the selected rows. In this case it is simply counting the number of selected rows, but much more complex interactions can easily be developed.
      </span>
    </CardHeader>
  );
};

export default RowSelectionAndDeletionHeader;
