<template>
  <div class="dialog" v-if="reg === true" @click.stop="closeDialog">
    <slot>
      
      <div  class="content">
        <button>Х</button>
        <div @click.stop class="content__container">
          <div class="content__title">Регистрация</div>
          <form class="cont__form">
            <div class="cont__flex">
              <label class="form__label" for="email"> E-mail </label>
              <input
              :value="email" 
              @input="email = $event.target.value"
               class="form__input" name="email" type="email" />
              <label class="form__label" for="email">Логин </label>
              <input
              :value="login" 
              @input="login = $event.target.value"
               class="form__input" name="login" type="text" />
            </div>
            <div class="cont__flex">
              <label class="form__label" for="password">Пароль </label>
              <input 
              :value="password" 
              @input="password = $event.target.value"
              class="form__input" name="password" type="text" />
              <label class="form__label" for="password"
                >Повторите пароль
              </label>
              <input 
              :value="passwordTwo" 
              @input="passwordTwo = $event.target.value"
              class="form__input" name="password" type="text" />
            </div>
          </form>
          <div class="checkbox">
            <input type="checkbox" /><label
              >Согласен с политикой конфидициальности</label
            >
          </div>
          <button class="form__btn" type="submit">Регистрация</button>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email: '',
      login: '',
      password: '',
      passwordTwo: '',
    }
  },
  props: {
    reg: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeDialog() {
      this.$emit("update:reg", false);
    },
  },
};
</script>

<style l scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
}
.content {
  z-index: 100;
  margin: auto;
  background: white;
}
.content__container {
  margin-top: 0;
  margin-left: 120px;
}

.content__title {
  margin: 44px 206px 0px 106px;
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
.cont__form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 36px 80px 0px 80px;
}
.cont__flex {
  display: flex;
  flex-direction: column;
}
.form__label {
  display: block;
}
.form__label > *:first-child {
  width: 8em;
  text-align: right;
  display: inline-block;
  background-color: #eee;
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

  width: 128px;
  height: 50px;
  background: #7540f0;
  border-radius: 4px;
  margin-left: 180px;
margin-bottom: 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  /* Main colors/White */

  color: #ffffff;
}
.checkbox {
  margin-top: 20px;
  margin-left: 80px;
}
</style>