import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Muvie from './domain/Muvie';

const cart = new Cart();

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Muvie(2001, 'Мстители', 200, 2012,'США', 'Avengers Assemble!', "фантастика, боевик", "137 мин / 02:17" ));

console.log(cart.items);
console.log(`Сумма заказа ${cart.summ()} руб`);
console.log(`Сумма заказа с учетом скидки ${cart.discountSumm(10)} руб`)
cart.deleteObj(1001);
console.log(cart.items);
