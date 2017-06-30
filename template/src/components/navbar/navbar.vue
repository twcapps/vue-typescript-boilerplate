<template>
<nav class="component-navbar navbar navbar-default navbar-static-top">
  <div class="container">
    <div class="navbar-header">
    <router-link to="/" class="navbar-brand">
    <img src="../../assets/images/logo.png" alt="brand" class="img-responsive"> {{{{raw-helper}}}}{{ "navbar-title" | format-message }}{{{{/raw-helper}}}}
    </router-link>
    </div>
  </div>
</nav>
</template>
<style lang="scss" src="./navbar.scss" scoped></style>
