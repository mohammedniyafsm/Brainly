import './App.css'
import { Button } from './components/ui/Button'
import  {PlusIcon}  from './components/icons/Plus'
import  {ShareIcon}  from './components/icons/Share'

function App() {

  return (
    <>
      <div className="flex">
        
        <Button variant='primary' size='md' text='Add Content' onclick={()=>{}} startIcon={<PlusIcon size='md'/>} />
        <Button variant='secondary' size='md' text='Share Brain' onclick={()=>{}} startIcon={<ShareIcon size='md'/>} />
        <Button variant='secondary' size='md' text='Share Brain' onclick={()=>{}} startIcon={<ShareIcon size='md'/>} EndIcon={<PlusIcon size='md'/>}/>
        
      </div>
    </>
  )
}

export default App
