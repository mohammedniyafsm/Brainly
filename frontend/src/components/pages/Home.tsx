
import { useState } from 'react'
import { CreateContentModal } from '../ui/CreateContentModal';
import { Button } from '../ui/Button';
import { ShareIcon } from '../icons/Share';
import { PlusIcon } from '../icons/Plus';
import { Card } from '../ui/Card';

export const Home=()=>{
      const [isOpen,setIsOpen] = useState(false);
    return(
        <div className=" bg-gray-100 w-full h-screen p-8">
        
          <CreateContentModal open={isOpen} onClose={()=>{setIsOpen(false)}}/>
        <div className=" flex items-center justify-between">
        <h1 className='text-2xl leading-1.5 text-[#222222] pl-44 font-medium'>All Notes</h1>
        <div className="flex  items-center">
                <Button variant='secondary' size='md' text='share Brain' onclick={()=>{}} startIcon={<ShareIcon size='md'/>} />
                <Button variant='primary' size='md' text='Add Content' onclick={()=>{setIsOpen(true)}} startIcon={<PlusIcon size='md'/>} />
        </div>
        </div>
        <div className="pl-40">

        <Card title='acac' link='cscscs'/>
        </div>
      </div>
    )
}