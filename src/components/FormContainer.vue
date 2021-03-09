<template>
  <section id="validation-section">
    <div v-if="showForm" class="container-fluid">
      <img
        id="visitors-v-logo"
        alt="Vue logo"
        src="./../assets/visitors-logo.jpg"
      />
      <form
        class="form-horizontal pt-2"
        id="validation-form"
        action="register-complete.html"
      >
        <legend class="register-text pb-2">{{ registermsg }}</legend>

        <FormField
          v-for="item of items"
          :key="item.id"
          :dataitem="item"
          @contentChanged="item.value = $event"
        >
        </FormField>
        <label class="col-md-4 control-label" for="register-button-id"></label>
        <div class="">
          <button
            id="submit-register-button"
            type="submit"
            @click="checkForm"
            class="btn btn-danger mr-2"
          >
            Join Us
          </button>
        </div>
      </form>
      <footer class="pt-3 mb-4">© 2021 smc designs</footer>
    </div>
    <div v-else @click="toggleForm" class="thankyou"></div>
  </section>
</template>

<script type="text/javascript" src="./../Scripts/formContainer.js"></script>
<style src="./../Styles/CSS/form-container.css"></style>
