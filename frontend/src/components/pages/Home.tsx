import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateContentModal } from '../ui/CreateContentModal';
import { Button } from '../ui/Button';
import { ShareIcon } from '../icons/Share';
import { PlusIcon } from '../icons/Plus';
import { Card } from '../ui/Card';
import { Sidebar } from '../ui/Sidebar';
import { useAuth } from '../../context/store';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();

  // Redirect if no token
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <div className="bg-white-100 w-full h-screen flex">
      {/* Sidebar Section */}
      <Sidebar />

      {/* Main Content Section */}
      <div className="gap-10 w-full ml-72">
        <CreateContentModal open={isOpen} onClose={() => setIsOpen(false)} />

        {/* Header Section */}
        <div className="flex items-center justify-between px-8 py-8">
          <div className="pl-8">
            <h1 className="font-medium font-inter text-xl text-gray-900">All Notes</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              text="Share Brain"
              onclick={() => {}}
              startIcon={<ShareIcon size="md" />}
            />
            <Button
              variant="primary"
              size="lg"
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
