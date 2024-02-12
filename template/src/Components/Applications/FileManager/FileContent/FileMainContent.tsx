import { CardBody } from "reactstrap";
import { Files } from "@/Constant";
import QuickAccess from "./QuickAccess";
import { FolderSection } from "./FolderSection";
import FileList from "./FileList";
import { FileMainContentPropsType } from "@/Types/FileManagerType";
import { useAppSelector } from "@/Redux/Hooks";

const FileMainContent :React.FC<FileMainContentPropsType> = ({ fileList }) => {
  const { searchTerm } = useAppSelector((state) => state.fileManager);

  return (
    <CardBody className="file-manager">
      {!searchTerm && (
        <>
          <QuickAccess />
          <FolderSection />
        </>
      )}
      <h5 className="mt-4">{Files}</h5>
      <FileList myFile={fileList}/>
    </CardBody>
  );
};

export default FileMainContent;
