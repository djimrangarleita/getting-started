import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(item: ListItem): void,
    removeItem(id: string): void,
}

export default class FullList implements List {
    
    static instance: FullList = new FullList();

    private constructor(private _list: Array<ListItem> = []){}
    
    public get list() : Array<ListItem> {
        return this._list;
    }
    
    public set list(list : ListItem[]) {
        this._list = list;
    }
    
    load(): void {
        const rawList: string | null = localStorage.getItem('list');
        if (!rawList) return;
        
        const listItems: {_id: string, _item: string, _checked:boolean}[] = JSON.parse(rawList);
        
        listItems.forEach(item => {
           const listItem = new ListItem(item._item, item._checked);
           FullList.instance.addItem(listItem);
        });
    }

    clearList(): void {
        this.list = [];
        this.save();
    }
    
    addItem(item: ListItem): void {
        this.list.push(item);
        this.save();
    }

    removeItem(id: string): void {
        this.list = this.list.filter(item => item.id !== id);
        this.save();
    }

    save(): void {
        localStorage.setItem('list', JSON.stringify(this.list));
    }
}