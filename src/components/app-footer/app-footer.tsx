import { Task } from '../../types/types';
import './app-footer.css';

type AppFooterProps = {
  taskList: Task[];
  setTaskList: (task: Task[]) => void;
  filterType: string;
  setFilterType: (type: string) => void;
}

const filters: string[] = ['All', 'Active', 'Completed'];

function AppFooter ({taskList, setTaskList, filterType, setFilterType}: AppFooterProps): JSX.Element {
  const leftTaskQuantity = taskList.filter((task) => !task.isDone).length;

  const handleCompletedClear = () => {
    setTaskList(taskList.filter((task) => !task.isDone));
  };

  return (
    <footer className='todo__footer control'>
      <span className='control__remain'>{`${leftTaskQuantity} items left`}</span>
      <ul className='control__filter-list list-reset'>
        {filters.map((filter) => (
          <li key={filter}>
            <input
              className='control__filter-radio visually-hidden'
              type="radio"
              name="filter-type"
              value={filter}
              id={filter}
              onChange={() => setFilterType(filter)}
            >
            </input>
            <label
              className={`control__filter-label basic-button ${filterType === filter ? 'basic-button--active' : ''}`}
              htmlFor={filter}
            >
              {filter}
            </label>
          </li>
        ))}
      </ul>
      <button
        className='control__completed-clear basic-button'
        onClick={() => handleCompletedClear()}
        disabled={!taskList.length}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default AppFooter;
