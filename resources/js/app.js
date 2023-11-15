/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import VueAxios from 'vue-axios';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import AllTodo from './components/AllTodo.vue';
import CreateTodo from './components/CreateTodo.vue';
import axios from 'axios';
// import EditTodo from './components/EditTodo.vue';
 
export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllTodo
    },
    {
        name: 'create',
        path: '/create',
        component: CreateTodo
    },
    // {
    //     name: 'edit',
    //     path: '/edit/:id',
    //     component: EditTodo
    // }
];

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
