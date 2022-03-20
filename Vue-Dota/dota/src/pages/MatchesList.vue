<template>
  <div class="wrapper">
    <div class="content">
      <header>
        <div class="navbar">
          <BurgerIcon @click="showBurger" />
          <div>
            <img
              class="navbar__logo"
              src="@/components/img/startPage/logo.svg"
            />
          </div>
          <MyBurger v-model:showBurg="isBurgerVisible"></MyBurger>
        </div>
      </header>
      <section class="content__container">
        <h1>Список матчей</h1>
        <MatchList v-if="!isMatchLoading" :matches="postsMatches" />
        <div class="loading" v-else>
          <div class="loading__style">Загрузка</div>
        </div>
        <div class="loadmore">
          <MyRouterButton class="loadMore" @click="loadMoreMatches">
            Загрузить еще</MyRouterButton
          >
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
import MyBurger from "@/components/UI/MyBurger.vue";
import BurgerIcon from "@/components/UI/BurgerIcon.vue";
import MatchList from "@/components/UI/MatchList.vue";
import MyRouterButton from "@/components/UI/MyRouterButton.vue";
import axios from "axios";
export default {
  components: { BurgerIcon, MatchList, MyRouterButton, MyBurger },
  data() {
    return {
      isBurgerVisible: false,
      arr: [],
      loadMoreArr: [],
      postsMatches: [],
      matches: [],
      isMatchLoading: false,
    };
  },
  methods: {
    // Получение данных
    fetchMatches() {
      try {
        this.isMatchLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            "https://api.opendota.com/api/proMatches"
          );
          this.matches = response.data;
           console.log(this.matches);
        }, 100);
      } catch (e) {
        alert("Ошибка");
      }
    },
    // Обработка и вывод данных
    addMatches() {
      try {
        this.isMatchLoading = true;
        setTimeout(() => {
          this.isMatchLoading = false;
          // Обработка полученных данных ( разделил на 100 массивов по 10 объектов)
          const count = parseInt(this.matches.length / 10);
          for (let i = 0; i < count; i++) {
            this.loadMoreArr.push(this.matches.slice(i * 10, i * 10 + 10));
          }
          // На случай, если количество объектов превысит 1000 остаток будет заноситься в последний массив
          if (count * 10 < this.matches.length) {
            this.loadMoreArr.push(this.matches.slice(count * 10));
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
            this.postsMatches.push(this.arr[i]);
            this.loadMoreArr.shift(this.loadMoreArr[i]);
          }
          return this.postsMatches;
        }, 1000);
      } catch (e) {
        alert("Ошибка");
      }
    },
    // Добавление еще 10 данных
    loadMoreMatches() {
      //Делим массив из 10 массивов по одному
      for (let i = 0; i < this.loadMoreArr.length; i++) {
        let size = 10;
        for (let i = 0; i < Math.ceil(this.loadMoreArr[i].length / size); i++) {
          this.arr = this.loadMoreArr[i].slice(i * size, i * size + size);
        }
      }
      // Добавляем 10 объектов и стираем их из данных
      for (let i = 0; i < this.arr.length; i++) {
        this.postsMatches.push(this.arr[i]);
        this.loadMoreArr.shift(this.loadMoreArr[i]);
      }
    },
    showBurger() {
      this.isBurgerVisible = true;
    },
  },
  mounted() {
    this.fetchMatches();
    this.addMatches();
   
  },
};
</script>

<style  scoped>
.wrapper {
  margin: 0;
  padding: 0;
}
.content {
  padding: 20px;
  padding-left: 40px;
}
.content__container {
  margin-left: 270px;
  margin-right: 270px;
}
.navbar {
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