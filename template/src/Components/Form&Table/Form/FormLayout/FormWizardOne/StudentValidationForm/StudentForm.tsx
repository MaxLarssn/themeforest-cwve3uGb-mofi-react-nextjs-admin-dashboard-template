import { Button, Form } from "reactstrap";
import { StudentTab2 } from "./StudentTab2";
import { StudentTab3 } from "./StudentTab3";
import { StudentTab1 } from "./StudentTab1";
import { handleStudentBackButton, handleStudentNextButton } from "@/Redux/Reducers/FormLayout/StudentWizardSlice";
import { StudentFormPropsType } from "@/Types/FormType";
import { useAppDispatch } from "@/Redux/Hooks";
import { Next, Previous } from "@/Constant";
import FinishForm from "../Common/FinishForm";


const StudentForm:React.FC<StudentFormPropsType> = ({ handleImageLabelClick, imageUrl, getUserData, studentValidationForm, level, fileInputRef }) => {
  const dispatch = useAppDispatch();

  return (
    <Form onSubmit={(e) => e.preventDefault()} className="form-wizard">
      <div className={`tab ${level === 1 ? "d-block" : "d-none"}`}>
        <StudentTab1 studentValidationForm={studentValidationForm}  getUserData={getUserData}/>
      </div>
      <div className={`tab ${level === 2 ? "d-block" : "d-none"}`}>
        <StudentTab2 studentValidationForm={studentValidationForm} getUserData={getUserData} fileInputRef={fileInputRef} handleImageLabelClick={handleImageLabelClick} imageUrl={imageUrl} level={level} />
      </div>
      <div className={`tab ${level === 3 ? "d-block" : "d-none"}`}>
        <StudentTab3 studentValidationForm={studentValidationForm} getUserData={getUserData} />
      </div>
      {level === 4 && <FinishForm />}
      <div>
        <div className="text-end pt-3">
          {level > 1 && (
            <Button color="secondary" onClick={() => dispatch(handleStudentBackButton())}>{Previous}</Button>
          )}
          <Button color="primary" className={`ms-1 ${level === 4 ? "disabled" : ""}`} onClick={() => dispatch(handleStudentNextButton())}>{Next}</Button>
        </div>
      </div>
    </Form>
  );
};

export default StudentForm;
