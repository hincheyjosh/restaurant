import Menu from "./menu.json";

export default function createMenuContent() {
    // Clear out content container
    const content = document.querySelector(".content");
    content.innerHTML = "";

    const menuContainer = document.createElement("div");
    menuContainer.classList = "menuContainer";

    Menu.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.classList = "menuItem";

        const name = document.createElement("h6");
        name.classList = "menuName";
        name.textContent = item.name;
        menuItem.appendChild(name);

        const description = document.createElement("p");
        description.classList = "menuDescription";
        description.textContent = item.description;
        menuItem.appendChild(description);

        menuContainer.appendChild(menuItem);
    });
    content.appendChild(menuContainer);
}
