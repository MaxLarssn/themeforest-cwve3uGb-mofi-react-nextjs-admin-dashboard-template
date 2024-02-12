import ProductGallery from "./ProductGallery";
import { useState } from "react";
import { Dropzone, ExtFile, FileMosaic } from "@dropzone-ui/react";
import { useAppDispatch } from "@/Redux/Hooks";
import { setFormValue } from "@/Redux/Reducers/AddProductSlice";
import SVG from "@/CommonComponent/SVG";
import Link from "next/link";
import { Href } from "@/Constant";

const ProductTwo = () => {
  const [files, setFiles] = useState<ExtFile[]>([]);
  const dispatch = useAppDispatch()

    const updateFiles = (incomingFiles: ExtFile[]) => {
      setFiles(incomingFiles);
      dispatch(setFormValue({name:"fileName",value:incomingFiles[0].file?.name}))
    };

    const removeFile = (id: string | number | undefined) => {
      setFiles(files.filter((x: ExtFile) => x.id !== id));
    };

  return (
    <div className="sidebar-body">
      <div className="product-upload">
        <p>Product Image<span className="txt-danger"> *</span> </p>
        <Dropzone onChange={(files)=>updateFiles(files)} value={files} maxFiles={1} header={false} footer={false} minHeight="80px" name="fileName">
          {files.map((file: ExtFile) => (
            <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
          ))}
          {files.length === 0 && (
            <div className="dz-message needsclick">
              <SVG iconId="file-upload" />
              <h5>Drag your image here, or
                <Link className="txt-primary" href={Href}>&nbsp;browser</Link>
              </h5>
              <span className="note needsclick">SVG,PNG,JPG or GIF</span>
            </div>
          )}
        </Dropzone>
      </div>
      <ProductGallery />
    </div>
  );
};

export default ProductTwo;
