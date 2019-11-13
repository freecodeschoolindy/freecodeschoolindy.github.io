<template>
  <div
    class="alert alert-danger alert-dismissible"
    role="alert"
  >
    There was an error on the server during a request for data.
    <strong>Please reload the page.</strong>
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
      @click="$emit('dismissed')"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
module.exports = {
  name: 'network-error'
};
</script>
