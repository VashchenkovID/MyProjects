<template>
  <div class="cont__closer">Х</div>
  <div @click.stop class="dialog__cont">
    <div class="cont__title">Авторизация</div>
    <form class="cont__form">
      <label class="form__label" for="email">Логин / E-mail </label>
      <input
        :value="email"
        @input="email = $event.target.value"
        class="form__input"
        name="email"
        type="text"
      />
      <label class="form__label" for="password">Пароль </label>
      <input
        :value="password"
        @input="password = $event.target.value"
        class="form__input"
        name="password"
        npm
        type="text"
      />
      <button class="form__btn" type="submit">Войти</button>
    </form>
    <div class="reg__form">
      <div class="cont__reg">
        <span class="reg__subtext">Нет учетной записи?</span>
        <strong
          ><button @click="showDialog" class="btnFlex">
            Регистрация
            <div class="arrow"></div></button
        ></strong>
      </div>
      <div class="cont__reg">
        <span class="reg__subtext">Забыли пароль?</span>
        <strong
          ><button class="btnFlex">
            Восстановить пароль
            <div class="arrow"></div></button
        ></strong>
      </div>
    </div>
  </div>
  <reg-dialog v-model:reg="regBtn"></reg-dialog>
</template>

<script>
import RegDialog from "./RegDialog.vue";
export default {
  components: { RegDialog },
  data() {
    return {
      email: "",
      password: "",
      regBtn: false,
    };
  },

  methods: {
    showDialog() {
      this.regBtn = true;
    },
    submitHandler() {
      if (this.$v.$indalid) {
        this.$v.$touch();
        return;
      }
    },
  },
};
</script>

<style  scoped>
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
  z-index: 0;
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