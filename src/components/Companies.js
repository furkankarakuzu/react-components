import React from "react";
function Company(props) {
  return (
    <div className="col-md">
      <img src={props.imgSrc} className="logos" alt="godaddy logo" />
    </div>
  );
}
export default function Companies() {
  return (
    <div className="row bgGray">
      <div className="col-sm-8 offset-sm-2 text-center">
        <div className="row py-3">
          <Company imgSrc="https://seeklogo.net/wp-content/uploads/2016/07/godaddy-logo.png" />
          <Company imgSrc="https://www.datocms-assets.com/2885/1506458488-blog-vault-list.svg?fit=max&fm=jpg&w=1000" />
          <Company imgSrc="https://schoolwiser.com/schoolwiser/public/uploads/rn-podar-senior-secondary-school-santacruz-logo.png" />
          <Company imgSrc="https://cdn.freebiesupply.com/logos/large/2x/renegade-logo-png-transparent.png" />
          <Company imgSrc="https://cdn.freebiesupply.com/logos/large/2x/galaxy-technology-logo-png-transparent.png" />
        </div>
      </div>
    </div>
  );
}
