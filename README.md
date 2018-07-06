# Пробный урок по React




<img src="./static/logos/react.png" alt="react-logo" width="190px" height="200pxt">





### Для запуска проекта выполни следующие шаги:

1. [Скачай и установи](https://nodejs.org/en/?utm_source=React+Trial+Online&utm_campaign=86043fabd2-EMAIL_CAMPAIGN_2018_05_02&utm_medium=email&utm_term=0_82d4295369-86043fabd2-/cm_linker_open_url&utm_source=React+Online+Trial&utm_campaign=c0519fd54f-EMAIL_CAMPAIGN_2018_06_26_08_42_COPY_01&utm_medium=email&utm_term=0_82d4295369-c0519fd54f-) последнюю LTS-версию Node.js.
2. Выполни в консоли node -v — убедись, что установлена последняя версия Node.js — v8.11.3.
3. Введи в консоли npm -v — убедись, что установлена последняя версия npm — 6.1.0.
4. [Скачай и установи Git](https://git-scm.com/downloads?utm_source=React+Trial+Online&utm_campaign=86043fabd2-EMAIL_CAMPAIGN_2018_05_02&utm_medium=email&utm_term=0_82d4295369-86043fabd2-&utm_source=React+Online+Trial&utm_campaign=c0519fd54f-EMAIL_CAMPAIGN_2018_06_26_08_42_COPY_01&utm_medium=email&utm_term=0_82d4295369-c0519fd54f-), если его нет на компьютере. 
5. Введи git -- version — проверь версию установленного Git, должно быть не ниже git version 2.16.3. 
6. Склонируй и запусти [проект](https://github.com/Lectrum/react-trial-lesson?utm_source=React+Online+Trial&utm_campaign=c0519fd54f-EMAIL_CAMPAIGN_2018_06_26_08_42_COPY_01&utm_medium=email&utm_term=0_82d4295369-c0519fd54f-): `git clone git@github.com:Lectrum/react-trial-lesson.git`
7. После клонирования выполни команду cd react-trial-lesson 
8. Выполни команду npm install.
9. Самое время выполнить npm start.
10. Перейди в браузер и открой страничку [http://localhost:3000](http://localhost:3000/). Когда страничка загрузится, ты увидишь сообщение «Добро пожаловать на урок по React.». 
11. Открой Chrome Dev Tools и перейди на вкладку Console, там не должно быть каких-либо ошибок. 
12. Если у тебя отсутствует учётная запись на GitHub.com — [зарегистрируйся](https://github.com/join?utm_source=React+Trial+Online&utm_campaign=86043fabd2-EMAIL_CAMPAIGN_2018_05_02&utm_medium=email&utm_term=0_82d4295369-86043fabd2l&utm_source=React+Online+Trial&utm_campaign=c0519fd54f-EMAIL_CAMPAIGN_2018_06_26_08_42_COPY_01&utm_medium=email&utm_term=0_82d4295369-c0519fd54f-).
13. После настройки ноутбука [зарегистрируйся в Slack](http://lectrum.link/club?utm_source=React+Online+Trial&utm_campaign=c0519fd54f-EMAIL_CAMPAIGN_2018_06_26_08_42_COPY_01&utm_medium=email&utm_term=0_82d4295369-c0519fd54f-). ‼️**Обязательно** добавь свое фото, имя и фамилию, чтобы мы были на связи с тобой. Напиши куратору **@curator** личное сообщение, он добавит тебя в группу react. 😉
14. Мы поддерживаем только последние версии операционных систем macOS, Linux и Windows, поэтому по возможности — обнови версию своей операционной системы до последней возможной. Если этого не сделать, то мы не гарантируем стабильную работу предоставленного нами проекта.
15. ⚠️ Если что-то не получилось сделать, сразу свяжись с нами, мы поможем настроить среду. До начала воркшопа все должно работать!

### Чтобы задеплоить приложение на github pages:

*   Запуши репозиторий с приложением на github
*   В файле `package.json`, в скрипте `build:prod-github` — укажи значение переменной окружения `REPOSITORY_NAME` в виде имени своего репозитория на github
*   Затем — `yarn deploy` или `npm run deploy`

> Пример скрипта с именем твоего репозитория:

```json
"build:prod-github": "cross-env-shell NODE_ENV=production BUILD_ENV=production REPOSITORY_NAME=`имя-твоего-репозитория` npm run build:config
```

###### Заметка: после деплоя, приложение будет доступно по адресу:

> `https://имя-твоего-пользователя-гитхаб.github.io/имя-твоего-репозитория-с-приложением`

### Чтобы сбилдить приложение без github pages:

*   `yarn build:prod` или `npm run build:prod`
