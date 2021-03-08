<template>
  <div class="form-row">
    <div class="form-group col-lg">
      <label
        :class="dataconfirmpwditem.labelclass"
        :for="dataconfirmpwditem.inputidtag"
      >
        {{ dataconfirmpwditem.label }}
      </label>
      <div class="col">
        <input
          :id="dataconfirmpwditem.inputidtag"
          :name="dataconfirmpwditem.idtag"
          :type="dataconfirmpwditem.type"
          :placeholder="dataconfirmpwditem.placeholder"
          :class="dataconfirmpwditem.inputclass"
        />{{ dataconfirmpwditem.textinsideinput }}
        <span class="help-block" id="city-error"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" src="./../Scripts/confirmPwdField.js"></script>
<style src="./../Styles/CSS/confirm-pwd-field.css"></style>
