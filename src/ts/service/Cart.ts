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
        let initialValue = 0;
        let summPrice = this._items.reduce(function(previousValue, currentValue){
            return previousValue + currentValue.price;
        }, initialValue);
        return summPrice;
    }

    discountSumm(disk: number): number {
        let summ = this.summ();
        return summ - (summ / 100 * disk);
    }

    deleteObj(id: number): void{
        let user = this._items.findIndex(item => item.id == id);
        this._items.splice(user, 1);
    }
}