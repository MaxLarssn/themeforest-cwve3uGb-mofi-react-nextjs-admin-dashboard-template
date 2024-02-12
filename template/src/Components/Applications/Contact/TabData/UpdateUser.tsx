import { useForm,SubmitHandler } from 'react-hook-form';
import { Row, Col, Label, FormGroup, Form, Input, Button } from 'reactstrap';
import { Cancel, Email, ImagePath, Mobile, Name, Phone, Save } from '@/Constant';
import { toast } from 'react-toastify';
import { UpdateUserPropsType, UserUpdateType } from '@/Types/ContactType';
import { setEditData } from '@/Redux/Reducers/ContactSlice';
import { useAppDispatch } from '@/Redux/Hooks';

const UpdateUser :React.FC<UpdateUserPropsType> = ({ editData, userEditCallback }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserUpdateType>();
  const dispatch =useAppDispatch()

  const UpdateContact:SubmitHandler<UserUpdateType> = (updatedData) => {
    const withImageData ={...updatedData,avatar:`${ImagePath}/user/user.png`}
    userEditCallback(false,withImageData)
    dispatch(setEditData(withImageData));
    toast.success("User Update Success")
  };
  
  return (
      <div className="contact-editform ps-0 m-auto">
        <Form onSubmit={handleSubmit(UpdateContact)}>
          <Row className='g-2'>
            <Col
             md="12" className="mb-3">
              <Label check>{Name}</Label>
              <Row>
                <Col sm="6">
                  <input className="form-control" type="text"  defaultValue={editData?.name} {...register('name', { required: true })} />
                  {errors.name &&  <span className='txt-danger'>First name is required</span>}
                </Col>
                <Col sm="6">
                  <input className="form-control" type="text"  defaultValue={editData.surname} {...register('surname', { required: true })} />
                  {errors.surname && <span className='txt-danger'>Last name is required</span>}
                </Col>
              </Row>
            </Col>
            <Col md="12" className="mb-3">
              <Label check>{Email}</Label>
              <input className="form-control" type="text"  defaultValue={editData.email} {...register('email', { required: true })} />
             {errors.email && <span className='txt-danger'>Please enter email between 18 to 70 year.</span>}
            </Col>
            <FormGroup className="mb-3 col-md-12 my-0">
              <Row>
                <Col sm="6">
                  <Label htmlFor="con-phone" check>{Phone}</Label>
                  <input className="form-control"  type="number" defaultValue={editData.mobile} {...register('mobile', { required: true })} />
                  {errors.mobile && <span className='txt-danger'>Please enter Mobile no.</span>}
                </Col>
                <Col sm="6">
                  <Label htmlFor="con-phone" check>{Mobile}</Label>
                  <Input type="select" className="form-control" >
                    <option value="1">Mobile</option>
                    <option value="2">Work</option>
                    <option value="3">Other</option>
                  </Input>
                </Col>
              </Row>
            </FormGroup>
          </Row>
          <Button color='secondary'  className='update-contact me-1'>{Save}</Button>
          <Button color='primary' onClick={() => userEditCallback(false,editData)}>{Cancel}</Button>
        </Form>
      </div>
  );
};

export default UpdateUser;