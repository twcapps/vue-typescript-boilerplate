<template>
<nav class="component-navbar navbar navbar-default navbar-static-top">
  <div class="container">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">
        <img src="../../assets/images/logo.png" alt="brand" class="img-responsive" />
        <span>{{{{raw-helper}}}}{{ "navbar-title" | format-message }}{{{{/raw-helper}}}}</span>
      </router-link>
      <p class="navbar-button-right" v-on:click="onClickLoginDemo()">{{{{raw-helper}}}}{{ loginButtonText }}{{{{/raw-helper}}}}</p>
    </div>
  </div>
</nav>
</template>
<style lang="scss" src="./navbar.scss" scoped></style>
