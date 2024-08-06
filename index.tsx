import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import BaseHtml from './components/BaseHtml';
import staticPlugin from '@elysiajs/static';
import Home from './components/Home';

new Elysia()
    .use(staticPlugin())
    .use(html())
    .get("/", () => <BaseHtml><Home /></BaseHtml>)
    .listen(3000)
