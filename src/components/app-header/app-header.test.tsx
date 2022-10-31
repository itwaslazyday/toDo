import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppHeader from './app-header';

describe('Component: AppHeader', () => {
  it('should render correctly', () => {
    render(
      <AppHeader />
    );
    expect(screen.getByText('todos')).toBeInTheDocument();
  });
});
