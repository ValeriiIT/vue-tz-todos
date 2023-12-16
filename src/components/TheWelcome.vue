<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
<div class="about-class">
  <div class="block-login">
    <div class="login-form">
      <img class="login-img" src='../assets/logo.png'>
      <h1 class="login-text">Авторизация</h1>
      <input class="input-log" type="email" placeholder="Логин">
      <input class="input-log" type="password" placeholder="Пароль" >
      <RouterLink class="link" to="/about"><button class="login-btn">Вход</button></RouterLink>

    </div>
    <div class="login-info">
      <p>Если возникла проблема, то можете написать <a class="pass">Алёне из Сибтеха</a></p>
      <p>С любовью, ваш <a class="pass">Сибтех</a></p>
    </div>
  </div>
  <div class="block-concent">
    <img class="img1" src="../assets/img1.svg">
    <img class="img2" src="../assets/img2.svg">
    <img class="img3" src="../assets/img3.svg">
    <img class="img4" src="../assets/img4.svg">
    <img class="img5" src="../assets/img5.svg">
    <img class="img6" src="../assets/img6.svg">
  </div>
</div>
<RouterView/>
</template>

<style>
.about-class{
  display: flex;
}
.block-login{
  height: 902px;
  width: 850px;
  background-color: white;
  z-index: 2;
}
.block-concent{
 width: 100%;
  height: 940px;
  background-color: #3EA748;
  display: flex;
  position: relative;
  overflow: hidden;
}
.login-form {
  margin-left: 179px;
  margin-top: 40px;
}
.login-btn{
  width: 160px;
  height: 50px;
  color: white;
  background-color: #3EA748;
  border: none;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
}
.input-log{
  width: 350px;
  height: 70px;
  border-radius: 10px;
  text-indent: 20px;
  border: none;
  background-color: #F6F6F6;
  margin-top: 10px;
  font-size: 15px;
}
.login-info{
  margin-top: 450px;
  width: 260px;
  height: 73px;
  margin-left: 179px;
}
.pass{
  color: #3EA748;
  text-decoration: underline;
  cursor: pointer;
}

.img1{
  position: absolute;
  bottom: 0px;
  left: -170px;
  z-index: 1;
}

.img2{
  position: absolute;
  top: 203px;
  left: 200px;
}
.img3{
  position: absolute;
  top: 44px;
  left: 50px;
}
.img4{
  position: absolute;
  left: 700px;
  bottom: 0px;
}

.img5{
  position: absolute;
  top: 97px;
  right: 300px;
}

.img6{
  position: absolute;
  top: 550px;
  right: 300px;
}
.link {
  text-decoration: none;
  color: white;
}
</style>
