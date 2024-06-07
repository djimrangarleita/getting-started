import { v4 as uuidv4 } from 'uuid';

export interface Item {
    id: string,
    item: string,
    checked: boolean,
}

export default class ListItem implements Item {
    _id: string;

    constructor(
        private _item: string = '',
        private _checked: boolean = false,
    ) {
        this._id = uuidv4();
    }

    public get id() : string {
        return this._id;
    }
    
    public get item() : string {
        return this._item;
    }
    
    public set item(item : string) {
        this._item = item;
    }
    
    public get checked() : boolean {
        return this._checked;
    }

    public set checked(checked : boolean) {
        this._checked = checked;
    }
}