<template>
  <div class="container">
    <div class="navbar">
      <BurgerIcon  @click="showBurger"/>
      <div>
        <img class="navbar__logo" src="@/components/img/startPage/logo.svg" />
      </div>
    </div>
    <MyBurger v-model:showBurg="isBurgerVisible"></MyBurger>
    <div class="content">
      <h1>Список команд</h1>
      <div class="tabHeader">
        <div class="tab-column">Ранг</div>
        <div class="tab-column">Название команды</div>
        <div class="tab-column">Рейтинг</div>
        <div class="tab-column">Победы</div>
        <div class="tab-column">Проигрыши</div>
      </div>
      <TeamList v-if="!isPostsLoading" :teams="teams"></TeamList>
      <div class="loading" v-else>
        <div class="loading__style">Загрузка</div>
        
        </div>
      <div class="loadmore">
        <MyRouterButton class="loadMore" @click="loadMoreTeams">
          Загрузить еще</MyRouterButton
        >
      </div>
    </div>
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
</template>

<script>
import MyRouterButton from "@/components/UI/MyRouterButton.vue";
import TeamList from "@/components/TeamList.vue";
import axios from "axios";
import MyBurger from "@/components/UI/MyBurger.vue";
import BurgerIcon from "../components/UI/BurgerIcon.vue";
export default {
  data() {
    return {
      isBurgerVisible: false,
      arr: [],
      loadMoreArr: [],
      teams: [],
      posts: [],
      isPostsLoading: false,
    };
  },
  methods: {
    // Получение данных
    fetchTeams() {
      try {
        this.isPostsLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            "https://api.opendota.com/api/teams"
          );
          this.posts = response.data;
        }, 100);
      } catch (e) {
        alert("Ошибка");
      }
    },
    // Обработка и вывод данных
    addTeams() {
      try {
        this.isPostsLoading = true;
        setTimeout(() => {
          this.isPostsLoading = false;

          // Обработка полученных данных ( разделил на 100 массивов по 10 объектов)
          const count = parseInt(this.posts.length / 10);

          for (let i = 0; i < count; i++) {
            this.loadMoreArr.push(this.posts.slice(i * 10, i * 10 + 10));
          }
          // На случай, если количество объектов превысит 1000 остаток будет заноситься в последний массив
          if (count * 10 < this.posts.length) {
            this.loadMoreArr.push(this.posts.slice(count * 10));
          }
          // Разделил 100 массивов по одному
          for (let i = 0; i < this.loadMoreArr.length; i++) {
            let size = 10;

            for (
              let i = 0;
              i < Math.ceil(this.loadMoreArr[i].length / size);
              i++
            ) {
              this.arr = this.loadMoreArr[i].slice(i * size, i * size + size);
            }
          }
          // Выводим 10 объектов и тут же удаляем их из массива с данными (не из исходного)
          for (let i = 0; i < this.arr.length; i++) {
            this.teams.push(this.arr[i]);
            this.loadMoreArr.shift(this.loadMoreArr[i]);
          }
          return this.teams;
        }, 1000);
      } catch (e) {
        alert("Ошибка");
      }
    },
    // Добавление еще 10 данных
    loadMoreTeams() {
      //Делим массив из 10 массивов по одному
      for (let i = 0; i < this.loadMoreArr.length; i++) {
        let size = 10;

        for (let i = 0; i < Math.ceil(this.loadMoreArr[i].length / size); i++) {
          this.arr = this.loadMoreArr[i].slice(i * size, i * size + size);
        }
      }
      // Добавляем 10 объектов и стираем их из данных
      for (let i = 0; i < this.arr.length; i++) {
        this.teams.push(this.arr[i]);
        this.loadMoreArr.shift(this.loadMoreArr[i]);
      }
    },
    // Бургер меню
    showBurger() {
      this.isBurgerVisible = true;
    },
    // Обновление данных
    stopTimer() {
      if (this.interval) {
        window.clearInterval(this.interval);
      }
    },
    startTimer() {
      this.stopTimer();
      this.interval = window.setInterval(() => {
        this.addTeams();
        console.log(1);
      }, 60000);
    },
  },
  mounted() {
    this.fetchTeams();
    this.addTeams();
    this.startTimer();
  },

  computed: {},
  components: { MyRouterButton, TeamList, MyBurger, BurgerIcon },
};
</script>

<style  scoped>
.loading{
  position: fixed;
  top: 0;left:0;right: 0;bottom: 0;
  background: rgba(0,0,0,0.9);
}
.loading__style{
  text-align: center;
 font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  margin: auto;
  padding: 17%;
  color: #e0d8ff;
}
.container {
  margin-left: 22px;
}
.content {
  margin-left: 270px;
  margin-right: 270px;
}
.navbar {
  padding: 20px;
  display: flex;
}

.navbar__logo {
  width: 190px;
  height: 32px;
  margin-left: 20px;
}
h1 {
  margin-top: 0;
  padding-top: 128px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  /* identical to box height */

  text-transform: uppercase;

  background: linear-gradient(268.55deg, #ebc1ff 0%, #e0d8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 0px 8px 16px rgba(16, 0, 37, 0.15);
}
.tabHeader {
  background: #301070;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
}
.tab-column {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  white-space: nowrap;
  margin: 20px 0px 20px 30px;
  padding-right: 20px;
  color: #ffffff;
}
.tab-column:last-child {
  padding-right: 50px;
}
.footer {
  background: rgba(16, 0, 37);

  position: relative;
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
.loadMore {
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 480px;
}
</style>