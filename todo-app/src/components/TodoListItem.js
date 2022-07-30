import {
  // 다양한 아이콘을 불러와 사용하고 있는 것을 확인할 수 있다.
  MdCheckCircleOutline,
  MdCheckCircle,
  MdRemoveCircleOutline,
} from 'react-icons/md';
// import classNames from '../../node_modules/classnames/index';
import './TodoListItem.scss';

import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle }) => {

  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckCircle /> : <MdCheckCircleOutline />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;