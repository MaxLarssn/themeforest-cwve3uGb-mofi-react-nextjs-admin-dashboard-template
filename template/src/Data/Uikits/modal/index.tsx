import { ArrowDownRight, ArrowUpRight } from "react-feather";
import * as Yup from "yup";

export const BasicData = [
    {
      text: "Different types of basic modals using like ",
      code: "simple/scrolling/tooltips/grid/varying modal.",
    },
  ];
  
  export const ScrollingWebData = [
    {
      text: "As a web designer, you either prefer to work freelance for several different businesses at once or you may choose to work for just one. In either case, you'll need good time management skills to keep several projects moving forward.",
    },
    {
      text: "Although a designer doesn't write the code that makes a site work, it doesn't hurt to have a basic understanding of HTML or CSS to make minor adjustments to a site. You'll find it simpler to edit templates, improve typefaces, or change item placements if you have a basic understanding of how things work.",
    },
    {
      text: "Most businesses employ a certain font or typography so that clients can quickly distinguish them from their rivals. Since designers now have access to a wider variety of fonts, firms may more easily and precisely communicate their brands through typography.",
      className: "pb-4",
    },
  ];
  
  export const ScrollingUxData = ["Create solutions that will be helpful for the issues and situations that exist right now, not for those that will. With the right materials, assist people in organizing their time, completing things more quickly, and optimizing it.", "Based on the data received from users, improve them. Adapt existing solutions to the requirements, hopes, difficulties, and expectations of users.", "Keep in mind that you are creating solutions to particular challenges for a particular population living in a particular habitat. Always remember to correctly contextualise your thoughts and determine whether they are actually appropriate for the situation. It's sometimes necessary to concede that a digital solution is not the most appropriate choice in a certain circumstance."];
  
  export const SizeDatas = [
    {
      text: "Modals have three optional sizes, available via modifier classes to be placed on a ",
      code: ".modal-dialo",
    },
  ];
  
  export const FullScreenData = [
    {
      title: "Content Marketing ",
      text: "Through better opportunities and knowledgeable marketing strategies, we aid business funnel. We won't only hit the target; instead, we'll aim higher and surpass the objectives.",
    },
  
    {
      title: "PPC ",
      text: "Customized advertising to increase visitors and improve conversion. To increase retention, identify the correct audience and remarket to them.",
    },
    {
      title: "UX Designer ",
      text: "The capacity to comprehend and experience other people's feelings is known as empathy. A positive consumer experience is prioritised by UX. The finest UX designers spend time studying individuals and their tendencies because of this. Designers may produce goods that genuinely engage and excite customers by having a thorough understanding of the end consumers.",
    },
  ];
  
  export const LargeData = ["How will you evaluate your level of success?", "Can you accomplish it with the available resources?", "Does it advance your core business aims?"];
  
  export const SmallData = [
    {
      title: "Content Marketing ",
      text: "Through better opportunities and knowledgeable marketing strategies, we aid business funnel. We won't only hit the target; instead, we'll aim higher and surpass the objectives.",
    },
  
    {
      title: "PPC ",
      text: "Customized advertising to increase visitors and improve conversion. To increase retention, identify the correct audience and remarket to them.",
    },
  ];
  
  export const FullScreenModalData = [
    {
      text: "Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a",
      code: " .modal-dialog.",
    },
  ];
  
  export const FullScreenModalList = ["As a web designer, you either prefer to work freelance for several different businesses at once or you may choose to work for just one. In either case, you'll need good time management skills to keep several projects moving forward.", "Although a designer doesn't write the code that makes a site work, it doesn't hurt to have a basic understanding of HTML or CSS to make minor adjustments to a site. You'll find it simpler to edit templates, improve typefaces, or change item placements if you have a basic understanding of how things work.", "Most businesses employ a certain font or typography so that clients can quickly distinguish them from their rivals. Since designers now have access to a wider variety of fonts, firms may more easily and precisely communicate their brands through typography."];
  
  export const FullScreenUxList = ["Create solutions that will be helpful for the issues and situations that exist right now, not for those that will. With the right materials, assist people in organizing their time, completing things more quickly, and optimizing it.", "Based on the data received from users, improve them. Adapt existing solutions to the requirements, hopes, difficulties, and expectations of users.", "Keep in mind that you are creating solutions to particular challenges for a particular population living in a particular habitat. Always remember to correctly contextualise your thoughts and determine whether they are actually appropriate for the situation. It's sometimes necessary to concede that a digital solution is not the most appropriate choice in a certain circumstance."];
  
  export const CommonWebData = [
    {
      title: "For a site to be successful, a designer must be able to communicate their ideas, chat with a firm about what they want, and inquire about the target audience.",
      className: "mt-3",
    },
    {
      title: "Most businesses employ a certain font or typography so that clients can quickly distinguish them from their rivals. Since designers now have access to a wider variety of fonts, firms may more easily and precisely communicate their brands through typography.",
      className: "my-2",
      pClassName: "pb-1",
    },
  ];
  
  export const CommonUxList = ["User research, persona creation, building wireframes and interactive prototypes, and testing ideas are among the common tasks of a UX designer. These duties can differ greatly between organizations.", "Keep in mind that you are creating solutions to particular challenges for a particular population living in a particular habitat. Always remember to correctly contextualise your thoughts and determine whether they are actually appropriate for the situation. It's sometimes necessary to concede that a digital solution is not the most appropriate choice in a certain circumstance."];
  
  export const CenteredModalList = [
    {
      text: "Use the ",
      code: ".modal-dialog-centered ",
    },
    {
      text: "through centered modal. and set ",
      code: "data-bs-target.",
    },
  ];
  
  export const ToggleModalList = [
    {
      text: "Toggle between multiple modals with some clever placement of the ",
      code: "data-bs-target ",
    },
    {
      text: "and ",
      code: "data-bs-toggle",
    },
    {
      text: " attributes.",
    },
  ];
  
  export const StaticModalData = [
    {
      text: " When backdrop is set to static, the modal will not close when clicking outside of it. Click the button below to try it.",
    },
  ];
  
  export const CustomModalData = [
    {
      text: "Custom Modal make by Mofi.",
    },
  ];
  
  export const ProfileData = [
    {
      heading: "34.0k",
      data: "Followers",
    },
    {
      heading: "897",
      data: "Following",
    },
  ];
  
  export const BalanceData = [
    {
      title: "Investment ",
      text: "78.8K",
      data: "-11.67%",
      icon: <ArrowDownRight />,
      color:"danger",
    },
    {
      title: "Cash Back ",
      text: "19.7K",
      data: "+10.67%",
      icon: <ArrowUpRight />,
      color:"success",
    },
  ];
  
  export const FormSchema = Yup.object().shape({
      firstname: Yup.string().min(2, "Too Short!").max(15, "Too Long!").required(),
      lastname: Yup.string().min(2, "Too Short").max(15, "Too Long").required(),
      email: Yup.string().email().required(),
    });