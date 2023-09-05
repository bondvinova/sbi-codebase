import React from 'react';

interface CommonErrorProps extends React.HTMLAttributes<HTMLDivElement> {}

const CommonError = React.forwardRef<HTMLDivElement, CommonErrorProps>((props: CommonErrorProps, ref) => {
  return (
    <div ref={ref} {...props}>
      CommonError
    </div>
  );
});

CommonError.displayName = 'CommonError';

export default CommonError;
