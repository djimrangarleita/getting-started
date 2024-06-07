import FullList from "../model/FullList";
import ListItem from "../model/ListItem";

interface DomList {
    ul: HTMLUListElement,
    clear(): void,
    render(list: FullList): void,
}

export default class ListTemplate implements DomList {
    ul: HTMLUListElement;
    
    static instance: ListTemplate = new ListTemplate();

    private constructor(){
        this.ul = document.getElementById('listItems') as HTMLUListElement;
    }
    
    clear(): void {
        this.ul.innerHTML = '';
    }
    
    render(fullList: FullList): void {
        this.clear();

        fullList.list.forEach(item => {
            this.ul.appendChild(this.getLi(item, fullList));
        });
    }

    getLi(item: ListItem, fullList: FullList): Node {
        const li = document.createElement('li');
        li.className = 'item';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = item.id;
        input.tabIndex = 0;
        input.checked = item.checked;
        input.addEventListener('change', () => {
            item.checked = !item.checked;
            fullList.save();
        });

        const label = document.createElement('label');
        label.htmlFor = item.id;
        label.textContent = item.item;

        const button = document.createElement('button');
        button.className = 'button';
        button.textContent = 'X';
        button.addEventListener('click', e => {
            e.preventDefault();
            fullList.removeItem(item.id);
            li.remove();
        });

        li.appendChild(input);
        li.appendChild(label);
        li.appendChild(button);

        return li;
    }
}