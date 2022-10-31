import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppMain from './app-main';

describe('Component: AppMain', () => {
  it('should render correctly & make task completed by toggle checkbox', async () => {
    render(
      <AppMain taskList={[{value: 'test', isDone: false, isRepeated: false}]} setTaskList={() => null} filterType={'All'}/>
    );

    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });
});
