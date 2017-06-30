<template>
  <div id="app" class="app">
    <Navbar></Navbar>
    <transition name="router" mode="out-in">
      <router-view class="view router-view"></router-view>
    </transition>
    <Foot></Foot>
  </div>
</template>
