import { useContext } from 'react';
import { DataContext } from '../../store/GlobalState';
import Toast from '../toast/Toast';

const Notify = () => {
  const [state, dispatch] = useContext(DataContext);
  const { notify } = state;
  return (
    <>
      {notify.error && (
        <Toast
          handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
          type="error"
          text={notify.error}
        />
      )}
      {notify.success && (
        <Toast
          handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
          type="success"
          text={notify.success}
        />
      )}
    </>
  );
};

export default Notify;
