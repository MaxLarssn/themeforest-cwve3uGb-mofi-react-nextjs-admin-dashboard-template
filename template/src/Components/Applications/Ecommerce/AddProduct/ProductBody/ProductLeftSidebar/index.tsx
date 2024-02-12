import SVG from "@/CommonComponent/SVG";
import { AddProductNav } from "@/Data/Application/Ecommerce";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setNavId } from "@/Redux/Reducers/AddProductSlice";
import { Col, Nav, NavItem, NavLink } from "reactstrap";

const ProductLeftSidebar = () => {
  const {navId} = useAppSelector((state) => state.addProduct)
  const dispatch = useAppDispatch()

  return (
    <Col xxl="3" xl="4" className="box-col-4e sidebar-left-wrapper mb-2 add-product-tab">
      <Nav pills className="sidebar-left-icons border-0" tabs>
        {AddProductNav.map((data, i) => (
          <NavItem key={i}>
            <NavLink className="border-0" active={navId === data.id ? true : false} onClick={()=>dispatch(setNavId(data.id))}>
              <div className="nav-rounded">
                <div className="product-icons">
                  <SVG className="stroke-icon" iconId={data.icon} />
                </div>
              </div>
              <div className="product-tab-content">
                <h5>{data.title}</h5>
                <p>{data.detail}</p>
              </div>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Col>
  );
};

export default ProductLeftSidebar;
