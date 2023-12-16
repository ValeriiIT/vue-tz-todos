<template>
  <div class="create-form" >
    <div class="move-home">
      <img src="../assets/logo.png">
      <p class="p-forms">Формы</p>
      <p class="p-users">Пользователи</p>
      <RouterLink class="link1" to="/">
        <button class="btn-link" >
          Выход
        </button>
      </RouterLink>
    </div>
    <div class="block-forms">
      <div class="form_logo">
        <p class="form-logo-text">
          Формы
        </p>
        <RouterLink to="/create">
          <button class="form-logo-btn">
            создать форму
          </button>
        </RouterLink>

      </div>
      <div v-for="todo in state.todos" class="todo-content">
        <div key="{{todo.id}}">
          <p class="todo-content-h">Форма регистрации участников</p>
          <div class="todo-user">Автор:<p class="date">{{todo.firstName}}</p></div>
          <div class="todo-data">Дата создания:<p class="user">01.01.23</p></div>
        </div>
        <div class="block-edit-delete">
          <button class="btn-edit">Редактировать</button>
          <button
              @click="state.deleteTodos(todo.id),fndelete()"
              class="btn-delete"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  </div>
  <RouterView/>
</template>
<script setup lang="ts">
import {searchStore} from "@/stores/SearchStore";
import {onBeforeUpdate, onUnmounted, onUpdated} from "vue";

const state = searchStore()
state.getTodos()

onUnmounted(() => {
  state.getTodos()
})

const fndelete = () => {
    state.getTodos()
    onUpdated(() => {
      state.getTodos()
    })
}


</script>
<style scoped>
.btn-link{
  border: 1px #3EA748 solid;
  width: 160px;
  height: 51px;
  background-color: white;
  border-radius: 10px;
  margin-top: 650px;
  cursor: pointer;
  color: #3EA748;
}
.move-home{
  margin-left: 179px;
  width:434px;
  height: 902px;
  margin-top: 70px;
}
.p-forms{
  margin-top: 30px;
  color: #3EA748;
}
.p-users{
  margin-top: 10px;
}
.create-form{
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: white;
}
.block-forms{
  background-color: #F6F6F6;
  width: 100%;
  padding-left: 100px;
  padding-top: 70px;
}
.form_logo{
  display: flex;
  justify-content: space-between;
  width: 825px;
  height: 51px;
}
.form-logo-text{
  font-size: 40px;
  font-weight: 500;
}
.form-logo-btn{
  background-color: #3EA748;
  color: white;
  border: none;
  border-radius: 10px;
  width: 160px;
  height: 51px;
  cursor: pointer;
}
.todo-content{
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin-top: 40px;
  width: 825px;
  height: 190px;
  border-radius: 10px;
}
.todo-content-h{
  width: 372px;
  height: 42px;
  font-size: 24px;
  font-weight: 500;
  margin-top: 20px;
  margin-left: 20px;
}
.todo-user{
  display: flex;
  width: 179px;
  height: 17px;
  color: darkgray;
  margin-left: 24px;
}
.todo-data{
  display: flex;
  width: 179px;
  height: 17px;
  color: darkgray;
  margin-left: 24px;
  margin-top: 50px;
}
.block-edit-delete{
  display: flex;
  width: 179px;
  margin-right: 20px;
  flex-direction: column;
}
.btn-edit{
  margin-top: 30px;
  width: 179px;
  height: 42px;
  border: 1px #3EA748 solid;
  border-radius: 10px;
  color: #3EA748;
  background-color: white;
  cursor: pointer;
}

.btn-delete{
  width: 179px;
  height: 42px;
  background-color: white;
  border: none;
  color: #3EA748;
  margin-top: 40px;
  cursor: pointer;
}
.date{
  margin-left: 5px;
}
.user{
  margin-left: 5px;
}
</style>
