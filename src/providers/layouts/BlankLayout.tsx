import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { cn } from '@/lib/clsx-twmerge';

interface BlankLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const BlankLayout = React.forwardRef<HTMLDivElement, BlankLayoutProps>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <main className={cn('flex min-h-screen flex-col', className)} {...rest} ref={ref}>
      <Outlet />
    </main>
  );
});

// ** Display name on component is useful for React DevTools **
BlankLayout.displayName = 'BlankLayout';

export default BlankLayout;
