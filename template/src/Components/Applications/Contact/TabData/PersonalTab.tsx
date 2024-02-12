import { useCallback, useState } from "react";
import { Row, Col, Card, CardBody, TabContent, TabPane } from "reactstrap";
import { Personal } from "@/Constant";
import ListNewContact from "./ListNewContact";
import UpdateUser from "./UpdateUser";
import ContactDetailsClass from "./ContactDetail";
import { PersonalTabPropsType, UserCallbackUser, UserUpdateType } from "@/Types/ContactType";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const PersonalTab :React.FC<PersonalTabPropsType> = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState<undefined | UserCallbackUser | UserUpdateType>();
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const userCallback = useCallback((user: UserCallbackUser) => {setSelectedUser(user);}, []);
  const userEditCallback = useCallback(
    (edit: boolean, usersData: UserCallbackUser) => {
      setEditData(usersData);
      setSelectedUser(usersData);
      setEditing(edit);
    },[]);

  return (
    <Card>
      <CommonCardHeader  title={Personal} headClass="d-flex"/>
      <CardBody className="p-0">
        <Row className="list-persons" id="addcon">
          <ListNewContact users={users} userCallback={userCallback} />
          <Col xl="8" md="7" className="xl-50">
            {editing ? (
              <UpdateUser editData={editData} userEditCallback={userEditCallback}/>
            ) : (
              <TabContent activeTab={0}>
                <TabPane tabId={0}>
                  <ContactDetailsClass selectedUser={selectedUser ? selectedUser : users[0]} userEditCallback={userEditCallback} setSelectedUser={setSelectedUser}/>
                </TabPane>
              </TabContent>
            )}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PersonalTab;