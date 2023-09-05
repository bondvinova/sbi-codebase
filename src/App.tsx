import { Button } from '@/components/button';
import { cn } from '@/lib/clsx-twmerge';

const App = () => {
  return (
    <div className="bg-slate-500 p-4">
      <Button>Button</Button>
      <Button asChild>
        <a href="/">Link</a>
      </Button>
      <Button variant="primary" size="sm" className={cn('font-bold')}>
        Download
      </Button>
    </div>
  );
};

export default App;
