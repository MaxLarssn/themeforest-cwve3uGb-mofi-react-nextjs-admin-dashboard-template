import { Href, StateSavingTitle } from "@/Constant";
import { CardHeader } from "reactstrap";

export const StateSavingCardHeader = () => {
  return (
    <CardHeader className="pb-0 card-no-border">
      <h4>{StateSavingTitle}</h4>
      <span>
        DataTables has the option of being able to save the state of a table (its paging position, ordering state etc) so that is can be restored when the user reloads a page, or comes back to the page after visiting a sub-page. This state saving ability is enabled by the
        <code className="option" title="DataTables initialisation option">stateSave</code>option.
      </span>
      <span>
        The built in state saving method uses the HTML5 <code>localStorage</code> and <code>sessionStorage</code> APIs for efficient storage of the data. Please note that this means that the built in state saving option <strong>will not work with IE6/7</strong> as these browsers do not support these APIs. Alternative options of using cookies or saving the state on the server through Ajax can be used through the
        <code className="option" title="DataTables initialisation option">stateSaveCallback</code>and
        <a href={Href}>
          <code className="option" title="DataTables initialisation option">stateLoadCallback</code>
        </a>options.
      </span>
      <span>
        The duration for which the saved state is valid and can be used to restore the table state can be set using the
        <code className="option" title="DataTables initialisation option">stateDuration</code>
        initialisation parameter (2 hours by default). This parameter also controls if <code>localStorage</code> (0 or greater) or <code>sessionStorage</code> (-1) is used to store the data..
      </span>
      <span>
        The example below simply shows state saving enabled in DataTables with the
        <code className="option" title="DataTables initialisation option">stateSave</code>option.
      </span>
    </CardHeader>
  );
};
