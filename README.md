# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





???Возможность импортировать глобал... 
в корне создал .env и пропиcал SASS_PATH = src (указывает абсолютный путь до папки), а далее уже импортируешь таким образом @ import 'styles/utils';


Читать на других языках: Русский, Українська.

# Критерії прийому
Створено репозиторії goit-react-hw-04-movies
При здачі домашньої роботи є посилання: на вихідні файли і робочу сторінку проектів на Netlify
У стані компонентів зберігається мінімально необхідний набір даних, інше обчислюється
При запуску коду завдання, в консолі немає помилок і попереджень
Для кожного компонента є окрема папка з файлом React-компонента і файлом стилів
Для компонентів описані propTypes, і де необхідно, defaultProps
Все що компонент очікує у вигляді пропів, передається йому при виклику
Імена компонентів зрозумілі, описові
JS-код чистий і зрозумілий, використовується Prettier
Стилізація робиться тільки SASS, CSS-модулями або Styled Components. Можна використовувати бібліотеки компонентів.
Завдання «Кінопошук»
Створи базову маршрутизацію для програми пошуку і зберігання фільмів. Прев'ю робочого додатку дивись за посиланням.

API themoviedb.org
Для бекенда використовуй themoviedb.org API. Необхідно зареєструватися (можна ввести довільні дані) і отримати API-ключ. У цій роботі будуть використовуватися такі ендпоінти.

https://developers.themoviedb.org/3/trending/get-trending - список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
https://developers.themoviedb.org/3/search/search-movies - пошук фільму по ключовому слову на сторінці фільмів.
https://developers.themoviedb.org/3/movies/get-movie-details - запит повної інформації про фільм для сторінки кінофільму.
https://developers.themoviedb.org/3/movies/get-movie-credits - запит інформації про акторський склад для сторінки кінофільму.
https://developers.themoviedb.org/3/movies/get-movie-reviews - запит оглядів для сторінки кінофільму.
Посилання на документацію

Маршрути
У додатку повинні бути наступні маршрути. Якщо користувач зайшов по неіснуючому маршруту, його необхідно перенаправляти на домашню сторінку.

'/' - компонент <HomePage>, домашня сторінка зі списком популярних кінофільмів.
'/movies' - компонент <MoviesPage>, сторінка пошуку фільмів по ключовому слову.
'/movies/:movieId' - компонент <MovieDetailsPage>, сторінка з детальною інформацією про кінофільми.
/movies/:movieId/cast - компонент <Cast>, інформація про акторський склад. Рендериться на сторінці <MovieDetailsPage>.
/movies/:movieId/reviews - компонент <Reviews>, інформація про огляди. Рендериться на сторінці <MovieDetailsPage>.
Code Splitting (розщеплення коду)
Додай асинхронне завантаження JS-коду для маршрутів додатки використовуючи React.lazy() і Suspense.