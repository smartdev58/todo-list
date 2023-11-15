<template>
    <div>
        <h3 class="text-center">Create Todo</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addTodo">
                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" class="form-control" v-model="todo.title">
                    </div>
                    <div class="form-group">
                        <label>Completed</label>
                        <input type="checkbox" :value="false" v-model="todo.completed">
                    </div>
                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                todo: {}
            }
        },
        methods: {
            addTodo() {
                this.axios
                    .post('http://localhost:8000/api/todos', this.todo)
                    .then(response => (
                        this.$router.push({ name: 'home' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>