import React from "react";

export type AccountPageProps = {
  // props go here
};
function _AccountPage(props: AccountPageProps) {
  return (
    <>
      <h1>AccountPage</h1>
    </>
  );
}

const AccountPage = React.memo(_AccountPage);
export default AccountPage;
