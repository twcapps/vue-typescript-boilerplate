<template>
<footer class="component-footer footer">
  <div class="container text-center">
    <p class="text-muted">{{{{raw-helper}}}}{{ $formatMessage("footer-powered-by", { version : version, build : build }) }}{{{{/raw-helper}}}}</p>
  </div>
</footer>
</template>
<style lang="scss" src="./foot.scss" scoped></style>
