import { DropFilesHereOrClickToUpload } from "@/Constant";

const CommonFileBody = () => {
  return (
    <div className="dz-message needsclick">
      <i className="icon-cloud-up fs-1 txt-primary"></i>
      <h6>{DropFilesHereOrClickToUpload}</h6>
      <h6 className="note needsclick">
        (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
      </h6>
    </div>
  );
};

export default CommonFileBody;
