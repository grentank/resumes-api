# Резюме web-разработчиков

Перейди в папку `server` и подготовь его к запуску. Тебе потребуется установить
зависимости, заполнить переменные окружения `.env`, накатить базу данных
`npm run db:reset` и запустить сервер на 3000 порту. После запуска перейди на
http://localhost:3000/api-docs и ознакомься с API документацией по спецификации OpenAPI
3.1.0 в формате `Swagger`.

Модели:

```ts
type CommentType = {
  id: number;
  text: string;
  isImportant: boolean;
  resumeId: number;
};

type ResumeType = {
  id: number;
  img: string;
  fullName: string;
  birthDate: Date;
  about: string;
  technologies: string[];
  achievments: string[];
  education: string;
  prefered: string;
  phone: string;
  telegram: string;
  git: string;
  email: string;
  salary: number;
  Comments: CommentType[];
};
```
