import { BlogDropFilesHereOrClickToUpload } from "@/Constant";
import { Dropzone, ExtFile, FileMosaic } from "@dropzone-ui/react";
import { useState } from "react";

import { Form } from "reactstrap";

const DropzoneClass = () => {
  const [files, setFiles] = useState<ExtFile[]>([]);
  const updateFiles = (incomingFiles: ExtFile[]) => {
    setFiles(incomingFiles);
  };
  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));
  };

  return (
    <Form className="m-b-20">
      <Dropzone onChange={updateFiles} value={files} maxFiles={1} header={false} footer={false} label="Drag'n drop files here or click to Browse">
        {files.map((file: ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
        ))}
        {files.length === 0 && (
          <div className="dz-message needsclick">
            <i className="icon-cloud-up fs-1 txt-primary"></i>
            <h6 className="f-w-700 mb-1">Drop files here or click to upload.</h6>
            <h6 className="note needsclick">
              (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
            </h6>
          </div>
        )}
      </Dropzone>
    </Form>
  );
};

export default DropzoneClass;
