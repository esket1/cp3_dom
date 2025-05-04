import { catalog } from "./catalog.js"

const list = document.getElementById("catalog")

function showHide(event, ul) {
    event.stopPropagation();
    if (ul.style.display === "none") {
        ul.style.display = "block"
    } else {
        ul.style.display = "none"
    }
}

function makeList(items, catalog) {
    const ul = document.createElement('ul')

    items.forEach(function (itemId) {
        const item = catalog.find(i =>
            i.id === itemId
        )
        if (!item) return

        const li = document.createElement('li')
        li.textContent = item.name

        if (item.childIds) {
            li.textContent += "💠"
            const newUl = makeList(item.childIds, catalog)
            newUl.style.display = "none"
            li.style.cursor = "pointer"
            li.addEventListener("click", function (event) {
                showHide(event, newUl)
            });
            li.appendChild(newUl)
        } else {
            li.innerHTML = `<a href="${item.url}" target="_blank">${item.name}</a>`
        }

        ul.appendChild(li)
    })

    return ul
}

const rootItems = catalog
    .filter(item =>
        !catalog.some(i =>
            i.childIds && i.childIds.includes(item.id)
        )
    )
    .map(item => item.id)

list.appendChild(makeList(rootItems, catalog))
