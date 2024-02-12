import { Delete, Edit, EmailAddress, General, History, Href, ImagePath, MobileNo, Name, Print } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { deletedUser, setHistory, setTempId } from "@/Redux/Reducers/ContactSlice";
import { ContactDetailsPropsType, UserCallbackUser } from "@/Types/ContactType";
import { useCallback, useState } from "react";
import SweetAlert from "sweetalert2";
import PrintModal from "./PrintModal";
import SearchNotFoundClass from "./SearchNotFoundClass";

const ContactDetailsClass :React.FC<ContactDetailsPropsType> = ({ selectedUser, userEditCallback ,setSelectedUser}) => {
  const [printModal, setPrintModal] = useState(false);
  const printModalToggle = () => setPrintModal(!printModal);
  const dispatch = useAppDispatch();
  const {users} = useAppSelector((state)=>state.contact)
  const toggleCallback = useCallback((toggle: boolean) => {
    setPrintModal(toggle);
  }, []);

  const editUsers = (usersData: UserCallbackUser) => {
    dispatch(setTempId(usersData.id));
    userEditCallback(true, usersData);
  };

  const deleteUser = (userId: number | undefined) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch(deletedUser(userId));
        const newUsers = users.filter((user) => user.id !== userId);
        setSelectedUser(newUsers[newUsers.length - 1]);
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };

  return (
    <>
      {selectedUser ? (
        <div className="profile-mail">
          <div className="d-flex">
            <img className="img-100 img-fluid m-r-20 rounded-circle update_img_0" src={`${selectedUser.avatar}`} alt="" />
            <div className="flex-grow-1 mt-0">
              <h5><span className="first_name_0">{selectedUser.name}</span> <span className="last_name_0">{selectedUser.surname}</span></h5>
              <p className="email_add_0">{selectedUser.name}{"@gmail.com"}</p>
              <ul>
                <li><a href={Href} onClick={() => editUsers(selectedUser)}>{Edit}</a></li>
                <li><a href={Href} onClick={() => deleteUser(selectedUser.id)}>{Delete}</a></li>
                <li><a href={Href} onClick={() => dispatch(setHistory())}>{History}</a></li>
                <li><a href={Href} onClick={() => printModalToggle()}>{Print}</a></li>
              </ul>
            </div>
          </div>
          <div className="email-general">
            <h3 className="mb-3">{General}</h3>
            <ul>
              <li>{Name}<span className="font-primary first_name_0">{selectedUser.name}</span></li>
              <li>{MobileNo} <span className="font-primary mobile_num_0">{selectedUser.mobile}</span></li>
              <li>{EmailAddress}<span className="font-primary email_add_0">{`${selectedUser.name}@gmail.com`} </span></li>
            </ul>
          </div>
        </div>
      ) : (
        <SearchNotFoundClass word="Contact" />
      )}
      {selectedUser && <PrintModal toggleCallback={toggleCallback} printModal={printModal} selectedUser={selectedUser} />}
    </>
  );
};

export default ContactDetailsClass;
