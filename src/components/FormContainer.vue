<template>
  <section id="validation-section">
    <div class="pt-2 container-fluid">
      <!-- Validation Form -->
      <form
        class="form-horizontal"
        id="validation-form"
        action="register-complete.html"
      >
        <!-- Form Name -->
        <legend class="ml-3 pb-4">Registration Form</legend>
        <div class="form-row"></div>
        <div>
          <app-form-field :key="item.id" :typeprop="item.type"></app-form-field>
        </div>
      </form>
    </div>
  </section>
</template>

<script type="text/javascript" src="./../Scripts/formContainer.js"></script>
<style src="./../Styles/CSS/form-container.css"></style>
