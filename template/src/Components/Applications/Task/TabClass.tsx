import { Card, Col, TabContent, TabPane } from 'reactstrap';
import { AssignedToMe, Business, DelayedTasks, Holidays, MyTasks, Newsletter, Notification, ThisMonthTasks, ThisWeekTask, TodayTasks, UpcomingTasks } from '@/Constant';
import AssignedToMeClass from './AssignedToMe';
import EmptyTaskClass from './EmptyTaskClass';
import ListOfTask from './ListTask';
import { useAppSelector } from '@/Redux/Hooks';

const TabClass = () => {
  const {activeTab} = useAppSelector((state)=>state.task)

  return (
      <Col xl="9" md="12" className="box-col-12">
        <div className="email-right-aside bookmark-tabcontent">
          <Card className="email-body radius-left">
            <div className="ps-0">
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <ListOfTask />
                </TabPane>
                <TabPane tabId="2">
                  <EmptyTaskClass title={TodayTasks} />
                </TabPane>
                <TabPane tabId="3">
                  <EmptyTaskClass title={DelayedTasks} />
                </TabPane>
                <TabPane tabId="4">
                  <EmptyTaskClass title={UpcomingTasks} />
                </TabPane>
                <TabPane tabId="5">
                  <EmptyTaskClass title={ThisWeekTask} />
                </TabPane>
                <TabPane tabId="6">
                  <EmptyTaskClass title={ThisMonthTasks} />
                </TabPane>
                <TabPane tabId="7">
                  <AssignedToMeClass title={AssignedToMe} />
                </TabPane>
                <TabPane tabId="8">
                  <AssignedToMeClass title={MyTasks} />
                </TabPane>
                <TabPane tabId="9">
                  <EmptyTaskClass title={Notification} />
                </TabPane>
                <TabPane tabId="10">
                  <EmptyTaskClass title={Newsletter} />
                </TabPane>
                <TabPane tabId="11">
                  <EmptyTaskClass title={Business} />
                </TabPane>
                <TabPane tabId="12">
                  <EmptyTaskClass title={Holidays} />
                </TabPane>
              </TabContent>
            </div>
          </Card>
        </div>
      </Col>
  );
};

export default TabClass;