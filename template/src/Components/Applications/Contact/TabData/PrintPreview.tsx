import { EmailAddress, General, ImagePath } from "@/Constant";
import { PrintPreviewPropsType } from "@/Types/ContactType";
import React, { LegacyRef } from "react";

const PrintPreview = React.forwardRef(({selectedUser}:PrintPreviewPropsType, ref : LegacyRef<HTMLDivElement> | undefined) => {
  return (
    <div className="profile-mail pt-0" id="DivIdToPrint" ref={ref}>
    <div className="d-flex">
      <img className='img-100 img-fluid m-r-20 rounded-circle' src= {`${selectedUser.avatar}`} alt='' />
      <div className="flex-grow-1 mt-0">
        <h5><span id="printname">{selectedUser.name}</span><span id="printlast">{selectedUser.surname}</span></h5>
        <p>{selectedUser.name}{'@gmail.com'}</p>
      </div >
    </div>
    <div className="email-general">
      <h3>{General}</h3>
      <p>{EmailAddress}:<span className="font-primary" id="mailadd">{selectedUser.surname}{'@gmail.com'}</span></p>
    </div>
  </div>
  )
})

export default PrintPreview