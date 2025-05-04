const catalog = [
    {
        id: 1,
        name: "Видео",
        childIds: [2, 5]
    },
    {
        id: 2,
        name: "Фильмы",
        childIds: [3, 4]
    },
    {
        id: 3,
        name: "1+1",
        childIds: null,
        url: "https://www.kinopoisk.ru/film/535341/"
    },
    {
        id: 4,
        name: "Project X",
        childIds: null,
        url: "https://www.kinopoisk.ru/film/507440/"
    },
    {
        id: 5,
        name: "Сериалы",
        childIds: [6, 7]
    },
    {
        id: 6,
        name: "Лучше звоните Солу",
        childIds: null,
        ufl: "https://www.kinopoisk.ru/series/796660/"
    },
    {
        id: 7,
        name: "Во все тяжкие",
        childIds: null,
        url: "https://www.kinopoisk.ru/series/404900/"
    },
    {
        id: 8,
        name: "Книги",
        childIds: [9]
    },
    {
        id: 9,
        name: "Гарри Поттер",
        childIds: null,
        url: "https://litboom.ru/8944-garri-potter-polnaja-kollekcija-7-knig.html"
    },
    {
        id: 10,
        name: "Статьи",
        childIds: [11, 14]
    },
    {
        id: 11,
        name: "Forbes",
        childIds: [12, 13]
    },
    {
        id: 12,
        name: "Олег Тиньков",
        childIds: null,
        url: "https://www.forbes.ru/profile/237245-tinkov"
    },
    {
        id: 13,
        name: "Трамп",
        childIds: null,
        url: "https://www.forbes.ru/tegi/donald-tramp"
    },
    {
        id: 14,
        name: "JavaScript",
        childIds: null,
        url: "https://developer.mozilla.org/ru/docs/Web/JavaScript"
    }
]

export { catalog }