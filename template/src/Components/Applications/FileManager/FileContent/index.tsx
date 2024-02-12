import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { ToastContainer } from "react-toastify";
import { Card, CardHeader } from "reactstrap";
import SearchBar from "../SearchBar";
import { FileContentButtonActions } from "./FileContentButtonActions";
import FileMainContent from "./FileMainContent";

const FileContent = () => {
  const { myFile, searchTerm } = useAppSelector((state) => state.fileManager);

  const fileList = myFile.filter((data) => {
    if (searchTerm == null) return data;
    if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) return data
  });

  return (
    <Card>
      <CardHeader>
        <div className="d-md-flex d-sm-block">
          <SearchBar />
          <FileContentButtonActions />
        </div>
      </CardHeader>
      {fileList.length ? <FileMainContent fileList={fileList} /> : <img className="img-fluid mx-auto my-4" src={`${ImagePath}/search-not-found.png`} alt="image" />}
      <ToastContainer />
    </Card>
  );
};

export default FileContent;
