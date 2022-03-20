<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div class="dialog__content">
      <slot>
      <LoginModal></LoginModal>
      </slot>
    </div>
  </div>
</template>

<script>
import LoginModal from "../LoginModal.vue";


export default {
    data() {
        return {};
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        hideDialog() {
            this.$emit("update:show", false);
        },
    },
    components: { LoginModal }
};
</script>

<style  scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
}
.dialog__content {
  margin: auto;
  background: white;
}
.dialog__cont {
  padding: 14px 80px 40px 80px;
}
.cont__closer {
  text-align: right;
  padding: 23px 23px 0px 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 19px;
  cursor: pointer;
}
.cont__title {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  /* identical to box height */
  color: #7540f0;

  text-align: center;
  text-transform: uppercase;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  display: block;
}
label > *:first-child {
  width: 8em;
  text-align: right;
  display: inline-block;
  background-color: #eee;
}
.cont__reg {
  display: flex;
  flex-direction: row;
}
.reg__form {
  margin-top: 33px;
}
.reg__subtext {
  padding-top: 7px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  /* Main colors/Gray */

  color: #808080;
}
.btnFlex {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  cursor: pointer;
  padding: 8px 10px 8px 10px;
  background: #fff;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  border: none;

  /* Main colors/Black */

  color: #000000;
}
.form__label {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-top: 36px;
  color: #000000;
}
.form__input {
  margin-top: 10px;
  width: 376px;
  height: 48px;
  background: #fff;
  border: none;
  border-bottom: 2px solid #e0e0e0;
}
.form__btn {
  z-index: 100;
  cursor: pointer;
  margin-top: 36px;
  margin-left: 124px;
  width: 128px;
  height: 50px;
  background: #7540f0;
  border-radius: 4px;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  /* Main colors/White */

  color: #ffffff;
}
.arrow {
  width: 8px;
  height: 8px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  margin-left: 10px;
  transform: rotate(45deg);
}
strong {
  margin-left: 30px;
}
</style>