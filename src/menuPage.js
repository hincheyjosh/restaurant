import Menu from "./menu.json"


export default function printMenu() {
    Menu.forEach(element => {
        console.log(element)
    });
}