import { Delete, Edit, EmailAddress, Gender, General, History, Href, ImagePath, Name, Print } from '@/Constant';
import { OrganizationData } from '@/Data/Application/Contacts';
import { Fragment } from 'react';
import { TabPane } from 'reactstrap';

const TabOrg = () => {
  
  return (
    <Fragment>
      {OrganizationData.map((item, i) =>
        <TabPane tabId={item.activeTab} key={i}>
           <div className="profile-mail">
          <div className="d-flex">
            <img className="img-100 img-fluid m-r-20 rounded-circle update_img_0" src={`${ImagePath}/user/${item.image}`} alt="" />
            <div className="flex-grow-1 mt-0">
              <h5><span className="first_name_0">{item.name}</span></h5>
              <p className="email_add_0">{item.email}</p>
              <ul>
                <li><a href={Href}>{Edit}</a></li>
                <li><a href={Href}>{Delete}</a></li>
                <li><a href={Href}>{History}</a></li>
                <li><a href={Href}>{Print}</a></li>
              </ul>
            </div>
          </div>
          <div className="email-general">
            <h3 className="mb-3">{General}</h3>
            <ul>
              <li>{Name}<span className="font-primary first_name_0">{item.name}</span></li>
              <li>{Gender} <span className="font-primary mobile_num_0">{item.gender}</span></li>
              <li>{EmailAddress}<span className="font-primary email_add_0">{item.email}</span></li>
            </ul>
          </div>
        </div>
        </TabPane>
      )}
    </Fragment>
  );
};

export default TabOrg;