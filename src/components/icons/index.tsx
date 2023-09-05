import { useState } from 'react';

import Button from '@/components/button';
import Heading from '@/components/heading';
import AlertIcon from '@/components/icons/AlertIcon';
import SuccessIcon from '@/components/icons/SuccessIcon';
import Input from '@/components/input';
import { cn } from '@/lib/clsx-twmerge';
import type { KeyOfIcon, ValueOfIcon } from '@/types/icons';

export const IconsObject = {
  AlertIcon,
  SuccessIcon,
};

const Icons = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const array = (Object.entries(IconsObject) as [KeyOfIcon, ValueOfIcon][]).filter(([iconName]) => {
    return iconName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Filter icon by name or tag" value={search} onChange={handleSearch} />
      <p>Click on an icon to copy the name</p>
      {array.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-4">
          {array.map(([iconName, Icon]) => (
            <IconItem Icon={Icon} key={iconName} iconName={iconName} />
          ))}
        </div>
      ) : (
        <p className="flex-1 text-center text-gray-500">No Icon found!</p>
      )}
    </div>
  );
};

interface IconItemProps extends React.HTMLAttributes<HTMLDivElement> {
  Icon: ValueOfIcon;
  iconName: KeyOfIcon;
}

const IconItem = ({ Icon, iconName }: IconItemProps) => {
  async function copyTextToClipboard(name: KeyOfIcon) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(`import ${name} from '@/components/icons/${name}'`);
    } else {
      return document.execCommand('copy', true, name);
    }
  }

  const handleCopyClick = (name: KeyOfIcon) => {
    copyTextToClipboard(name);
  };

  return (
    <Button className={cn('h-24 w-[160px] flex-col')} onClick={() => handleCopyClick(iconName)} variant="outline">
      <div className="flex p-2">
        <Icon />
      </div>
      <Heading className="text-sbi-blue-100" size="sm">
        {iconName}
      </Heading>
    </Button>
  );
};

export default Icons;
