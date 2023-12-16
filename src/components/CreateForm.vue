<template>
<div class="create-form">
  <div class="block-naw">
     <div class="block-naw-elem">
       <img class="block-naw-elem-logo" src="../assets/logo.png">
       <RouterLink to="/about">
         <button class="block-naw-elem-btn">
           <i class="arrow left"></i>
           Назад
         </button>
       </RouterLink>
       <div class="type-form-block">
         <p class="type-form-p">Тип формы</p>
         <p class="type-form-p">Сущности</p>
         <p class="type-form-p">Поля</p>
         <p class="type-form-p">Правила показа полей</p>
         <p class="type-form-p">Другие настройки</p>
       </div>
       <button class="type-form-btn1">Скрипт</button>
       <button class="type-form-btn2">Сохранить</button>
     </div>
  </div>
  <div class="block-create">
    <div class="block-create-list">
      <p class="block-create-text-logo">Поля</p>
      <p class="text-sikret">Скрытые поля</p>
      <button class="create-last-name">
        <div class="div-btn">
          <p class="pull-text" >добавить поле</p>
          <p class="plus">+</p>
        </div>
      </button>
      <p class="text-field" >Поля</p>
      <div class="div-ifo-delete">
        <div class="div-info">
          <p class="last-name">Фамилия</p>
          <p class="contact">Контакт</p>
        </div>
        <button class="btn-delete">Удалить поле</button>
      </div>
      <input class="inp-last-name" type="text" placeholder="Фамилия">
      <div class="div-chect">
        <input class="check-inp" type="checkbox">
        <p class="text-field-about">Сделать поле обязательным</p>
      </div>
      <div class="div-ifo-delete">
        <div class="div-info">
          <p class="last-name">Фамилия</p>
          <p class="contact">Контакт</p>
        </div>
        <button class="btn-delete">Удалить поле</button>
      </div>
      <input class="inp-last-name" type="text" placeholder="Имя">
      <div class="div-chect">
        <input class="check-inp" type="checkbox">
        <p class="text-field-about">Сделать поле обязательным</p>
      </div>
      <button class="create-last-name">
        <div class="div-btn">
          <p class="pull-text" >добавить поле</p>
          <p class="plus">+</p>
        </div>
      </button>
      <button class="create-last-name">
        <div class="div-btn">
          <p class="pull-text" >добавить поле</p>
          <p class="plus">+</p>
        </div>
      </button>
    </div>
  </div>
  <div class="block-register">
     <div class="form-register">
       <p class="form-h">
         Форма регистрации участников
       </p>
       <input v-model="lastNameInp" required class="form-input1" type="text" placeholder="Фамилия">
       <p class="valited-name" v-if="!isLastnameValid">Это обязательное поле</p>
       <input v-model="firstNameInp" required class="form-input2" type="text" placeholder="Имя">
       <p class="valited-name" v-if="!isFirsNameValid">Это обязательное поле</p>
       <div class="check-form">
         <input class="check-inp" type="checkbox">
         <p class="check-form-info">Нажимая кнопку «Отправить», я принимаю условия политики конфиденциальности</p>
       </div>
       <button @click="add()" class="form-register-btn">Отправить</button>
     </div>
  </div>
</div>
  <RouterView/>
</template>
<script setup>
import {searchStore} from "@/stores/SearchStore.ts";
import {onBeforeUpdate, onUpdated, ref, watchEffect} from "vue";
const state = searchStore()
const lastNameInp = ref("")
const firstNameInp = ref("")
let isLastnameValid = false
let isFirsNameValid = false
watchEffect(() => {
  isLastnameValid = lastNameInp.value > " ";
  isFirsNameValid = firstNameInp.value > " "
})
const add = () => {
  if (lastNameInp.value||firstNameInp.value > ' '){
    const obj = {
      lastName:lastNameInp.value,
      firstName:firstNameInp.value
    }
    console.log(obj)
    state.addTodos(obj)
    lastNameInp.value = ''
    firstNameInp.value = ''
  }
}


</script>
<style scoped>
.create-form{
  display: flex;
  width: 100%;
  height: 971px;
  justify-content: space-between;
}
.block-naw{
  width: 653px;
  display: flex;
  background-color: white;
}
.block-create{
  width: 653px;
  background-color: #F9F9F9;
}
.block-register{
  display: flex;
  width: 653px;
  justify-content: center;
  background-color: #3EA748;
}
.form-register {
  width: 349px;
  height: 530px;
  background-color: white;
  border-radius: 20px;
  margin-top: 88px;
}
.form-h{
  width: 269px;
  height: 70px;
  margin-top: 40px;
  margin-left: 40px;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
}
.form-input1 {
  width: 269px;
  height: 70px;
  border-radius: 10px;
  border: none;
  background-color: #F6F6F6;
  margin-top: 40px;
  margin-left: 40px;
  text-indent: 30px;
}
.form-input2{
  width: 269px;
  height: 70px;
  border-radius: 10px;
  border: none;
  background-color: #F6F6F6;
  margin-top: 28px;
  margin-left: 40px;
  text-indent: 30px;
}
.check-form{
  width: 269px;
  height: 44px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 40px;
  margin-top: 30px;
}

.check-inp{
  border-color: #3EA748;
  display: flex;
  margin-top: 2px;
  width: 24px;
  height: 24px;
  border-radius: 4px;
}
.check-form-info{
  color: darkgray;
  margin-left: 15px;
}
.form-register-btn{
  width: 269px;
  height: 50px;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: #3EA748;
  margin-left: 40px;
  margin-top: 40px;
}
.block-naw-elem{
margin-left: 200px;
  display: flex;
  flex-direction: column;
}
.block-naw-elem-logo {
  width: 117px;
  height: 30px;
  margin-top: 80px;
}
.block-naw-elem-btn{
  width: 63px;
  height: 30px;
  border: none;
  background-color: white;
  cursor: pointer;
  margin-top: 20px;
}
i {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
.type-form-p{
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;cursor: pointer;

}
.type-form-block{
  width: 170px;
  height: 173px;
  margin-top: 50px;
}
.type-form-p:hover{
  color: #3EA748;
}
.type-form-btn1{
  background-color: white;
  color: #3EA748;
  border: 1px solid #3EA748;
  border-radius: 10px;
  width: 160px;
  height: 51px;
  margin-top: 350px;
  cursor: pointer;
}
.type-form-btn2{
  background-color: #3EA748;
  color: white;
  border-radius: 10px;
  width: 160px;
  height: 51px;
  cursor: pointer;
  border: none;
  margin-top: 10px;
}
.block-create-list{
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
}
.block-create-text-logo{
 margin-top:80px;
  font-size: 40px;
  font-weight: 500;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: left;
}
.text-sikret{
  margin-top: 30px;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
}
.create-last-name{
  cursor: pointer;
 color: #3EA748;
  border: 1px dotted #3EA748;
  height: 71px;
  background-color: #F6F6F6;
  border-radius: 10px;
  margin-top: 30px;
}
.div-btn{
  display: flex;
  align-items: flex-start;
}
.pull-text{
  width: 113px;
  height: 10px;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 15px;
}
.plus{
font-size: 40px;
width: 40px;
height: 40px;
  margin-left: 355px;
  margin-bottom: 10px;
}
.text-field{
  margin-top: 50px;
  height: 30px;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
}
.div-ifo-delete{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: darkgray;
}
.div-info{
  display: flex;
}
.last-name{
  color: darkgray;
}
.contact{
margin-left: 16px;
}
.btn-delete{
  color: #3EA748;
  background-color: #F6F6F6;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
.inp-last-name{
  height: 70px;
  border-radius: 10px;
  border: none;
  text-indent: 30px;
}
.inp-last-name::-webkit-input-placeholder{
  color: black;
}
.div-chect{
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.text-field-about{
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
margin-left: 20px;
}
.valited-name{
  position: absolute;
  color: red;
  margin-left: 40px;
  margin-top: 5px;
}
</style>
  color: darkgray;
