import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateContentModal } from '../ui/CreateContentModal';
import { Button } from '../ui/Button';
import { ShareIcon } from '../icons/Share';
import { PlusIcon } from '../icons/Plus';
import { Card } from '../ui/Card';
import { Sidebar } from '../ui/Sidebar';
import { useAuth } from '../../context/store';
import { useContentData } from '../hooks/User';
import { ShareBrain } from '../ui/ShareBrain';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shareIsOpen,setShareIsOpen] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();
  const { data: contentList, isLoading, error } = useContentData({ token });
  

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <div className="bg-white w-full h-screen flex">
      <Sidebar />
      <div className="w-full ml-72">
        <CreateContentModal open={isOpen} onClose={() => setIsOpen(false)} />
        <ShareBrain open={shareIsOpen} onClose={() => setShareIsOpen(false)} />  
        <div className="flex items-center justify-between px-8 py-8">
          <div className="pl-8">
            <h1 className="font-medium font-inter text-xl text-gray-900">All Notes</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              text="Share Brain"
              onclick={() => setShareIsOpen(true)}
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
        <div className="pl-16 pr-10 pt-6">
          {isLoading && <p>Loading...</p>}
          {!isLoading && contentList?.length === 0 && (
            <p className="text-gray-600">No notes found. Add your first one!</p>
          )}
          {error && <p className="text-red-500">Failed to load data</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentList?.map((item: { title: string; link: string; _id: string; type: string }) => (
              <Card
                key={item._id}
                title={item.title}
                link={item.link}
                type={item.type}
                id={item._id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};