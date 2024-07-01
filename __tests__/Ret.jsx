import { InternalServerError, NotFound } from '..';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

describe('Ret', () => {
  test('NotFound', async () => {
    const result = render(<MemoryRouter><NotFound/></MemoryRouter>);
    await result.findByText('404');
  });

  test('InternalServerError', async () => {
    const result = render(<MemoryRouter><InternalServerError/></MemoryRouter>);
    await result.findByText('出错了');
  });
});
