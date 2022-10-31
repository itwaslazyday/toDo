import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppFooter from './app-footer';
import userEvent from '@testing-library/user-event';

describe('Component: AppHeader', () => {
  it('should render correctly & check message after pressing the filter button', async () => {
    render(
      <AppFooter taskList={[]} setTaskList={() => null} filterType={'All'} setFilterType={() => {
        const message = document.createElement('p')
        message.textContent = 'Filter button was clicked';
        document.body.append(message);
        }
      }/>
    );
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Clear completed')).toBeInTheDocument();

    await userEvent.click(screen.getByText('All'));
    expect(screen.getByText(/Filter button was clicked/i)).toBeInTheDocument();
  });
});
