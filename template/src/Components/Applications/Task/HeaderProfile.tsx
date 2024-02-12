import { ImagePath } from '@/Constant';

const HeaderProfile = () => {
  return (
    <div className="d-flex">
      <div className="media-size-email">
        <img className= 'me-3 rounded-circle' src={`${ImagePath}/user/user.png`} alt= "Image"  />
      </div>
      <div className="flex-grow-1">
        <h4>MARK JENCO</h4>
        <p>Markjecno@gmail.com</p>
      </div>
    </div>
  );
};

export default HeaderProfile; 