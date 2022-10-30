import { Task } from '../../types/types';
import './app-footer.css';

type AppFooterProps = {
  taskList: Task[];
}

function AppFooter ({taskList}: AppFooterProps): JSX.Element {
  const leftTaskQuantity = taskList.filter((task) => !task.isDone).length;

  return (
    <footer className='todo__footer control'>
      <span className='control__remain'>{`${leftTaskQuantity} items left`}</span>
      <ul className='control__filter-list list-reset'>
        <li>
          <button className='control__filter-item basic-button basic-button--active'>All</button>
        </li>
        <li>
          <button className='control__filter-item basic-button'>Active</button>
        </li>
        <li>
          <button className='control__filter-item basic-button'>Completed</button>
        </li>
      </ul>
      <button className='control__completed-clear basic-button'>Clear completed</button>
    </footer>
  );
}

export default AppFooter;
