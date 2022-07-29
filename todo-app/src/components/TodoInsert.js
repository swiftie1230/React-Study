import { MdPlaylistAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="Enter the 'To-Do's'" />
      <> </>
      <button type="submit">
        <MdPlaylistAdd />
      </button>
    </form>
  );
};

export default TodoInsert;