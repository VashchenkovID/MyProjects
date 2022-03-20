<template>
  <div class="container">
    <div class="container__content">
      <header>
        <MyButton @click="showDialog">
          <img class="img" src="@/components/img/startPage/buttonMan.svg" />
          <span> Авторизация</span></MyButton
        >
        <MyDialog v-model:show="dialogVisible"> </MyDialog>
      </header>
      <section class="content__title">
        <div class="title__logo">
          <img class="logo__logo" src="@/components/img/startPage/logo.svg" />
        </div>
        <div class="title__search">
          <MyInput
            class="title__input"
            type="text"
            placeholder="Поиск по сайту..."
          />
        </div>
        <div class="title__btns">
          <MyRouterButton>
            <router-link to="/matches"> Список матчей</router-link>
          </MyRouterButton>
          <MyRouterButton class="routeBtn"
            ><router-link to="/teams"
              >Список команд</router-link
            ></MyRouterButton
          >
        </div>
        <div class="title__icons">
          <div class="icon">
            <ul class="icon__list">
              <li class="icon__logo">
                <img src="@/components/img/startPage/2.svg" />
              </li>
              <li class="icon__text">Открытый источик</li>
              <li class="icon__sub-text">
                Вся информация и данные для сайта берутся из OpenSource данных.
              </li>
            </ul>
          </div>
          <div class="icon">
            <ul class="icon__list">
              <li class="icon__logo">
                <img src="@/components/img/startPage/3.svg" />
              </li>
              <li class="icon__text">Подробные данные</li>
              <li class="icon__sub-text">
                Анализ файлов повторов предоставляет очень подробные данные о
                матче.
              </li>
            </ul>
          </div>
          <div class="icon">
            <ul class="icon__list">
              <li class="icon__logo">
                <img src="@/components/img/startPage/4.svg" />
              </li>
              <li class="icon__text">Бесплатно</li>
              <li class="icon__sub-text">
                Серверы финансируются спонсорами, а код поддерживают волонтеры,
                поэтому услуга предоставляется бесплатно.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="footer__content">
          <div class="footer__text">2022© OpenDota</div>
          <div>
            <nav>
              <a href="" class="footer__text nav">О нас</a
              ><a href="" class="footer__text nav">Политика конфидициальности</a
              ><a href="" class="footer__text nav">Документация API</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MyRouterButton from "@/components/UI/MyRouterButton.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {
    MyButton,
    MyInput,
    MyRouterButton,
    MyDialog,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {},
  computed: {},
};
</script>
<!-- Обратить внимание на фон, из за него долго грузится приложение-->
<style scoped>
body {
  margin: 0;

  background-position-y: 0;
  -webkit-background-size: cover;
  background-size: cover;
}

a {
  text-decoration: none;
}

#app {
  background: linear-gradient(
      to bottom,
      rgba(16, 0, 37, 0.9) 0%,
      rgba(16, 0, 37, 0.9) 20%,
      rgba(23, 1, 53)
    )
    no-repeat;
  margin: 0;
  padding: 0;
  width: 100%;
}
.container__content {
  padding: 40px;
}
span {
  padding-left: 15px;
  vertical-align: center;
}
.img {
  margin-top: 10px;
  vertical-align: bottom;
}
header {
  display: flex;
  justify-content: flex-end;
}
.content__title {
  margin-top: 110px;
  margin-left: 229px;
  margin-right: 250px;
}
.title__logo {
  margin-left: 390px;
}
.title__input {
  margin-top: 100px;
  margin-left: 390px;
}
.title__btns {
  margin-top: 60px;
  margin-left: 390px;
}
.routeBtn {
  margin-left: 30px;
}
.title__icons {
  margin-left: 50px;
  margin-top: 110px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: 70px;
}
.icon {
  width: 420px;
  height: 305px;
}
.icon:not(:first-child) {
  margin-left: 26px;
}

.icon__logo {
  margin-left: 130px;
}
.icon__text {
  margin-top: 55px;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;

  text-align: center;
  text-transform: uppercase;

  color: #e0d8ff;
}
.icon__sub-text {
  margin-top: 50px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #e0d8ff;

  opacity: 0.75;
}
.footer {
  background: rgba(16, 0, 37);

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.footer__content {
  padding: 25px 80px 25px 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer__text {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #e0d8ff;
}
.nav:not(:last-child) {
  margin-right: 40px;
}
</style>
