import { useState } from 'react';
import { CreateContentModal } from '../ui/CreateContentModal';
import { Button } from '../ui/Button';
import { ShareIcon } from '../icons/Share';
import { PlusIcon } from '../icons/Plus';
import { Card } from '../ui/Card';
import { Sidebar } from '../ui/Sidebar';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 w-full h-screen flex">
      {/* Sidebar Section */}
      <Sidebar />

      {/* Main Content Section */}
      <div className=" gap-10 w-full ml-72 ">
        <CreateContentModal open={isOpen} onClose={() => setIsOpen(false)} />

        {/* Header Section */}
        <div className="flex items-center justify-between px-8 py-4 ">
          <div className="pl-8">
            <h1 className="text-2xl font-medium text-[#222222]">All Notes</h1>
          </div>
          <div className="flex items-center">
            <Button
              variant="secondary"
              size="md"
              text="Share Brain"
              onclick={() => {}}
              startIcon={<ShareIcon size="md" />}
            />
            <Button
              variant="primary"
              size="md"
              text="Add Content"
              onclick={() => setIsOpen(true)}
              startIcon={<PlusIcon size="md" />}
            />
          </div>
        </div>

        {/* Card Section */}
        <div className="pl-16 pt-6">
          <Card title="acac" link="cscscs" />
        </div>
      </div>
    </div>
  );
};
