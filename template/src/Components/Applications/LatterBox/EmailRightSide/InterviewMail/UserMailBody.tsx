const UserMailBody = () => {
  return (
    <div className="user-body">
      <p>Dear Customer,</p>
      <p>We regret to notify you that an unauthorized attempt was made to accessyour account. Our system discovered suspicious activity, and we actedright away to safeguard your personal data.</p>
      <p>Please change your login information by clicking the following link inorder to safeguard your account:</p>
      <p>Please be aware that your account may be temporarily suspended if noaction is taken within 24 hours. We urge you to take immediate action toprevent any inconvenience.</p>
      <p>We sincerely apologize for any inconvenience this may cause and thankyou for your immediate attention to this matter.</p>
      <div className="mail-subcontent">
        <p>Yours faithfully,</p>
        <p>Account Security Team</p>
      </div>
    </div>
  );
};

export default UserMailBody;
