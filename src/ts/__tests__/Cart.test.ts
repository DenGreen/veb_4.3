import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);

test('cart.items.length должен быть равен нулю', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('После вызова cart.add, в массиве cart.items должен содержаться объект', () => {
  const cart = new Cart();

  const expected = [{id: 1008, name: "Meteora", author: "Linkin Park", price: 900}];
  cart.add(musicAlbum);

  expect(cart.items).toEqual(expected);
});

test('Cart.summ должен вернуть суммарную стоимость(price) без учёта скидки', () => {
  const cart = new Cart();

  const expected = 1800;
  cart.add(musicAlbum);
  cart.add(musicAlbum);

  const received = cart.summ();

  expect(received).toEqual(expected);
});

test('Cart.discountSumm должен вернуть суммарную стоимость с учетом скидки', () => {
  const cart = new Cart();

  const expected = 1620;
  cart.add(musicAlbum);
  cart.add(musicAlbum);

  const received = cart.discountSumm(10);

  expect(received).toEqual(expected);
});

test('Cart.deleteObj должен найти и удалить объект из массива cart.items используя агрумент id', () => {
  const cart = new Cart();

  const expected = [{id: 1008, name: "Meteora", author: "Linkin Park", price: 900}];
  cart.add(book);
  cart.add(musicAlbum);
  cart.deleteObj(1001);

  expect(cart.items).toEqual(expected);
});