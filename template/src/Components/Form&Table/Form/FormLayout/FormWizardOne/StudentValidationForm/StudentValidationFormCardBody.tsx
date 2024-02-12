import { ChangeEvent, useRef, useState } from "react";
import StudentForm from "./StudentForm";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setStudentValidationForm } from "@/Redux/Reducers/FormLayout/StudentWizardSlice";

const StudentValidationFormCardBody = () => {
  const {studentValidationForm,studentLevel} = useAppSelector((state)=>state.studentWizard)
  const dispatch = useAppDispatch()
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageLabelClick = () => { if (fileInputRef.current) fileInputRef.current.click() };
  
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    if (name === "imageUpload") {
      const file = event.target.files?.[0];
      const reader = new FileReader();
      reader.onload = () => {
        const uploadedImageUrl = reader.result as string;
        setImageUrl(uploadedImageUrl);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    }
    const value = name === "agreeTerms" ||name === "informationCheckBox" ||name === "agreeConditions"? event.target.checked: name === "imageUpload" || name === "studentFile"? event.target.files && event.target.files[0].name: event.target.value;
    dispatch(setStudentValidationForm({ ...studentValidationForm, [name]: value }));
  };
  return (
    <StudentForm
      handleImageLabelClick={handleImageLabelClick}      
      imageUrl={imageUrl}
      fileInputRef={fileInputRef}
      getUserData={getUserData}
      studentValidationForm={studentValidationForm}
      level={studentLevel}
    />
  );
};

export default StudentValidationFormCardBody;



