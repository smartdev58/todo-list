<template>
    <div>
        <h2 class="text-center">Todos List</h2>
 
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Completed</th>
                <!-- <th>Actions</th> -->
            </tr>
            </thead>
            <tbody>
            <tr v-for="todo in todos" :key="todo.id">
                <td>{{ todo.id }}</td>
                <td>{{ todo.title }}</td>
                <td>{{ todo.completed }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'edit', params: { id: todo.id }}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deleteTodo(todo.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                todos: []
            }
        },
        created() {
            this.axios
                .get('http://localhost:8000/api/todos/')
                .then(response => {
                    this.todos = response.data;
                });
        },
        methods: {
            deleteTodo(id) { 
                this.axios
                    .delete(`http://localhost:8000/api/todos/${id}`)
                    .then(response => {
                        let i = this.todos.map(data => data.id).indexOf(id);
                        this.todos.splice(i, 1)
                    });
            }
        }
    }
</script>