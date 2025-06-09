import { useState } from 'react';
import './formadd.css'
import { useSendMutations } from '../../utils/mutations';
import { ErrorSendPost } from '../error/errorsendpost';
import { SuccessSend } from '../success/successsend';

type Props = {
  onCloseModal: () => void;
}

export const FormAdd = ({ onCloseModal }: Props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const mutation = useSendMutations();

  const handleSendPost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title && body) {
      const data = { title, body, userId: 1 }
      mutation.mutate(data);
      setTitle('');
      setBody('');
      setShowError(false);
      setShowSuccess(true);
      setTimeout(() => { onCloseModal() }, 1000)
    } else {
      setShowError(true);
    }
  }

  const closeSuccess = () => setShowSuccess(false);


  return (
    <div className="form-background">
      <div className='form-container'>
        <form method="POST" className='form' onSubmit={handleSendPost}>
          <div className='header-form'>
            <h1>Adicione seu post</h1>
            <button onClick={onCloseModal} className='closeBtn'>X</button>
          </div>
          <input type="text" placeholder='Digite o titulo de seu post'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea placeholder='O que está pensando?'
            value={body}
            onChange={(event) => setBody(event.target.value)}
          ></textarea>
          <button className='send-post'>Adicionar post</button>
          {showError && <ErrorSendPost />}
        </form>
        {showSuccess && <SuccessSend closeSuccess={closeSuccess} />}
      </div>
    </div>
  )
}