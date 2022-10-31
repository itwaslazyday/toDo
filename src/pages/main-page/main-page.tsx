import AppHeader from '../../components/app-header/app-header';
import AppFooter from '../../components/app-footer/app-footer';
import AppMain from '../../components/app-main/app-main';
import {useState} from 'react';
import {Task} from '../../types/types';

function Main (): JSX.Element {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [filterType, setFilterType] = useState<string>('All');

  return (
    <section className='todo'>
      <div className='todo__wrapper container'>
        <AppHeader/>
        <AppMain taskList={taskList} setTaskList={setTaskList} filterType={filterType}/>
        <AppFooter taskList={taskList} setTaskList={setTaskList} filterType={filterType} setFilterType={setFilterType}/>
      </div>
    </section>
  );
}

export default Main;
