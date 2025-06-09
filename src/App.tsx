import { useState } from 'react'
import './App.css'
import { Request } from './components/Request/request'
import { FormAdd } from './components/Form/formadd';

function App() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const handleShowFom = () => setShowForm(true);
  const onCloseModal = () => setShowForm(false)

  return (
    <>
      {showForm && <FormAdd onCloseModal={onCloseModal} />}
      <Request showModal={handleShowFom}/>
    </>
  )
}

export default App
