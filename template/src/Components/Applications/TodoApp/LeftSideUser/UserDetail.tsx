import { ImagePath } from "@/Constant";

const UserDetail = () => {
  return (
      <div className="d-flex align-items-center">
        <div className="media-size-email">
          <img className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} alt="image"/>
        </div>
        <div className="flex-grow-1">
          <h6 className="f-w-600">Mark Jecno</h6>
          <p>Markjecno@gmail.com</p>
        </div>
      </div>
  );
};

export default UserDetail;
