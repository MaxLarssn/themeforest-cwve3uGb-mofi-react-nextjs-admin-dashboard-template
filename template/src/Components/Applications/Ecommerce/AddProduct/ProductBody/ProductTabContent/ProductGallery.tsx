import { useState } from "react";
import { Dropzone, ExtFile, FileMosaic } from "@dropzone-ui/react";
import { setFormValue } from "@/Redux/Reducers/AddProductSlice";
import SVG from "@/CommonComponent/SVG";
import { DragFilesHere } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";

const ProductGallery = () => {
  const [files, setFiles] = useState<ExtFile[]>([]);
  const dispatch = useAppDispatch()
  
  const updateFiles = (incomingFiles: ExtFile[]) => {
    setFiles(incomingFiles);
    dispatch(setFormValue({name:"fileName1",value:incomingFiles[0].file?.name}))
  };

  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));
  };

  return (
    <div className="product-upload">
      <p>Product Gallery<span className="txt-danger"> *</span></p>
      <Dropzone onChange={(files)=>updateFiles(files)} value={files} maxFiles={1} header={false} footer={false} minHeight="80px" name="fileName1">
        {files.map((file: ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
        ))}
        {files.length === 0 && (
          <div className="dz-message needsclick">
            <SVG iconId="file-upload1" />
            <h5>{DragFilesHere}</h5>
            <span className="note needsclick">Add Product Gallery Images</span>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default ProductGallery;
