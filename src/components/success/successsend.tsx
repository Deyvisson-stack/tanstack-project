import './success.css'

type Props = {
  closeSuccess: () => void;
}
export const SuccessSend = ({ closeSuccess }: Props) => {
  return (
    <div className="success-container">
      <p>Post enviado com succeso!</p>
      <button className='success-btn' onClick={closeSuccess}>X</button>
    </div>
  );
}