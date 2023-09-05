import React from 'react';

interface ClientManagementProps extends React.HTMLAttributes<HTMLDivElement> {}

const ClientManagement = React.forwardRef<HTMLDivElement, ClientManagementProps>(
  (props: ClientManagementProps, ref) => {
    return (
      <div ref={ref} {...props}>
        ClientManagement
      </div>
    );
  }
);

ClientManagement.displayName = 'ClientManagement';

export default ClientManagement;
