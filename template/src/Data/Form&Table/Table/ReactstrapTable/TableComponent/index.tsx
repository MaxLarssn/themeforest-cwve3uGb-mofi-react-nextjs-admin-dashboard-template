import { Alert, Badge, Button, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, Label, Progress, UncontrolledDropdown } from "reactstrap";
import { DefaultButtonsTitle, Href } from "@/Constant";
import { AlertsWithIcons } from "@/Components/Form&Table/Tables/ReactstrapTable/TableComponent/Common/AlertsWithIcons";
import { DismissibleAlerts } from "@/Components/Form&Table/Tables/ReactstrapTable/TableComponent/Common/DismissibleAlerts";

export const UiComponentData = [
  {
    title: "Button",
    tableColData: <Button color="primary">{DefaultButtonsTitle}</Button>,
    details: [
      {
        text: "Bootstrap includes six predefined button styles, each serving its own semantic purpose.",
      },
    ],
  },
  {
    title: "Round Buttons",
    tableColData: (
      <Button color="primary" className="btn-pill">
        {DefaultButtonsTitle}
      </Button>
    ),
    details: [
      {
        text: "Use",
        code: ".btn-pill",
      },

      { text: " class to button for Round Buttons." },
    ],
  },
  {
    title: "Button dropdowns",
    tableColData: (
      <UncontrolledDropdown>
        <DropdownToggle color="primary" caret className="w-auto">
          Primary
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Dropdown header</DropdownItem>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Separated link</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    ),
    details: [
      {
        text: "Use",
        code: ".dropdown-toggle",
      },

      { text: "class to button for Dropdown-toggle." },
    ],
  },
  {
    title: "Basic Button group",
    tableColData: (
      <ButtonGroup>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="warning">Warning</Button>
      </ButtonGroup>
    ),
    details: [
      {
        text: "Use",
        code: "btn-group",
      },

      {
        text: "class to button for",
        code: "div",
      },
      { text: "." },
    ],
  },
  {
    title: "Buttons with Icon",
    tableColData: (
      <Button color="primary">
        <i className="fa fa-info-circle" /> Primary
      </Button>
    ),
    details: [
      {
        text: "Bootstrap includes six predefined button styles, each serving its own semantic purpose.",
      },
    ],
  },
  {
    title: "Icon Button",
    tableColData: (
      <Button color="primary">
        <i className="fa fa-camera" />
      </Button>
    ),
    details: [
      {
        text: "Simple Icon Button",
      },
    ],
  },
  {
    title: "Loading Buttons",
    tableColData: (
      <Button color="primary">
        <i className="fa fa-spin fa-spinner me-2" />
        Expand UP
      </Button>
    ),
    details: [
      {
        text: "Expand Animation Buttons",
      },
    ],
  },
];

export const AlertTableData = [
  {
    title: "Basic Alert",
    tableColData: (
      <Alert color="primary">
        <p>
          <strong>Success!</strong> Indicates a successful or positive action.
        </p>
      </Alert>
    ),
    details: [
      {
        text: "Alerts are available for any length of text, as well as an optional dismiss button. Add",
        code: "alert alert-primary",
      },
      {
        text: ",",
        code: "alert alert-secondary",
      },
      {
        text: ",",
        code: " alert alert-success",
      },
      {
        text: ",",
        code: "alert alert-info",
      },
      { text: "classes for alert with all theme colors." },
    ],
  },
  {
    title: "Alerts with Links",
    tableColData: (
      <Alert color="primary">
        <p>
          <strong>Success!</strong> You should
          <a className="alert-link" href={Href}>
            read this message
          </a>
          .
        </p>
      </Alert>
    ),
    details: [
      {
        text: "Alerts are available for any length of text, as well as an optional dismiss button. Add",
        code: " alert alert-primary",
      },
      {
        text: ",",
        code: "alert alert-secondary",
      },
      {
        text: ",",
        code: " alert alert-success",
      },
      {
        text: ",",
        code: "alert alert-info",
      },
      { text: "classes for alert with all theme colors." },
    ],
  },
  {
    title: "Dismissible Alerts",
    tableColData: <DismissibleAlerts />,
    details: [
      {
        text: "Add a dismiss button and the",
        code: " alert alert-dismissable",
      },
      {
        text: "class, which adds extra padding to the right of the alert and positions the",
        code: "close",
      },
      {
        text: `a link On the dismiss button, add the data-bs-dismiss="alert" attribute, which triggers the JavaScript functionality. Be sure to use the`,
        code: "a",
      },
      {
        text: "element with it for proper behavior across all devices. To animate alerts when dismissing them, be sure to add the .fade and .in classes.",
      },
    ],
  },
  {
    title: "Alerts with icons",
    tableColData: <AlertsWithIcons />,
    details: [
      {
        text: "Add a dismiss button and the",
        code: " alert alert-dismissable",
      },
      {
        text: "class, which adds extra padding to the right of the alert and positions the",
        code: "close",
      },
      {
        text: `a link On the dismiss button, add the data-bs-dismiss="alert" attribute, which triggers the JavaScript functionality. Be sure to use the`,
        code: "a",
      },
      {
        text: "element with it for proper behavior across all devices. To animate alerts when dismissing them, be sure to add the .fade and .in classes.",
      },
    ],
  },
];

export const ProgressTableData = [
  {
    title: "Default Progress",
    tableColData: <Progress color="primary" value={75} />,
    details: [
      {
        text: "Uses a progress bar with class",
        code: "progress-bar",
      },
      {
        text: "and background color",
        code: "bg-primary, bg-secondary",
      },
      {
        text: " also change",
      },
    ],
  },
  {
    title: "Striped Progress",
    tableColData: <Progress striped color="primary" value={75} />,
    details: [
      {
        text: "Uses a gradient to create a striped effect class.",
        code: "progress-bar-striped",
      },
    ],
  },
  {
    title: "Progress Sizes",
    tableColData: <Progress color="primary" className="lg-progress-bar" value={75} />,
    details: [
      {
        text: "Different sized progress. For Default progress, class need",
        code: "lg-progress-bar",
      },
      {
        text: "on div.",
      },
    ],
  },
];

export const CheckBoxTableData = [
  {
    title: "Basic Checkbox",
    tableColData: (
      <>
        <Input id="checkbox1" type="checkbox" />
        <Label htmlFor="checkbox1">Default</Label>
      </>
    ),
    details: [
      {
        text: "Basic Checkbox",
      },
    ],
  },
  {
    title: "Default Checkbox Square",
    tableColData: (
      <div className="checkbox m-squar">
        <Input id="checkbox3" type="checkbox" />
        <Label htmlFor="checkbox3">Default</Label>
      </div>
    ),
    details: [
      {
        text: "Wrap with use",
        code: ".m-squar",
      },
      {
        text: " checkbox.",
      },
    ],
  },
  {
    title: "Basic Skin Check",
    tableColData: (
      <div className="checkbox checkbox-dark">
        <Input id="checkbox-state-dark" type="checkbox" />
        <Label htmlFor="checkbox-state-dark">Brand state</Label>
      </div>
    ),
    details: [
      {
        text: "Wrap with use",
        code: "checkbox-dark",
      },
      { text: "for this style of checkbox." },
    ],
  },
  {
    title: "Flat Skin Check",
    tableColData: (
      <div className="checkbox checkbox-solid-primary">
        <Input id="solid6" type="checkbox" defaultChecked />
        <Label htmlFor="solid6">checked</Label>
      </div>
    ),
    details: [
      {
        text: "Wrap with use",
        code: `checkbox-solid-*`,
      },
      {
        text: ",",
        code: "primary, secondary, success, info, warning, danger",
      },
      {
        text: "for this style of checkbox.",
      },
    ],
  },
  {
    title: "Disable Check",
    tableColData: (
      <div className="checkbox checkbox-solid-primary">
        <Input id="solid2" type="checkbox" disabled />
        <Label htmlFor="solid2">Disabled</Label>
      </div>
    ),
    details: [
      {
        text: "Wrap with use",
        code: "disabled",
      },
      {
        text: ",",
        code: "primary, secondary, success, info, warning, danger",
      },
      {
        text: "for this style of checkbox.",
      },
    ],
  },
  {
    title: "Inline  Checkbox",
    tableColData: (
      <FormGroup className="m-b-0 m-checkbox-inline">
        <div className="checkbox checkbox-primary">
          <Input id="inline-1" type="checkbox" />
          <Label htmlFor="inline-1">Option 1</Label>
        </div>
        <div className="checkbox checkbox-secondary">
          <Input id="inline-2" type="checkbox" />
          <Label htmlFor="inline-2">Option 1</Label>
        </div>
        <div className="checkbox checkbox-success">
          <Input id="inline-3" type="checkbox" />
          <Label htmlFor="inline-3">Option 1</Label>
        </div>
      </FormGroup>
    ),
    details: [
      {
        text: "Wrap with use",
        code: "disabled",
      },
      {
        text: ",",
        code: "primary, secondary, success, info, warning, danger",
      },
      {
        text: "for this style of checkbox.",
      },
    ],
  },
];

export const RadioBoxTableData = [
  {
    title: "Basic Radio Buttons",
    tableColData: (
      <>
        <Input id="radio" type="radio" />
        <Label htmlFor="radio">Default radio</Label>
      </>
    ),
    details: [
      {
        text: "Basic Radio Buttons",
      },
    ],
  },
  {
    title: "Default Radio",
    tableColData: (
      <div className="radio radio-primary">
        <Input id="radio1" type="radio" name="radio1" defaultValue="option1" />
        <Label htmlFor="radio1">Option 1</Label>
      </div>
    ),
    details: [
      {
        text: "Wrap with use",
        code: ".radio-*",
      },
      {
        text: " and color ",
        code: ".radio-*",
      },
      { code: "primary , secondary , success , info" },
      { text: "on Radio." },
    ],
  },
  {
    title: "Checked Radio",
    tableColData: (
      <div className="radio radio-primary">
        <Input id="radio44" type="radio" name="radio1" defaultValue="option1" defaultChecked />
        <Label htmlFor="radio44">Checked</Label>
      </div>
    ),
    details: [
      {
        text: "Wrap with use",
        code: "checkbox-dark",
      },
      { text: "for this style of checkbox." },
    ],
  },
  {
    title: "Flat Skin Check",
    tableColData: (
      <div className="radio radio-primary">
        <Input id="radio33" type="radio" name="radio1" defaultValue="option1" disabled />
        <Label htmlFor="radio33">Disabled</Label>
      </div>
    ),
    details: [
      {
        text: "Wrap with use",
        code: `checkbox-solid-*`,
      },
      {
        text: ",",
        code: "primary, secondary, success, info, warning, danger",
      },
      {
        text: "for this style of checkbox.",
      },
    ],
  },
  {
    title: "Inline  Checkbox",
    tableColData: (
      <FormGroup className="m-b-0 m-checkbox-inline">
        <div className="radio radio-primary">
          <Input id="radioinline1" type="radio" name="radio1" defaultValue="option1" />
          <label htmlFor="radioinline1">Option 1</label>
        </div>
        <div className="radio radio-secondary">
          <Input id="radioinline2" type="radio" name="radio1" defaultValue="option1" />
          <Label htmlFor="radioinline2">Option 1</Label>
        </div>
        <div className="radio radio-success">
          <Input id="radioinline3" type="radio" name="radio1" defaultValue="option1" />
          <label htmlFor="radioinline3">Option 1</label>
        </div>
      </FormGroup>
    ),
    details: [
      {
        text: "Wrap with use",
        code: "disabled",
      },
      {
        text: ",",
        code: "primary, secondary, success, info, warning, danger",
      },
      {
        text: "for this style of checkbox.",
      },
    ],
  },
];

export const SelectBoxTableData = [
  {
    title: "Single Select",
    tableColData: (
      <Input type="select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    ),
    details: [
      {
        text: "Use for basic select control.",
      },
    ],
  },
  {
    title: "Disabled Select Mode",
    tableColData: (
      <Input type="select" disabled>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    ),
    details: [
      {
        text: "Use for disabled select control add ",
        code: "disabled",
      },
      {
        text: ".",
      },
    ],
  },
  {
    title: "Large Select Mode",
    tableColData: (
      <>
        <Input type="select" className="form-control-lg mb-10">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        <Input type="select" className="form-control-sm mt-5 mb-10">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </>
    ),
    details: [
      {
        text: "Use for large and small select control add class",
        code: "form-control-*",
      },
      {
        code: "lg, sm",
      },
      {
        text: ".",
      },
    ],
  },
  {
    title: "Example multiple select",
    tableColData: (
      <Input type="select" multiple>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    ),
    details: [
      {
        text: "Use for multi select control add code ",
        code: "multiple",
      },
      {
        text: "on select.",
      },
    ],
  },
];

export const InputTableData = [
  {
    title: "Default Input text",
    tableColData: <Input className="input-primary" type="email" placeholder="Input text" />,
    details: [
      {
        text: "Use for basic select control.",
      },
    ],
  },
  {
    title: "Input Hover Color ",
    tableColData: <Input type="email" placeholder="Input text" />,
    details: [
      {
        text: "Use for basic input color add class",
        code: "input-air-*",
      },
      {
        code: "primary, secondary, success, info",
      },
      {
        text: ".on input",
      },
    ],
  },
];

export const BadgeTableData = [
  {
    title: "Basic Pills",
    tdClassName: "pills-component",
    tableColData: <Badge color="primary">Primary</Badge>,
    details: [
      {
        text: "Use the",
        code: ".badge",
      },
      {
        text: " class, followed by. with badge color use class ",
        code: ".badge-*",
      },
      {
        code: "primary , secondary , success , info, warning, danger, light",
      },
      { text: "  class within element to create default pill." },
    ],
  },
  {
    title: "Label With Icon",
    tableColData: (
      <Badge color="primary" className="label-square">
        <i className="fa fa-paperclip fa-lg"></i>
        <span className="f-14">Primary Label</span>
      </Badge>
    ),
    details: [
      {
        text: "Use the",
        code: "label-square",
      },
      {
        code: "div",
        text: " class with ",
      },
    ],
  },
];

export const TooltipTableData = [
  {
    title: "Hover",
    tableColData: (
      <Button color="primary" type="button" data-original-title="btn btn-link btn-lg" title="Hover">
        Primary
      </Button>
    ),
    details: [
      {
        text: `Use data-bs-toggle="tooltip" for hover trigger. This is a default trigger`,
      },
    ],
  },
  {
    title: "Link",
    tableColData: (
      <a className="btn btn-primary" href={Href}>
        Link
      </a>
    ),
    details: [
      {
        text: "Use the",
        code: "label-square",
      },
      {
        code: "div",
        text: " class with ",
      },
    ],
  },
  {
    title: "outline button",
    tableColData: (
      <Button outline color="primary">
        Primary
      </Button>
    ),
    details: [
      {
        text: "Use ",
        code: "btn btn-outline-info",
      },
      {
        code: "btn btn-outline-dark-2x",
        text: " for outline trigger. and button bold Border use class",
      },
    ],
  },
];

export const SwitchTableData = [
  {
    title: "Default Switch",
    tdClassName: "pills-component",
    tableColData: (
      <Label className="switch">
        <Input type="checkbox" defaultChecked />
        <span className="switch-state" />
      </Label>
    ),
    details: [
      {
        text: `Use class `,
        code: `switch`,
      },
      {
        text: " for label.",
      },
    ],
  },
  {
    title: "Disable Switch",
    tableColData: (
      <Label className="switch">
        <Input type="checkbox" disabled />
        <span className="switch-state" />
      </Label>
    ),
    details: [
      {
        text: "this Disable Switch ",
        code: "disabled",
      },
    ],
  },
  {
    title: "Switch Color",
    tableColData: (
      <div className="flex-grow-1 icon-state">
        <Label className="switch">
          <Input type="checkbox" defaultChecked />
          <span className="switch-state bg-primary" />
        </Label>
      </div>
    ),
    details: [
      {
        text: "Use class",
        code: "bg-*",
      },
      {
        code: "Primary , Secondary , Success , Info , Warning , Danger",
      },
      {
        text: "in span with icon show switch ",
        code: "icon-state",
      },
      {
        text: "on div.",
      },
    ],
  },
  {
    title: "Switch Outline",
    tableColData: (
      <div className="flex-grow-1 icon-state switch-outline">
        <Label className="switch">
          <Input type="checkbox" defaultChecked />
          <span className="switch-state bg-primary" />
        </Label>
      </div>
    ),
    details: [
      {
        text: "Use  class  ",
        code: "switch-outline",
      },
      {
        text: "on div.",
      },
    ],
  },
];
