import { CardBody, Form } from "reactstrap";
import { Dropzone,ExtFile,FileMosaic,FileMosaicProps,FullScreen,ImagePreview, } from "@dropzone-ui/react";
import { useState } from "react";
import CommonFileBody from "./CommonFileBody";
import { CommonFileUploadProp } from "@/Types/ProjectType";

const CommonFileUpload :React.FC<CommonFileUploadProp> = ({ maxFiles, multiple, body }) => {
  const BASE_URL = "https://www.myserver.com";
  const [extFiles, setExtFiles] = useState<ExtFile[]>([]);
  const [imageSrc, setImageSrc] = useState<File | string | undefined>(undefined);

  const updateFiles = (incomingFiles:ExtFile[]) => {
    setExtFiles(incomingFiles)
  }
  const onDelete = (id:FileMosaicProps["id"]) => {
    setExtFiles(extFiles.filter((x) => x.id !== id))
  }
  const handleSee = (imageSource: File | string | undefined) => setImageSrc(imageSource);
  const handleAbort = (id:FileMosaicProps["id"]) => {
    setExtFiles(
      extFiles.map((ef) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: "aborted" };
        } else return { ...ef };
      })
    );
  };
  const handleCancel = (id:FileMosaicProps["id"]) => {
    setExtFiles(
      extFiles.map((ef) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: undefined };
        } else return { ...ef };
      })
    );
  };
  return (
    <CardBody>
      <Form>
        <Dropzone onChange={updateFiles} value={extFiles} maxFiles={maxFiles} multiple={multiple} uploadConfig={{ url: BASE_URL + "/file" }} header={false} footer={false} minHeight={body ? "180px" : "80px"} >
          {extFiles.map((file) => (<FileMosaic {...file} key={file.id} onDelete={onDelete} onSee={handleSee} onAbort={handleAbort} onCancel={handleCancel} resultOnTooltip alwaysActive preview />))}
          {extFiles.length===0 && <CommonFileBody/>}
        </Dropzone>
        <FullScreen open={imageSrc !== undefined} onClose={() => setImageSrc(undefined)}>
          <ImagePreview src={imageSrc} />
        </FullScreen>
      </Form>
    </CardBody>
  );
};

export default CommonFileUpload;
