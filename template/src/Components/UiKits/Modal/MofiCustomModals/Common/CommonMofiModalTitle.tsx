import { CommonMofiModalTitleType } from "@/Types/UikitsType";

export const CommonMofiModalTitle: React.FC<CommonMofiModalTitleType> = ({ heading, subHeading, text }) => {
  return (
    <>
      <ul className="simple-list d-flex dot-group pb-3 pt-0">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="title-wrapper pb-3 modal-heading">
        <h4 className="theme-name mb-0">
          <span>{heading}</span>
          {subHeading}
        </h4>
        <p>{text}</p>
      </div>
    </>
  );
};
