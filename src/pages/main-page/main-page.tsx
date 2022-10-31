import AppHeader from '../../components/app-header/app-header';
import AppFooter from '../../components/app-footer/app-footer';
import AppMain from '../../components/app-main/app-main';
import {useState} from 'react';
import {Task} from '../../types/types';

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

function Main (): JSX.Element {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [filterType, setFilterType] = useState<string>('All');

  console.log(taskList);
  return (
    <section className='todo'>
      <div className='todo__wrapper container'>
        <AppHeader/>
        <AppMain taskList={getFilteredTaskList(filterType, taskList)} setTaskList={setTaskList}/>
        <AppFooter taskList={taskList} setTaskList={setTaskList} filterType={filterType} setFilterType={setFilterType}/>
      </div>
    </section>
  );
}

export default Main;
