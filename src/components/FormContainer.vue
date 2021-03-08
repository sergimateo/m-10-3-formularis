<template>
  <section id="validation-section">
    <div class="pt-2 container-fluid">
      <form
        class="form-horizontal"
        id="validation-form"
        action="register-complete.html"
      >
        <legend class="pb-2">Registration Form</legend>

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
            class="btn btn-secondary mr-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <footer class="pt-3">© Copyright 2021 - SMC Designs</footer>
  </section>
</template>

<script type="text/javascript" src="./../Scripts/formContainer.js"></script>
<style src="./../Styles/CSS/form-container.css"></style>
