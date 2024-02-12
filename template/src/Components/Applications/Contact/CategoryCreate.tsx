import { Button, Col, Form, Input, Modal, ModalBody, Row } from 'reactstrap';
import { AddCategory, Cancel, Save } from '@/Constant';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { setCategoryModal } from '@/Redux/Reducers/ContactSlice';

const CategoryCreate = () => {
  const {categoryModal} =useAppSelector((state)=>state.contact)
  const dispatch = useAppDispatch()
  const categoryToggle = () => dispatch(setCategoryModal())

  return (
    <>
      <Button color='transparent' className='btn-category' onClick= {categoryToggle}  ><span className="title"> + {AddCategory}</span></Button>
      <Modal isOpen={categoryModal} toggle={categoryToggle}>
        <div className='modal-header'>
          <h3 className='modal-title'>{AddCategory}</h3>
          <Button close color='transparent' onClick= {categoryToggle}></Button>
        </div>
        <ModalBody>
          <Form className="form-bookmark">
            <Row className='g-2'>
              <Col md="12" className="mb-3">
                <Input type="text" required placeholder="Enter category name" autoComplete="off" />
              </Col>
            </Row>
            <Button color='secondary' onClick= {categoryToggle }>{Save}</Button>
            <Button color='primary' className= 'ms-1' onClick= {categoryToggle }>{Cancel}</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CategoryCreate;