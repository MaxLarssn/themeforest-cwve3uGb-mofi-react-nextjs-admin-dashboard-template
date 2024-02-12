import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { EditBookmark } from "@/Constant";
import { EditBookmarkModalForm } from "./EditBookmarkModalForm";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { AddNewBookMarkInterFace } from "@/Types/BookmarkType";
import { setEditModal, setEditRow, updateBookMark } from "@/Redux/Reducers/BookmarkTabSlice";

const EditBookmarkModal = () => {
  const { editRow, editModal } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();
  const {register,handleSubmit,formState: { errors },setValue,} = useForm<AddNewBookMarkInterFace>();

  useEffect(() => {
    if (editRow) {
      setValue("url", editRow.website_url || "");
      setValue("title", editRow.title || "");
      setValue("desc", editRow.desc || "");
    }
  }, [editRow, setValue]);

  const editToggle = () => {
    dispatch(setEditModal());
    dispatch(setEditRow({}));
  };

  const UpdateNewBookmark = (id: number | undefined, data: AddNewBookMarkInterFace) => {
    dispatch(updateBookMark({ id: id, data: data }));
  };

  const updateBookMarkData: SubmitHandler<AddNewBookMarkInterFace> = (data) => {
    dispatch(setEditModal());
    UpdateNewBookmark(editRow?.id, data);
  };

  return (
    <Modal isOpen={editModal} toggle={editToggle} size="lg">
      <ModalHeader toggle={editToggle}>{EditBookmark}</ModalHeader>
      <ModalBody>
        <EditBookmarkModalForm errors={errors} register={register} handleSubmit={handleSubmit} editToggle={editToggle} updateBookMarkData={updateBookMarkData}/>
      </ModalBody>
    </Modal>
  );
};
export default EditBookmarkModal;

