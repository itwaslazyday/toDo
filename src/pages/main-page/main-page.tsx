import AppHeader from '../../components/app-header/app-header';
import AppFooter from '../../components/app-footer/app-footer';
import AppMain from '../../components/app-main/app-main';
import {useState} from 'react';
import {Task} from '../../types/types';

function Main (): JSX.Element {
  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <section className='todo'>
      <div className='todo__wrapper container'>
        <AppHeader/>
        <AppMain taskList={taskList} setTaskList={setTaskList}/>
        <AppFooter taskList={taskList}/>
      </div>
    </section>
  );
}

export default Main;
