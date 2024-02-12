import { Card, CardBody } from "reactstrap";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { ArrowIcon, CheckBoxIcon } from "./BasicTrees";
import { DisableTreeData, TreeViewList } from "@/Data/BonusUi/TreeView";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DisabledTrees } from "@/Constant";

const DisabledTree = () => {
  const disableTreeData = flattenTree(TreeViewList);

  return (
    <Card>
      <CommonCardHeader title={DisabledTrees} span={DisableTreeData} />
      <CardBody>
        <div className="disabled-container">
          <div className="checkbox">
            <TreeView data={disableTreeData} aria-label="Checkbox tree" multiSelect propagateSelect propagateSelectUpwards defaultSelectedIds={[4,9]} defaultDisabledIds={[2,3,4,5,6,7,8,9,10,11,12]} togglableSelect expandedIds={[1,2,6,10,14,27]} nodeRenderer={({ element, isBranch, isExpanded, isSelected, isDisabled, isHalfSelected, getNodeProps, level, handleSelect, handleExpand }) => {
                return (
                  <div {...getNodeProps({ onClick: handleExpand })} style={{ marginLeft: 40 * (level - 1), opacity: isDisabled ? 0.5 : 1,marginTop:5 }}>
                    {isBranch && <ArrowIcon isOpen={isExpanded} />}<CheckBoxIcon className="checkbox-icon " onClick={(e: any) => { handleSelect(e); e.stopPropagation(); }} variant={isHalfSelected ? "some" : isSelected ? "all" : "none"} /><span className="name">{element.name}</span>
                    </div>
                );
              }}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default DisabledTree;
