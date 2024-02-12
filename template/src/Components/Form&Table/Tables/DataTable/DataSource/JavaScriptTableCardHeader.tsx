import { CardHeader } from "reactstrap";
import { JavascriptSourcedDataHeading } from "@/Constant";

export const JavaScriptTableCardHeader = () => {
  return (
    <CardHeader className="card-header pb-0 card-no-border">
      <h4 className="mb-3">{JavascriptSourcedDataHeading}</h4>
      <span>At times you will wish to be able to create a table from dynamic information passed directly to DataTables, rather than having it read from the document. This is achieved  the
        <code className="option" title="DataTables initialisation option">data</code>option in the initialisation object, passing in an array of data to be used (like all other DataTables handled data, this can be arrays or objects using the
        <code className="option" title="DataTables initialisation option">columns.data</code>option).
      </span>
      <span>A
        <code className="tag" title="HTML tag">table</code>must be available on the page for DataTables to use. This examples shows an empty
        <code className="tag" title="HTML tag">table</code>element being initialising as a DataTable with a set of data from a Javascript array. The columns in the table are dynamically created based on the
        <code className="option" title="DataTables initialisation option">columns.title</code>configuration option.
      </span>
    </CardHeader>
  );
};
