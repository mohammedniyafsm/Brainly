import './App.css'
import { Button } from './components/ui/Button'
import  {PlusIcon}  from './components/icons/Plus'

function App() {

  return (
    <>
      <div className="">
        
        <Button variant='primary' size='sm' text='share' onclick={()=>{}} startIcon={<PlusIcon size='md'/>} />
        {/* <Button variant='secondary' size='md' text='Add Content' onclick={()=>{}}  />
        <Button variant='secondary' size='lg' text='Add Content' onclick={()=>{}}  /> */}
       
      </div>
    </>
  )
}

export default App
