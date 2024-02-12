import { CommonMofiModalTitleType } from "@/Types/UikitsType";

export const CommonRihoModalTitle: React.FC<CommonMofiModalTitleType> = ({ heading, subHeading, text }) => {
  return (
    <>
      <ul className="simple-list d-flex dot-group pb-3 pt-0">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="title-wrapper pb-3 modal-heading">
        <h5 className="theme-name mb-0">
          <span>{heading}</span>
          {subHeading}
        </h5>
        <p>{text}</p>
      </div>
    </>
  );
};
