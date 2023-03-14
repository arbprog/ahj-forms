import Popover from '../popover';

test('Рендер всплывающего окна', () => {
  const popover = new Popover();
  expect(popover).toEqual(new Popover());
});
