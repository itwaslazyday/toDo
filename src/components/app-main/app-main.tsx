import { KeyboardEvent } from 'react';
import { Task } from '../../types/types';
import './app-main.css';

type AppMainProps = {
  taskList: Task[];
  setTaskList: (task: Task[]) => void;
  filterType: string;
}

function AppMain ({taskList, setTaskList, filterType}: AppMainProps): JSX.Element {
  const getFilteredTaskList = (filter: string, tasks: Task[]) => {
    switch (filter) {
      case ('Active'):
        return (tasks.filter((task) => !task.isDone));
      case ('Completed'):
        return (tasks.filter((task) => task.isDone));
      default:
        return tasks;
    }
  };

  const handleInputSubmit = (evt: KeyboardEvent<HTMLInputElement>) => {
    if ((evt.keyCode === 10 || evt.keyCode === 13) && evt.currentTarget.value !== '') {
      const repeatedTask = taskList.find((task) => task.value === evt.currentTarget.value) as Task;
      const convertRepeatField = () => {
        repeatedTask.isRepeated = !repeatedTask.isRepeated;
        setTaskList([...taskList]);
      };

      if (!repeatedTask) {
        setTaskList(
          [...taskList,
            {
              value: evt.currentTarget.value,
              isDone: false,
              isRepeated: false
            }
          ]
        );
      } else {
        convertRepeatField();
        setTimeout(() => {
          convertRepeatField();
        }, 500);
      }
      evt.currentTarget.value = '';
    }
  };

  const handleTaskRemove = (value: string) => {
    setTaskList(taskList.filter((task) => task.value !== value));
  };

  const handleTaskComplete = (value: string) => {
    const completedTask = taskList.find((task) => task.value === value) as Task;
    completedTask.isDone = !completedTask.isDone;
    setTaskList([...taskList]);
  };

  return (
    <main className='todo__main'>
      <h2 className='visually-hidden'>ToDo App - персональный список дел на каждый день.</h2>
      <form className='todo__form' action="" method="post" onSubmit={(evt) => evt.preventDefault()}>
        <input
          type="text"
          className='todo__input-field'
          placeholder='Whats needs to be done?'
          onKeyDown={(evt) => handleInputSubmit(evt)}
        />
      </form>
      <ul className='todo__task-list list-reset'>
        {taskList.length > 0 ?
          getFilteredTaskList(filterType, taskList).map((task) => (
            <li key={task.value} className={`todo__task-item ${task.isRepeated ? 'shake' : ''}`}>
              <label className='todo__task-label'>
                <input
                  className='todo__task-input visually-hidden'
                  type="checkbox"
                  name="task-item"
                  onChange={() => handleTaskComplete(task.value)}
                  checked={task.isDone}
                />
                <span className="todo__task-checkmark"></span>
                <span className={`todo__label-text ${task.isDone ? 'todo__label-text--complete' : ''}`}>
                  {task.value}
                </span>
              </label>
              <button
                className="todo__task-remove-button basic-button"
                onClick={() => handleTaskRemove(task.value)}
              >
                X
              </button>
            </li>
          ))
          : ''}
      </ul>
    </main>
  );
}

export default AppMain;
