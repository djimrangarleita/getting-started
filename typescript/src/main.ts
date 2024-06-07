import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './templates/ListTemplate'


const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance

  const form = document.getElementById('itemEntryForm') as HTMLFormElement;
  form.addEventListener('submit', (e): void => {
    e.preventDefault();
    const input = document.getElementById('newItem') as HTMLInputElement;
    const data: string = input.value.trim();
    form.reset();

    if (!data) return;

    const listItem = new ListItem(data);

    fullList.addItem(listItem);
    template.render(fullList);
  });

  const clearItemButton = document.getElementById('clearItemsButton') as HTMLButtonElement;
  clearItemButton.addEventListener('click', (e): void => {
    e.preventDefault();
    fullList.clearList();
    template.clear();
  });

  fullList.load();
  template.render(fullList);
}

document.addEventListener('DOMContentLoaded', initApp);