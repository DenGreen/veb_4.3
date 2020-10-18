import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    summ(): number {
        let price: number = 0;
        for(let value of this._items){
             price += value.price;
        }
        return price;
    }

    discountSumm(disk: number): number {
        let summ: number = this.summ();
        return summ - (summ / 100 * disk);
    }

    deleteObj(id: number): void{
        let user: number = this._items.findIndex(item => item.id == id);
        this._items.splice(user, 1);
    }
}