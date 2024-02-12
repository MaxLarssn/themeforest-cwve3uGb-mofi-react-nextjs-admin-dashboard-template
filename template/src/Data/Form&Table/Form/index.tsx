import { FormValidationProp, TooltipValidationProp } from "@/Types/FormType";
import * as Yup from "yup";

export const TooltipValidations = [
  {
    text: "If your form layout allows it, you can swap the ",
    code: "{valid|invalid}",
  },
  {
    text: "-feedback classes for",
    code: ".{valid|invalid}",
  },
  {
    text: "-tooltip classes to display validation feedback in a styled tooltip. Be sure to have a parent with ",
    code: "position: relative",
  },
  {
    text: " on it for tooltip positioning.",
  },
];

export const TooltipInitialValue: TooltipValidationProp = { firstname: "", lastname: "", username: "", city: "", state: "", zip: "" };

export const TooltipValidationSchema = Yup.object().shape({
  firstname: Yup.string().min(2).required(),
  lastname: Yup.string().min(2).required(),
  username: Yup.string().min(2).required(),
  city: Yup.string().min(2).required(),
  state: Yup.string().min(2).required(),
  zip: Yup.string().min(2).required(),
});

export const TooltipValidationStateList = ["U.K", "India", "Thailand", "Newyork"];

export const BrowserDefaultData = [
  {
    text: "Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? Depending on your browser and OS,While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.",
  },
];

export const BrowserStateList = ["U.K", "Thailand", "India", "U.S"];

export const BrowserRadioList = [
  {
    id: 1,
    text: "Visa",
  },
  {
    id: 2,
    text: "MasterCard",
  },
  {
    id: 3,
    defaultChecked: true,
    text: "Paypal",
  },
];

export const ValidationFormData = [
  {
    text: "Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback.Background icons for ",
    code: "<select>",
  },
  {
    text: " s are only available with ",
    code: "form-select",
  },
  {
    text: " and not ",
    code: ".form-control.",
  },
];

export const ValidationFormInitialValue: FormValidationProp = { firstname: "", password: "", state: "", city: "", zip: "", payment: "", theme: "", file: "", description: "", terms: [] };

export const FormValidationSchema = Yup.object().shape({
  firstname: Yup.string().required("Please enter your valid"),
  password: Yup.string().required("Please enter your valid password"),
  state: Yup.string().required("Please select a valid state."),
  city: Yup.string().required("Please provide a valid city."),
  zip: Yup.string().required("Please provide a valid zip."),
  payment: Yup.string().required(),
  theme: Yup.string().required("Invalid select feedback"),
  file: Yup.string().required("Invalid form file selected"),
  description: Yup.string().required("Please enter a message in the textarea."),
  terms: Yup.array().min(1),
});

export const ValidationFormStateList = ["Choose...", "U.K", "India", "Thailand", "Newyork"];

export const ValidationStateList = ["Cuba", "Tivo", "Wingo"];

export const ValidationRadioList = [
  {
    id: 1,
    text: "MasterCard",
  },
  {
    id: 2,
    defaultChecked: true,
    text: "VISA",
  },
];

export const BasicFormData = [
    {
      text: "Use the ",
      code: ".form-label ",
    },
    {
      text: "and ",
      code: ".form-control ",
    },
    {
      text: "through create basic form.",
    },
  ];
  
  export const FloatingFormData = [
    {
      text: "Use the ",
      code: ".form-floating",
    },
    {
      text: " through create floating form.",
    },
  ];
  
  export const SizingFormData = [
    {
      code: ".form-select",
    },
    {
      text: " to trigger the custom styles. You may also choose from small and large custom selects to match our similarly sized text inputs. class:- ",
      code: "[form-select-lg/form-select-sm].",
    },
  ];
  
  export const SizingFormDataList = ["What's Your Hobbies", "Kho-kho", "Reading Books", "Creativity"];
  
  export const FormControlSizingData = [
    {
      text: "Set heights using classes like ",
      code: ".form-control-lg",
    },
    {
      text: " and ",
      code: ".form-control-sm",
    },
  ];
  
  export const FileInputData = [
    {
      text: "For default file/multiple file/disabled file/small file/large file input for use ",
      code: "<input>",
    },
    {
      text: " with ",
      code: "(type='file').",
    },
  ];
  
  export const FileInputDataList = [
    {
      label: "Default file input example",
    },
    {
      label: "Multiple files input example",
      multiple: true,
    },
    {
      label: "Disabled file input example",
      disabled: true,
    },
  ];
  
  export const FlatInputTypeData = [
    {
      text: "Use the ",
      code: ".btn-square ",
    },
    {
      text: "through defined 0px border-radius.",
    },
  ];
  
  export const FlatInputStyleList = ["I", "II", "III", "IV", "V"];
  
  export const FlateStyleDataList = ["Landscape", "Portrait", "Oil Painting", "Abstract art", "Acrylic"];
  
  export const BasicHtmlInputControlData = [
    {
      text: "Give textual form controls like ",
      code: "<input>",
    },
    {
      text: " s and ",
      code: "<textarea>",
    },
    {
      text: "s an upgrade with custom styles, sizing, focus states, and more.",
    },
  ];
  
  export const DataInputList = ["San Francisco", "New York", "Seattle", "Los Angeles", "Chicago", "India"];
  
  export const FloatingInputData = [
    {
      text: "Give textual form controls like ",
      code: "<input>",
    },
    {
      text: "s and ",
      code: "<textarea>",
    },
    {
      text: "s an upgrade with custom styles, sizing, focus states, and more.",
    },
  ];
  
  export const FloatingSelectType = ["Open this select menu", "I", "II", "II"];
  
  export const FloatingSelectTypeList = [
    {
      text: "Open this select menu",
    },
    {
      text: "One",
    },
    {
      text: "Two",
    },
    {
      text: "Three",
    },
  ];
  
  export const EdgeInputStyleData = [
    {
      text: "Use the ",
      code: ".btn-pill ",
    },
    {
      text: "through defined 0px border-radius.",
    },
  ];
  
  export const EdgeDataList = ["Tivo", "Cuba", "Roxo", "Oslo", "Voxo", "Sheltos", "Petkart", "Zeta"];
  
  export const RaisedInputStyleData = [
    {
      text: "Use the ",
      code: "input-air-* ",
    },
    {
      text: "through defined bottom box-shadow.",
    },
  ];
  
  export const RaisedDataList = ["Tivo", "Roxo", "Wingo", "Cuba", "Koho"];
  
  export const RaisedColorDataList = ["Red", "Yellow", "Orange", "White", "Black", "Gray", "Brown", "Purple", "White"];
  
export const DefaultCheckBoxData = [
    {
      text: "Use the ",
      code: ".form-check-input ",
    },
    {
      text: "and ",
      code: ".form-check-label ",
    },
    {
      text: "for checkbox.",
    },
  ];
  
  export const DefaultCheckBoxDataList = [
    {
      title: "Disabled Checks",
      span: [
        {
          id: "flexCheckDefault1",
          label: "Disabled checkbox",
          disabled: true,
        },
        {
          id: "flexCheckChecked2",
          label: "Disabled checked checkbox",
          disabled: true,
          defaultChecked: true,
        },
      ],
    },
    {
      title: "Right Checks",
      className: "form-check-reverse",
      span: [
        {
          id: "reverseCheck1",
          label: "Reverse checkbox",
        },
        {
          id: "reverseCheck2",
          label: "Disabled reverse checkbox",
          disabled: true,
          defaultChecked: true,
        },
      ],
    },
  ];
  
  export const CustomCheckboxData = [
    {
      text: "Use the ",
      code: ".form-check-input ",
    },
    {
      text: "and ",
      code: ".form-check-label ",
    },
    {
      text: "for checkbox. And filled checkbox used ",
      code: ".checkbox-solid-*",
    },
    {
      text: " and bordered checkbox used ",
      code: ".checkbox-*",
    },
  ];
  
  export const BorderCheckboxData = [
    {
      color: "secondary",
      text: "Secondary - checkbox-secondary",
    },
    {
      color: "success",
      text: "Success - checkbox-secondary",
    },
  ];
  
  export const CustomCheckboxList = [
    {
      id: 1,
      icon: "user",
      text: "User",
      defaultChecked: true,
    },
    {
      id: 2,
      icon: "tags",
      text: "Tags",
    },
    {
      id: 3,
      icon: "android",
      text: "Android",
    },
    {
      id: 4,
      icon: "slash",
      text: "Hidden",
    },
    {
      id: 5,
      icon: "folder-open",
      text: "Folder",
    },
    {
      id: 6,
      icon: "paper-plane",
      text: "Send",
    },
    {
      id: 7,
      icon: "cloud-upload",
      text: "Upload",
    },
  ];
  
  export const FillCheckboxList = [
    {
      id: 1,
      text: "Danger - checkbox-solid-danger",
      color: "danger",
    },
    {
      id: 2,
      text: "Info - checkbox-solid-info",
      color: "info",
    },
  ];
  
  export const DefaultRadioData = [
    {
      text: "Use the ",
      code: ".form-check-input ",
    },
    {
      text: "and ",
      code: ".form-check-label ",
    },
    {
      text: "for radios.",
    },
  ];
  
  export const DefaultRadioDataList = [
    {
      title: "Disabled Radios",
      span: [
        {
          id: "flexRadioDisabled",
          label: "Disabled radio",
          disabled: true,
        },
        {
          id: "flexRadioCheckedDisabled",
          label: "Disabled checked radio",
          disabled: true,
          defaultChecked: true,
        },
      ],
    },
    {
      title: "Right Radios",
      className: "form-check-reverse",
      span: [
        {
          id: "flexRadioDefault3",
          label: "Default radio",
        },
        {
          id: "flexRadioCheckedDisabled1",
          label: "Disabled checked radio",
          disabled: true,
          defaultChecked: true,
        },
      ],
    },
  ];
  
  export const ImageWithCheckboxData = [
    {
      text: "Use the ",
      code: ".form-check-input ",
    },
    {
      text: "and ",
      code: ".form-check-label ",
    },
    {
      text: "for image checkbox.",
    },
  ];
  
  export const ImageWithCheckboxDataList = [
    {
      id: "img-check-2",
      src: "2",
      label: "Checked Image",
      defaultChecked: true,
      alt: "tree",
    },
    {
      id: "img-check-3",
      src: "3",
      label: "Disable Image",
      disabled: true,
      alt: "flowers",
    },
    {
      id: "img-check-4",
      src: "4",
      label: "Disable Checked Image",
      alt: "rose-tea",
      disabled: true,
      defaultChecked: true,
    },
  ];
  
  export const ImageWithRadioData = [
    {
      text: "Use the ",
      code: ".form-check-input ",
    },
    {
      text: "and ",
      code: ".form-check-label ",
    },
    {
      text: "for image radio.",
    },
  ];
  
  export const ImageWithRadioDataList = [
    {
      id: "img-radio-2",
      src: "6",
      label: "Checked Image",
      defaultChecked: true,
      alt: "tree",
    },
    {
      id: "img-radio-3",
      src: "7",
      label: "Disable Image",
      disabled: true,
      alt: "flowers",
    },
    {
      id: "img-radio-4",
      src: "8",
      label: "Disable Checked Image",
      alt: "rose-tea",
      disabled: true,
      defaultChecked: true,
    },
  ];
  
  export const CustomRadioData = [
    {
      text: "Use the ",
      code: ".form-check-input ",
    },
    {
      text: "and ",
      code: ".form-check-label ",
    },
    {
      text: "for radios.",
    },
  ];
  
  export const BorderedRadioData = [
    {
      id: "radio55",
      color: "success",
      text: "Roxo Theme ",
    },
    {
      id: "radio33",
      color: "warning",
      text: "Voxo Theme",
    },
    {
      id: "radio66",
      color: "info",
      text: "Zeta Theme",
    },
  ];
  
  export const CustomRadioList = [
    {
      id: 1,
      icon: "eye-slash",
      text: "Hidden",
      defaultChecked: true,
    },
    {
      id: 2,
      icon: "folder-open",
      text: "Folder",
    },
    {
      id: 3,
      icon: "paper-plane",
      text: "Send",
    },
    {
      id: 4,
      icon: "user",
      text: "User",
    },
    {
      id: 5,
      icon: "trash-o",
      text: "Trash",
    },
    {
      id: 6,
      icon: "github",
      text: "Github",
    },
    {
      id: 7,
      icon: "play-circle",
      text: "Play",
    },
  ];
  
  export const FillRadioList = [
    {
      id: 1,
      text: "Order history",
      color: "warning",
    },
    {
      id: 2,
      text: "Invoice",
      color: "danger",
    },
    {
      id: 3,
      text: "Wishlist",
      color: "info",
    },
  ];
  
  export const DefaultSwitchData = [
    {
      text: "Use the ",
      code: ".form-switch",
    },
    {
      text: " and ",
      code: ".form-check-label ",
    },
    {
      text: "for switches.",
    },
  ];
  
  export const DefaultSwitchDataList = [
    {
      title: "Disabled Switches",
      span: [
        {
          id: "flexSwitchCheckDisabled",
          label: "Disabled switch checkbox input",
          disabled: true,
        },
        {
          id: "flexSwitchCheckCheckedDisabled",
          label: "Disabled checked switch checkbox input",
          disabled: true,
          defaultChecked: true,
        },
      ],
    },
    {
      title: "Right Switches",
      className: "form-check-reverse",
      inputClass: "ms-2",
      span: [
        {
          id: "flexSwitchCheckReverse",
          label: "Reverse switch checkbox input",
        },
        {
          id: "flexSwitchCheckDisabled1",
          label: "Disabled switch checkbox input",
          disabled: true,
          defaultChecked: true,
        },
      ],
    },
  ];
  
  export const InlineInputData = [
    {
      text: "Group checkboxes or radios on the same horizontal row by adding ",
      code: ".form-check-inline ",
    },
    {
      text: "to any",
      code: ".form-check.",
    },
  ];
  
  export const InlineCheckboxData = [
    {
      id: "inlineCheckbox2",
      text: "II",
    },
    {
      id: "inlineCheckbox3",
      text: "III (disabled)",
      disabled: true,
    },
  ];
  
  export const InlineRadioData = [
    {
      id: "inlineRadio2",
      text: "2",
    },
    {
      id: "inlineRadio3",
      text: "3 (disabled)",
      disabled: true,
    },
  ];
  
  export const InlineSwitchData = [
    {
      id: "flexSwitchCheckDefault3",
    },
    {
      id: "flexSwitchCheckDisabled3",
      disabled: true,
    },
  ];
  
  export const AnimatedButtonData = [
    {
      text: "Use the ",
      code: ".radio_animated ",
    },
    {
      text: "through animated checkbox and radios.",
    },
  ];
  
  export const AnimatedPaymentData = [
    {
      id: "edo-ani1",
      text: "MasterCard",
    },
    {
      id: "edo-ani2",
      text: "Paypal",
      defaultChecked: true,
    },
    {
      id: "edo-ani13",
      text: "G-pay",
    },
    {
      id: "edo-ani6",
      text: " Bitpay",
    },
  ];
  
  export const AnimatedSocialData = [
    {
      id: "chk-ani1",
      text: "Facebook",
    },
    {
      id: "chk-ani2",
      text: "Whatsapp",
      defaultChecked: true,
    },
    {
      id: "chk-ani4",
      text: "Twitter",
    },
  ];
  
  export const BasicRadioCheckboxData = [
    {
      text: "Use the ",
      code: ".form-check-input ",
    },
    {
      text: "through display inline.",
    },
  ];
  
  export const BasicRadioCheckboxDataList = [
    {
      id: "inline-2",
      text: "Gallery",
      defaultChecked: true,
    },
    {
      id: "inline-3",
      text: "Faq",
    },
    {
      id: "inline-4",
      text: "Email",
    },
    {
      id: "inline-5",
      text: "Icons",
    },
  ];
  
  export const BasicRadioDataList = [
    {
      id: "radioinline2",
      text: "Tasks",
    },
    {
      id: "radioinline3",
      text: " To-do",
    },
    {
      id: "radioinline4",
      text: "Forms",
    },
    {
      id: "radioinline5",
      text: "Login",
    },
  ];
  
  export const RadioToggleData = [
    {
      text: "The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button. ",
      code: "[any one selected].",
    },
  ];
  
  export const RadioToggleDataList = [
    {
      id: "option2",
      text: "Radio",
    },
    {
      id: "option3",
      text: "Disabled",
      disabled: true,
    },
    {
      id: "option4",
      text: "Radio",
    },
  ];
  
  export const OutlineCheckboxData = [
    {
      text: "The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button. ",
      code: "[multiple selected].",
    },
  ];
  
export const ButtonAddonData = [
  {
    text: "Multiple add-ons are supported and can be mixed with buttons input versions.",
  },
];

export const CustomFormData = [
  {
    text: "Input groups include support for ",
    code: "custom selects and custom file inputs",
  },
  {
    text: ". Browser default versions of these are not supported.",
  },
];

export const PixelData = ["Tivo", "Cuba", "Roxo"];

export const ColorData  = ["Yellow", "Red", "Orange"];

export const ChocolateData = ["Dark Chocolates", "Dairy Milk", "Kitkat"];

export const FavoriteThemeData = ["Oslo", "Koho", "Voxo"];

export const CustomeFileInputData = [
  {
    text: "Input groups include support for custom selects and custom ",
    code: "file uploads",
  },
  {
    text: ". Browser default versions of these are not supported.",
  },
];

export const ButtonWithDropdownData = [
  {
    text: "Use the",
    code: ".input-group ",
  },
  {
    text: "and ",
    code: "[aria-label='']",
  },
  {
    text: " through buttons with dropdowns",
  },
];

export const ButtonWithDropOne = ["Ecommerce", "Email", "Users", "Bookmarks"];

export const ButtonWithDropTwo = ["Starter kit", "Gallery", "Blog", "Maps"];

export const ButtonWithDropThird = ["Widgets", "Project", "Contacts", "Tasks"];

export const ButtonWithDropForth = ["To-Do", "FAQ", "Knowledgebase", "Support Ticket"];

export const SegmentButtonData = [
  {
    text: "Multiple add-ons are supported and can be mixed with",
    code: " dropdowns",
  },
  {
    text: " versions.",
  },
];

export const SegmentDataOne = ["Learning", "Editors", "Users", "Social App"];

export const SegmentDataTwo = ["Search Result", "Tasks", "Projects", "Animation"];

export const CheckAndRadioData = [
  {
    text: "Place any checkbox or radio option within an input group's addon instead of text. We recommend adding ",
    code: ".mt-0",
  },
  {
    text: " to the ",
    code: ".form-check-input",
  },
  {
    text: " when there's no visible text next to the input.",
  },
];

export const SizingDatas = [
  {
    text: "Add the relative form sizing classes to the",
    code: " .input-group",
  },
  {
    text: " itself and contents within will automatically resize—no need for repeating the form control size classes on each element.",
  },
];

export const MultipleInputData = [
  {
    text: "While multiple ",
    code: "<input>",
  },
  {
    text: " itself and contents within will automatically resize—no need for repeating the form control size classes on each element.",
    code: "<input>.",
  },
];

export const BasicInputGroupData = [
  {
    text: "lace one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place ",
    code: "<label>",
  },
  {
    text: "s outside the input group.",
  },
];

export const VariationOfAddonData = [
    {
      text: "Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place ",
      code: "<label>",
    },
    {
      text: "s outside the input group.",
    },
  ];

  export const InputMaskData = [
    {
      text: "Input Mask Used In Form-Validations,Forms,Card-Details,And Etc.",
    },
    
  ];

export const VariationRadioData = [
  {
    text: "Use the ",
    code: "radio ",
  },
  {
    text: "attribute through create variation of radio designs.",
  },
];

export const VariationRadioDataList = [
  {
    colClass: "col-md-6",
    title: "Select your payment method",
    child: [
      {
        id: 1,
        labelText: "BOB",
        image: "ecommerce/card.png",
        name: "radio1",
      },
      {
        id: 2,
        labelText: "MasterCard",
        image: "ecommerce/mastercard.png",
        check: "checked",
        name: "radio1",
        defaultChecked:true,
      },
      {
        id: 3,
        labelText: "Paypal",
        image: "ecommerce/paypal.png",
        name: "radio1",
      },
      {
        id: 4,
        labelText: "VISA",
        image: "ecommerce/visa.png",
        name: "radio1",
      },
    ],
  },
  {
    colClass: "col-md-6",
    title: "What are the most important things to learn about web design?",
    child: [
      {
        id: 5,
        labelText: "A. HTML",
        name: "radio2",
      },
      {
        id: 6,
        labelText: "B. CSS",
        name: "radio2",
      },
      {
        id: 7,
        labelText: "C. Javascript",
        defaultChecked:true,
        name: "radio2",
      },
      {
        id: 8,
        labelText: "D. Above the all",
        name: "radio2",
      },
    ],
  },
  {
    title: "Radios With Creative Options & SVG Icons",
    child: [
      {
        id: 9,
        labelText: "The notification icon displayed new messages.",
        icon: "notification",
        iconColor: "danger",
        name: "radio3",
      },
      {
        id: 10,
        labelText: "The download icon indicated completion.",
        icon: "stroke-calendar",
        iconColor: "success",
        name: "radio3",
      },
      {
        id: 11,
        labelText: "The tag icon allowed easy categorization.",
        icon: "tag",
        iconColor: "stroke-dark",
        check: "checked",
        name: "radio3",
        defaultChecked:true,
      },
      {
        id: 12,
        labelText: "The email icon was inaccessibly located.",
        icon: "stroke-email",
        iconColor: "primary",
        name: "radio3",
      },
    ],
  },
];

export const VariationCheckboxData = [
  {
    text: "We can create any creative design by using ",
    code: "(type='checkbox')",
  },
  {
    text: "attribute.",
  },
];

export const VariationCheckboxDataList = [
  {
    id: 1,
    color: "success",
    labelText: "Reading",
  },
  {
    id: 2,
    color: "success",
    labelText: "Watching TV",
    check: true,
  },
  {
    id: 3,
    color: "danger",
    labelText: "Listening to music",
  },
  {
    id: 4,
    color: "danger",
    labelText: "Playing video games",
  },
  {
    id: 5,
    color: "success",
    labelText: "Painting/Drawing",
  },
];

export const UpgradeVariationData = [
  {
    id: 1,
    text: "Voxo",
    sales: "270 Sales",
  },
  {
    id: 2,
    text: "Cuba",
    sales: "4.8K Sales",
  },
  {
    id: 3,
    text: "Multikart",
    sales: "2.6k Sales",
  },
  {
    id: 4,
    text: "Viho",
    sales: "2k Sales",
    check: true,
  },
];

export const MegaOptionDefaultData = [
  {
    text: "This option is show by default you don't need to add any extra class.",
  },
];

export const DefaultFormData = [
  {
    id: 1,
    color: "primary",
    badgeTitle: "COD",
    digits: "50 INR",
    shipingText: "Estimated 2 Day Shipping ( Duties end tax may be due delivery )",
  },
  {
    id: 2,
    color: "secondary",
    badgeTitle: "Fast",
    digits: "100 INR",
    shipingText: "Estimated 1 Day Shipping ( Duties end tax may be due delivery )",
  },
];

export const WithoutBorderData = [
  {
    text: "By adding ",
    code: ".plain-style ",
  },
  {
    text: "class to",
    code: " .mega-inline",
  },
  {
    text: "you can archive this style.",
  },
];

export const WithoutBorderDataList = [
  {
    id: 1,
    color: "warning",
    badgeTitle: "$39",
    digits: "100 MBPS",
    plansText: "Plans for 2/4/6 months are offered to new clients.",
    check: true,
  },
  {
    id: 2,
    color: "info",
    badgeTitle: "$50",
    digits: "Hired",
    plansText: "Plans for 2 years projects offered to new clients.",
  },
];

export const SolidBorderStyleData = [
  {
    text: "Use the ",
    code: ".offer-style ",
  },
  {
    text: "class to",
    code: " .mega-inline",
  },
  {
    text: "you can archive this style.",
  },
];

export const SolidBorderStyleDataList = [
  {
    id: 1,
    image: "blog/img.png",
    spanText: "We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration.",
  },
  {
    id: 2,
    image: "blog/blog.jpg",
    spanText: "When someone visits your homepage, your design should inspire them to stay. Therefore, your value proposition should be established on the homepage for visitors.",
  },
];

export const OfferBorderStyleData = [
  {
    text: "Use the ",
    code: ".offer-style ",
  },
  {
    text: "class to",
    code: " .mega-inline",
  },
  {
    text: " you can archive this style.",
  },
];

export const OfferBorderStyleDataList = [
  {
    id: 1,
    color: "success",
    image: "email-template/11.jpg",
    spanText: "Fruits are an essential part of a healthy diet, and offer many health benefits. They're packed with vitamins, minerals, and fiber, which can help improve digestion.",
  },
  {
    id: 2,
    color: "danger",
    image: "email-template/10.jpg",
    spanText: "Flowers have long been used to express feelings and sentiments, and each bloom has its own distinct significance. For instance, while daisies signify innocence and purity.",
    check: true,
  },
];

export const InlineStyeData = [
  {
    text: "For Create inline megaoption add ",
    code: ".mega-inline",
  },
  {
    text: " class in form tag",
  },
];

export const InlineStyeDataList = [
  {
    id: 1,
    color: "warning",
    badgeTitle: "COD",
    digits: "50 INR",
    shipingText: "Estimated 14-20 Day Shipping ( Duties end taxes may be due upon delivery )",
  },
  {
    id: 2,
    color: "secondary",
    badgeTitle: "Fast",
    digits: "100 INR",
    shipingText: "Estimated 1 Day Shipping ( Duties end tax may be due upon delivery )",
  },
  {
    id: 3,
    color: "secondary",
    badgeTitle: "Standard",
    digits: "80 INR",
    shipingText: "Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )",
  },
  {
    id: 4,
    color: "warning",
    badgeTitle: "Local",
    digits: "Free",
    shipingText: "Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )",
  },
];

export const VerticalStyleData = [
  {
    text: "vertical style in mega-options. Use the ",
    code: ".mega-vertical ",
  },
  {
    text: "class through created vertical alignments.",
  },
];

export const VerticalStyleDataList = [
  {
    megaTitle: "Delivery Option",
    child: [
      {
        id: 1,
        color: "primary",
        name: "radio5",
        mediaBodyClass: "megaoption-space",
        badgeTitle: "COD",
        digits: "50 INR",
        spanText: "Estimated 10 to 15 Day Shipping ( Duties end taxes may be due delivery )",
      },
      {
        id: 2,
        color: "secondary",
        name: "radio5",
        mediaBodyClass: "megaoption-space",
        badgeTitle: "Fast",
        digits: "100 INR",
        spanText: "Estimated 10 to 12 Day Shipping ( Duties end tax may be due delivery )",
      },
      {
        id: 3,
        color: "success",
        name: "radio5",
        mediaBodyClass: "megaoption-space",
        badgeTitle: "Standard",
        digits: "80 INR",
        spanText: "Estimated 3 to 5 Day Shipping ( Duties end taxes may be due delivery )",
      },
      {
        id: 4,
        color: "info",
        name: "radio5",
        mediaBodyClass: "megaoption-space",
        badgeTitle: "Local",
        digits: "Free",
        spanText: "Estimated 3 to 5 Day Shipping ( Duties end taxes may be due upon delivery )",
        check: true,
      },
    ],
  },
  {
    megaTitle: "Buying Option",
    child: [
      {
        id: 5,
        color: "warning",
        cardClass: "mb-0",
        name: "radio7",
        badgeTitle: "Pixelstrap",
        digits: "250 INR",
        check: true,
        spanClass: "rating-star-wrapper",
        star: [
          { id: 1, starClass: "txt-warning" },
          { id: 2, starClass: "txt-warning" },
          { id: 3, starClass: "txt-warning" },
          { id: 4, starClass: "txt-warning" },
          { id: 5, starClass: "txt-warning m-r-5" },
        ],
        spanText: "5 start rating",
      },
      {
        id: 6,
        color: "danger",
        cardClass: "mb-0",
        name: "radio7",
        badgeTitle: "Multikart",
        digits: "150 INR",
        spanClass: "rating-star-wrapper",
        star: [{ id: 1, starClass: "txt-warning" }, { id: 2, starClass: "txt-warning" }, { id: 3 }, { id: 4 }, { id: 5, starClass: "m-r-5" }],
        spanText: "2 start rating",
      },
    ],
  },
];

export const HorizontalStyleData = [
  {
    text: "horizontal style in mega-options. Use the ",
    code: ".mega-horizontal",
  },
  {
    text: "class through created vertical alignments.",
  },
];

export const HorizontalStyleDataList = [
  {
    megaTitle: "Delivery Option",
    child: [
      {
        id: 1,
        color: "primary",
        name: "radio22",
        mediaBodyClass: "megaoption-space",
        badgeTitle: "COD",
        digits: "50 INR",
        spanText: "Estimated 5 Day Shipping ( Duties end taxes may be due delivery )",
      },
      {
        id: 2,
        colClass: "offset-sm-3",
        color: "secondary",
        name: "radio22",
        mediaBodyClass: "megaoption-space",
        badgeTitle: "Fast",
        digits: "100 INR",
        spanText: "Estimated 1 Day Shipping ( Duties end tax may be due delivery )",
        check: true,
      },
    ],
  },
  {
    megaTitle: "Buying Option",
    child: [
      {
        id: 3,
        color: "success",
        name: "radios23",
        badgeTitle: "Pixelstrap",
        digits: "250 INR",
        spanClass: "rating-star-wrapper",
        star: [
          { id: 1, starClass: "txt-warning" },
          { id: 2, starClass: "txt-warning" },
          { id: 3, starClass: "txt-warning" },
          { id: 4, starClass: "txt-warning" },
          { id: 5, starClass: "txt-warning m-r-5" },
        ],
        spanText: "5 start rating",
      },
      {
        id: 4,
        colClass: "offset-sm-3",
        cardClass: "mb-0",
        color: "info",
        name: "radios23",
        badgeTitle: "Tivo",
        digits: "150 INR",
        check: true,
        spanClass: "rating-star-wrapper",
        star: [{ id: 1, starClass: "txt-warning" }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5, starClass: "m-r-5" }],
        spanText: "1 start rating",
      },
    ],
  },
];


export const TouchSpinData = [
  {
    text: "Use the ",
    code: ".decrement-touchspin ",
  },
  {
    text: "and ",
    code: ".increment-touchspin ",
  },
  {
    text: "class.",
  },
];

export const CustomSwitchData = [
  {
    text: "A switch has the markup of a custom checkbox but uses the .form-switch class to render a ",
    code: "toggle switch.",
  },
];

export const CustomSwitchDataList = [
  {
    id: 1,
    sm: "6",
    item: ["primary", "secondary", "success", "danger", "warning", "info", "dark"],
  },
  {
    id: 2,
    sm: "6",
    cardClass: "radius-none",
    formClass: "default-square",
    item: ["primary", "secondary", "success", "danger", "warning", "info", "dark"],
  },
  {
    id: 3,
    cardClass: "common-flex",
    disabled: true,
    item: ["primary", "secondary", "success", "danger", "warning", "info", "dark"],
  },
];

export const IconSwitchData = [
  {
    text: "Use the ",
    code: ".switch-state ",
  },
  {
    text: "and ",
    code: "icon-state ",
  },
  {
    text: "through defined icons switches.",
  },
];

export const IconSwitchDataList = [
  {
    color: "primary",
    text: "Primary Switch",
  },
  {
    color: "secondary",
    text: "Secondary Switch",
  },
  {
    color: "success",
    text: "Success Switch",
  },
  {
    color: "danger",
    text: "Danger Switch",
  },
  {
    color: "warning",
    text: "Warning Switch",
  },
  {
    color: "info",
    text: "Info Switch",
  },
  {
    color: "dark",
    text: "Dark Switch",
  },
];

export const UncheckedSwitchData = [
  {
    text: "Use the ",
    code: ".bg-*",
  },
  {
    text: " class through created default switches. ",
  },
];

export const UncheckedSwitchDataList = [
  {
    color: "primary",
    text: "Unchecked Primary Switch",
  },
  {
    color: "secondary",
    text: "Unchecked Secondary Switch",
  },
  {
    color: "success",
    text: "Unchecked Success Switch",
  },
  {
    color: "danger",
    text: "Unchecked Danger Switch",
  },
  {
    color: "warning",
    text: "Unchecked Warning Switch",
  },
  {
    color: "info",
    text: "Unchecked Info Switch",
  },
  {
    color: "dark",
    text: "Unchecked Dark Switch",
  },
];

export const BorderIconSwitchData = [
  {
    text: "Use the ",
    code: ".switch-state ",
  },
  {
    text: "and ",
    code: "icon-state ",
  },
  {
    text: " class through created outline and icons. ",
  },
];

export const BorderIconSwitchDataList = [
  {
    color: "primary",
    text: "Bordered Primary Switch",
  },
  {
    color: "secondary",
    text: "Bordered Secondary Switch",
  },
  {
    color: "success",
    text: "Bordered Success Switch",
  },
  {
    color: "danger",
    text: "Bordered Danger Switch",
  },
  {
    color: "warning",
    text: "Bordered Warning Switch",
  },
  {
    color: "info",
    text: "Bordered Info Switch",
  },
  {
    color: "dark",
    text: "Bordered Dark Switch",
  },
];

export const DisableOutlineSwitchData = [
  {
    text: "Use the ",
    code: ".switch-outline ",
  },
  {
    text: " class through created outline. ",
  },
];

export const DisableOutlineSwitchDataList = ["primary", "secondary", "success", "danger", "warning", "info", "dark"];

export const VariationSwitchData = [
  {
    text: "Use the ",
    code: ".tgl-skewed/tgl-flip",
  },
  {
    text: " class through created variations. ",
  },
];

export const VariationSwitchDataList = [
  {
    id: "cb3",
    inputClass: "tgl-skewed",
    text: "Skewed",
    offData:"OFF",
    onData:"ON"
  },
  {
    id: "cb5",
    inputClass: "tgl-flip",
    text: "Flip",
    offData:"Nope",
    onData:"Yeah!"
  },
];

export const VariationSwitchList = [
  {
    inputClass: "tgl-skewed",
    text: "Checked",
    flexClass: "icon-state",
    color: "warning",
  },
  {
    inputClass: "tgl-flip",
    text: "Flat",
    color: "success",
  },
];

export const SwitchSizingData = [
  {
    text: "Use the ",
    code: ".switch-sm ",
  },
  {
    text: "and ",
    code: ".switch-lg ",
  },
  {
    text: "class through defined switch sizing.",
  },
];

export const SwitchSizingDataList = [
  {
    label: "Small Size",
    flexClass: "switch-sm",
    defaultChecked: true,
  },
  {
    label: "Small Size Unhecked",
    flexClass: "switch-sm",
  },
  {
    label: "Normal Size",
    defaultChecked: true,
  },
  {
    label: "Normal Unhecked",
  },
  {
    label: "Disabled State",
    disabled: true,
  },
  {
    label: "Large Size",
    flexClass: "switch-lg",
    defaultChecked: true,
  },
  {
    label: "Large Unhecked",
    flexClass: "switch-lg",
  },
  {
    label: "Disabled",
    flexClass: "switch-lg",
    disabled: true,
  },
];

export const SwitchIconData = [
  {
    text: "Use the ",
    code: ".icon-state",
  },
  {
    text: " class through visible icons in switches",
  },
];

export const SwitchIconDataList = [
  {
    label: "Small Size",
    flexClass: "switch-sm",
    defaultChecked: true,
  },
  {
    label: "Small Size Unhecked",
    flexClass: "switch-sm",
  },
  {
    label: "Normal Size",
    defaultChecked: true,
  },
  {
    label: "Normal Unhecked",
  },
  {
    label: "Disabled State",
    disabled: true,
  },
  {
    label: "Large Size",
    flexClass: "switch-lg",
    defaultChecked: true,
  },
  {
    label: "Large Unhecked",
    flexClass: "switch-lg",
  },
  {
    label: "Disabled",
    flexClass: "switch-lg",
    disabled: true,
  },
];

export const  DefaultTouchSpinData = [
  { id: 1, value: 0, color: "primary" },
  { id: 2, value: 2, color: "secondary" },
  { id: 3, value: 1, color: "success" },
  { id: 4, value: 8, color: "danger" },
  { id: 5, value: 3, color: "warning" },
  { id: 6, value: 9, color: "info" },
  { id: 7, value: 4, color: "dark" },
];

export const BasicTypeHeadData = [
  {
    text: "This is the simple demo for Typeahead.",
  },
];

export const StateOfUsa = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export const PreFetchData = [
  {
    text: "Prefetched data is fetched and processed on initialization",
  },
];

export const CountryDataList = [
  "Andorra",
  "United Arab Emirates",
  "Afghanistan",
  "Antigua and Barbuda",
  "Anguilla",
  "Albania",
  "Armenia",
  "Angola",
  "Antarctica",
  "Argentina",
  "American Samoa",
  "Austria",
  "Australia",
  "Aruba",
  "Åland",
  "Azerbaijan",
  "Bosnia and Herzegovina",
  "Barbados",
  "Bangladesh",
  "Belgium",
  "Burkina Faso",
  "Bulgaria",
  "Bahrain",
  "Burundi",
  "Benin",
  "Saint Barthélemy",
  "Bermuda",
  "Brunei",
  "Bolivia",
  "Bonaire",
  "Brazil",
  "Bahamas",
  "Bhutan",
  "Bouvet Island",
  "Botswana",
  "Belarus",
  "Belize",
  "Canada",
  "Cocos [Keeling] Islands",
  "Congo",
  "Central African Republic",
  "Republic of the Congo",
  "Switzerland",
  "Ivory Coast",
  "Cook Islands",
  "Chile",
  "Cameroon",
  "China",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Cape Verde",
  "Curacao",
  "Christmas Island",
  "Cyprus",
  "Czechia",
  "Germany",
  "Djibouti",
  "Denmark",
  "Dominica",
  "Dominican Republic",
  "Algeria",
  "Ecuador",
  "Estonia",
  "Egypt",
  "Western Sahara",
  "Eritrea",
  "Spain",
  "Ethiopia",
  "Finland",
  "Fiji",
  "Falkland Islands",
  "Micronesia",
  "Faroe Islands",
  "France",
  "Gabon",
  "United Kingdom",
  "Grenada",
  "Georgia",
  "French Guiana",
  "Guernsey",
  "Ghana",
  "Gibraltar",
  "Greenland",
  "Gambia",
  "Guinea",
  "Guadeloupe",
  "Equatorial Guinea",
  "Greece",
  "South Georgia and the South Sandwich Islands",
  "Guatemala",
  "Guam",
  "Guinea-Bissau",
  "Guyana",
  "Hong Kong",
  "Heard Island and McDonald Islands",
  "Honduras",
  "Croatia",
  "Haiti",
  "Hungary",
  "Indonesia",
  "Ireland",
  "Israel",
  "Isle of Man",
  "India",
  "British Indian Ocean Territory",
  "Iraq",
  "Iran",
  "Iceland",
  "Italy",
  "Jersey",
  "Jamaica",
  "Jordan",
  "Japan",
  "Kenya",
  "Kyrgyzstan",
  "Cambodia",
  "Kiribati",
  "Comoros",
  "Saint Kitts and Nevis",
  "North Korea",
  "South Korea",
  "Kuwait",
  "Cayman Islands",
  "Kazakhstan",
  "Laos",
  "Lebanon",
  "Saint Lucia",
  "Liechtenstein",
  "Sri Lanka",
  "Liberia",
  "Lesotho",
  "Lithuania",
  "Luxembourg",
  "Latvia",
  "Libya",
  "Morocco",
  "Monaco",
  "Moldova",
  "Montenegro",
  "Saint Martin",
  "Madagascar",
  "Marshall Islands",
  "Macedonia",
  "Mali",
  "Myanmar [Burma]",
  "Mongolia",
  "Macao",
  "Northern Mariana Islands",
  "Martinique",
  "Mauritania",
  "Montserrat",
  "Malta",
  "Mauritius",
  "Maldives",
  "Malawi",
  "Mexico",
  "Malaysia",
  "Mozambique",
  "Namibia",
  "New Caledonia",
  "Niger",
  "Norfolk Island",
  "Nigeria",
  "Nicaragua",
  "Netherlands",
  "Norway",
  "Nepal",
  "Nauru",
  "Niue",
  "New Zealand",
  "Oman",
  "Panama",
  "Peru",
  "French Polynesia",
  "Papua New Guinea",
  "Philippines",
  "Pakistan",
  "Poland",
  "Saint Pierre and Miquelon",
  "Pitcairn Islands",
  "Puerto Rico",
  "Palestine",
  "Portugal",
  "Palau",
  "Paraguay",
  "Qatar",
  "Réunion",
  "Romania",
  "Serbia",
  "Russia",
  "Rwanda",
  "Saudi Arabia",
  "Solomon Islands",
  "Seychelles",
  "Sudan",
  "Sweden",
  "Singapore",
  "Saint Helena",
  "Slovenia",
  "Svalbard and Jan Mayen",
  "Slovakia",
  "Sierra Leone",
  "San Marino",
  "Senegal",
  "Somalia",
  "Suriname",
  "South Sudan",
  "São Tomé and Príncipe",
  "El Salvador",
  "Sint Maarten",
  "Syria",
  "Swaziland",
  "Turks and Caicos Islands",
  "Chad",
  "French Southern Territories",
  "Togo",
  "Thailand",
  "Tajikistan",
  "Tokelau",
  "East Timor",
  "Turkmenistan",
  "Tunisia",
  "Tonga",
  "Turkey",
  "Trinidad and Tobago",
  "Tuvalu",
  "Taiwan",
  "Tanzania",
  "Ukraine",
  "Uganda",
  "U.S. Minor Outlying Islands",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vatican City",
  "Saint Vincent and the Grenadines",
  "Venezuela",
  "British Virgin Islands",
  "U.S. Virgin Islands",
  "Vietnam",
  "Vanuatu",
  "Wallis and Futuna",
  "Samoa",
  "Kosovo",
  "Yemen",
  "Mayotte",
  "South Africa",
  "Zambia",
  "Zimbabwe",
];

export const BloodHoundData = [
  {
    text: "Bloodhound offers advanced functionalities such as prefetching and backfilling with remote data.",
  },
];

export const RemoteTypeHeadData = [
  {
    text: "Remote data is only used when the data provided by local and prefetch is insufficient",
  },
];

export const MoviesList = [
  "Around the World in 80 Days",
  "All Quiet on the Western Front",
  "Gentleman's Agreement",
  "All the Kings Men",
  "All About Eve",
  "An American in Paris",
  "The Apartment",
  "The Broadway Melody",
  "Mutiny on the Bounty",
  "The Best Years of Our Lives",
  "The Bridge on the River Kwai",
  "Ben-Hur",
  "Cimarron",
  "Cavalcade",
  "You Can't Take It with You",
  "Casablanca",
  "The Life of Emile Zola",
  "The Greatest Show on Earth",
  "From Here to Eternity",
  "Grand Hotel",
  "The Great Ziegfeld",
  "Gone with the Wind",
  "How Green Was My Valley",
  "Going My Way",
  "Gigi",
  "It Happened One Night",
  "Hamlet",
  "Mrs. Miniver",
  "Marty",
  "Rebecca",
  "Wings",
];

export const CustomTemplateData = [
  {
    text: "Custom templates give you full control over how suggestions get rendered",
  },
];

export const OscarWinnerData = [
  "West Side Story",
  "Lawrence of Arabia",
  "Tom Jones",
  "My Fair Lady",
  "The Sound of Music",
  "A Man for All Seasons",
  "In the Heat of the Night",
  "Oliver!",
  "Midnight Cowboy",
  "Patton",
  "The French Connection",
  "The Godfather",
  "The Sting",
  "The Godfather Part II",
  "One Flew over the Cuckoo's Nest",
  "Rocky",
  "Annie Hall",
  "The Deer Hunter",
  "Kramer vs. Kramer",
  "Ordinary People",
  "Chariots of Fire",
  "Gandhi",
  "Terms of Endearment",
  "Amadeus",
  "Out of Africa",
  "Platoon",
  "The Last Emperor",
  "Rain Man",
  "Driving Miss Daisy",
  "Dances With Wolves",
  "The Silence of the Lambs",
  "Unforgiven",
  "Schindler’s List",
  "Forrest Gump",
  "Braveheart",
  "The English Patient",
  "Titanic",
  "Shakespeare in Love",
  "American Beauty",
  "Gladiator",
  "A Beautiful Mind",
  "Chicago",
  "The Lord of the Rings: The Return of the King",
  "Million Dollar Baby",
  "Crash",
  "The Departed",
  "No Country for Old Men",
  "Slumdog Millionaire",
  "The Hurt Locker",
  "The King's Speech",
  "The Artist",
  "Argo",
];

export const MultipleSectionHeaderData = [
  {
    text: "Two datasets that are prefetched, stored, and searched on the client. Highlighting is enabled.",
  },
];

export const MultiWithHeaderData = [
  { name: "NBA Teams", header: true },
  { name: "Boston Celtics" },
  { name: "Dallas Mavericks" },
  { name: "Brooklyn Nets" },
  { name: "Houston Rockets" },
  { name: "New York Knicks" },
  { name: "Memphis Grizzlies" },
  { name: "Philadelphia 76ers" },
  { name: "New Orleans Hornets" },
  { name: "Toronto Raptors" },
  { name: "San Antonio Spurs" },
  { name: "Chicago Bulls" },
  { name: "Denver Nuggets" },
  { name: "Cleveland Cavaliers" },
  { name: "Minnesota Timberwolves" },
  { name: "Detroit Pistons" },
  { name: "Portland Trail Blazers" },
  { name: "Indiana Pacers" },
  { name: "Oklahoma City Thunder" },
  { name: "Milwaukee Bucks" },
  { name: "Utah Jazz" },
  { name: "Atlanta Hawks" },
  { name: "Golden State Warriors" },
  { name: "Charlotte Bobcats" },
  { name: "Los Angeles Clippers" },
  { name: "Miami Heat" },
  { name: "Los Angeles Lakers" },
  { name: "Orlando Magic" },
  { name: "Phoenix Suns" },
  { name: "Washington Wizards" },
  { name: "Sacramento King" },
  { name: "", divider: true },
  { name: "NHL Teams", header: true },
  { name: "Boston Celtics" },
  { name: "Dallas Mavericks" },
  { name: "Brooklyn Nets" },
  { name: "Houston Rockets" },
  { name: "New York Knicks" },
  { name: "Memphis Grizzlies" },
  { name: "Philadelphia 76ers" },
  { name: "New Orleans Hornets" },
  { name: "Toronto Raptors" },
  { name: "San Antonio Spurs" },
  { name: "Chicago Bulls" },
  { name: "Denver Nuggets" },
  { name: "Cleveland Cavaliers" },
  { name: "Minnesota Timberwolves" },
  { name: "Detroit Pistons" },
  { name: "Portland Trail Blazers" },
  { name: "Indiana Pacers" },
  { name: "Oklahoma City Thunder" },
  { name: "Milwaukee Bucks" },
  { name: "Utah Jazz" },
  { name: "Atlanta Hawks" },
  { name: "Golden State Warriors" },
  { name: "Charlotte Bobcats" },
  { name: "Los Angeles Clippers" },
  { name: "Miami Heat" },
  { name: "Los Angeles Lakers" },
  { name: "Orlando Magic" },
  { name: "Phoenix Suns" },
  { name: "Washington Wizards" },
  { name: "Sacramento King" },
];

export const ScrollableDropdownData = [
  {
    text: "Dataset shows in scrollable dropdown menu.",
  },
];

export const RtlSupportData = [
  {
    text: "Dataset shows in Right Side.",
  },
];

export const ModalOneDatas = [
  {
    iconClassName: "fa-spin fa-cog",
    title: "2FA Authenticator",
    description: "Obtain codes from a authy/google authenticator/ios 15 etc.",
  },
  {
    iconClassName: "fa-comments",
    title: "SMS",
    description:
      "The backup login method will be sent to you via SMS if you require it.",
  }
]

export const NumberWizardData = [
  {
    text: "Fill up your details and proceed next steps.",
  },
];

export const BussinessVerticalData = [
    {
      activeTab: 1,
      title: "Choose account",
    },
    {
      activeTab: 2,
      title: "Business settings",
    },
    {
      activeTab: 3,
      title: "Contact details",
    },
    {
      activeTab: 4,
      title: "Pay details",
    },
    {
      title: "completed",
    },
  ];
  
  export const SelectAmountData = [
    {
      iconName: "fa-university",
      title: "Business",
    },
    {
      iconName: "fa-user",
      title: "Personal ",
    },
  ];

  export const VerticalBoxData = [
    {
      title: "Tivo",
      details: "2-3 Members",
    },
    {
      title: "Cuba",
      details: "4-5 Members",
    },
    {
      title: "Multikart",
      details: "2 Member",
    },
    {
      title: "Roxo",
      details: "1 Member",
    },
  ];

  export const PopulerBankList = [
    {
      imageName: "hdfc.png",
      bankName: "ABC BANK",
    },
    {
      imageName: "Bank-of-Baroda.png",
      bankName: "XYZ BANK",
    },
    {
      imageName: "idbi.png",
      bankName: "PQR BANK",
    },
    {
      imageName: "rbl.png",
      bankName: "DEF BANK",
    },
    {
      imageName: "us-bank.png",
      bankName: "MNO BANK",
    },
    {
      imageName: "axis.png",
      bankName: "WXY BANK",
    },
    {
      imageName: "SCB.png",
      bankName: "STD BANK",
    },
  ];

  export const CurrentCartData = [
    {
      imagePath: "product/13.png",
      productName: "T-shirt",
      productSum: "$98 * 2",
      price: "$400",
    },
    {
      imagePath: "email-template/4.png",
      productName: "Headphone",
      productSum: "$4*2",
      price: "$450",
    },
    {
      imagePath: "product/2.png",
      productName: "T-shirt ",
      productSum: "$10*2",
      price: "$234",
    },
    {
      imagePath: "dashboard-2/product/2.png",
      productName: "Chairs ",
      productSum: "$98*2",
      price: "$200",
    },
  ];

  export const CurrentCartFooter = [
    {
      footerTittle: "Sub Total :",
      price: "1284.00",
    },
    {
      footerTittle: "Discount :",
      price: "20.00",
    },
    {
      footerTittle: "Shipping Charge :",
      price: "100.78",
    },
    {
      footerTittle: "Tax :",
      price: "205.34",
    },
    {
      footerTittle: "Total (USD) :",
      price: "1569.7",
    },
  ];

  export const HomeAndOfficeData = [
    {
      value: "shipping-choose1",
      label: "Home",
      name: "Filomena Green ",
      address: "2211 Fruitville Rd, Sarasota, Florida, US 34237",
      contact: "(941) 321-5643",
    },
    {
      value: "shipping-choose2",
      label: "Work",
      name: "Ms. Ila Runte DDS",
      address: " 1531 E 23rd St S, Independence, Mississippi, US 64055",
      contact: "(816) 252-4500",
    },
  ];

  export const ShippingFormData = [
    {
      text: "Fill up your true details and next proceed.",
    },
  ];
  
  export const ShippingNavData = [
    {
      activeTab: 1,
      iconClassName: "fa-user",
      title: "Billing",
    },
    {
      activeTab: 2,
      iconClassName: "fa-truck",
      title: "Shipping",
    },
    {
      activeTab: 3,
      iconClassName: "fa-money",
      title: "Payment",
    },
    {
      iconClassName: "fa-check-square",
      title: "Finish",
    },
  ];

  export const ShippingMethodData = [
    {
      value: "standardDelivery",
      label: "Standard Delivery - Free",
      details: "Estimated 5-7 days shipping",
    },
    {
      value: "expressDelivery",
      label: "Express Delivery - $24",
      details: "Estimated 1-2 days shipping",
    },
  ];

  export const StudentValidationData = [
    {
      text: "Please make sure fill all the filed before click on next button.",
    },
  ];

  export const VerticalValidationData = [
    {
      text: "Fill up your true details and next proceed.",
    },
  ];
  
  export const VerticalWizardTabData = [
    {
      iconClassName: "fa-user",
      title: "Your Info",
      titleInforMation: "Add your details ",
    },
    {
      iconClassName: "fa-chain-broken",
      title: "Cart Info",
      titleInforMation: "Add your a/c details",
    },
    {
      iconClassName: "fa-group",
      title: "Net Banking",
      titleInforMation: "Choose your bank",
    },
  ];

  export const NetBankingList = [
    {
      bankList: ["Industrial & Commercial Bank", "Agricultural Bank", "JPMorgan Chase & Co."],
    },
    {
      bankList: ["Construction Bank Corp.", "Bank of America", "HDFC Bank"],
    },
  ];


  export const CustomHorizontalData = [
    {
      activeTab: 1,
      iconName: "fa-user",
      title: "Personal info",
    },
    {
      activeTab: 2,
      iconName: "fa-chain-broken",
      title: "Connect bank account",
    },
    {
      activeTab: 3,
      iconName: "fa-group",
      title: "Inquiries",
    },
    {
      iconName: "fa-group",
      title: "Completed ",
    },
  ];