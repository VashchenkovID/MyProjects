<template>
  <div>
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
      <h1>Детальная информация матча</h1>
      <section class="title">
        <div class="title__content">
          <div class="header">
            <div v-if="winTeam" class="win">
              <div class="win__team">
                <div class="team__logo">
                  <img src="@/components/img/Vector.png" alt="" />
                </div>
                <div class="team__winner">Победа: Radiant</div>
              </div>
            </div>
            <div v-if="!winTeam" class="lose">
              <div class="lose__team">
                <div class="team__logo">
                  <img src="@/components/img/Vector.png" alt="" />
                </div>
                <div class="team__winner">Победа: Dire</div>
              </div>
            </div>
            <div class="kills-radiant">{{ details.radiant_score }}</div>
            <div class="all-draft">
              <div class="draft">All draft</div>
              <div class="time">{{ timeMatch() }}</div>
              <div class="last-time">{{ timeAfterMatch() }}</div>
            </div>
            <div class="kills-dire">{{ details.dire_score }}</div>
            <div class="match-in">
              <div class="info__icon">
                <ul>
                  <li>ID матча</li>
                  <li>{{ details.match_id }}</li>
                </ul>
              </div>
              <div class="info__icon">
                <ul>
                  <li>Регион</li>
                  <li>Russia</li>
                </ul>
              </div>
              <div class="info__icon">
                <ul>
                  <li>Навык</li>
                  <li>{{ leagueInfo.tier }}</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="buttons">
            <button>
              <img src="@/components/img/matchDetails/Vector.png" />Анализ
            </button>
            <button>
              <img src="@/components/img/matchDetails/Vector(1).png" />Загрузить
              запись
            </button>
          </div>
        </div>
      </section>
      <section class="table">
        <div class="table__header">
          <div class="header__rad">Radiant</div>
          <div class="header__stat">Статистика команды</div>
          <div v-if="winTeam" class="final_win">победители</div>
          <div v-else class="final_lose">Проигравшие</div>
        </div>
        <PlayerDetailList :players="filterRadiant" />
      </section>
      <section class="table" id="dire">
        <div class="table__header">
          <div class="header__rad">Dire</div>
          <div class="header__stat">Статистика команды</div>
          <div v-if="!winTeam" class="final_win">победители</div>
          <div v-else class="final_lose">Проигравшие</div>
        </div>

        <PlayerDetailList :players="filterDire" />
      </section>
    </div>
  </div>
</template>

<script>
import BurgerIcon from "@/components/UI/BurgerIcon.vue";
import MyBurger from "@/components/UI/MyBurger.vue";
import PlayerDetailList from "@/components/PlayerDetailList.vue";
import axios from "axios";
export default {
  data() {
    return {
      playersAcc: [],
      playersInfo: [],
      details: [],
      leagueInfo: [],
      isBurgerVisible: false,
      heroItem: [],
      heroId: [],
      players: [],
      winTeam: [],
    };
  },
  methods: {
    showBurger() {
      this.isBurgerVisible = true;
    },
    destructionForReq() {
      //----------------------------------------Деструктуризация для запроса на сервер
      this.playersInfo = this.details.players;
    },
    heroFetch() {
      try {
        setTimeout(async () => {
          const response = await axios.get(
            `https://api.opendota.com/api/heroStats`
          );
          this.heroItem = response.data;
          const detail = sessionStorage.getItem("detail");

          if (detail) {
            this.details = JSON.parse(detail);
            this.winTeam = this.details.radiant_win;

            this.leagueInfo = this.details.league;
          }

          this.playersInfo = this.details.players;
          for (let key in this.playersInfo) {
            let result = this.playersInfo[key];
            result.heroes = this.heroItem;
            this.players.push(result);
          }
        }, 10);
      } catch (e) {
        alert("Ошибка");
      }
    },
    timeMatch() {
      let result = this.details.start_time;
      let hours = new Date(result).getHours();
      let minutes = new Date(result).getMinutes();
      let seconds = new Date(result).getSeconds();
      return `${hours}:${minutes}:${seconds}`;
    },
    timeAfterMatch() {
      const date = Date.now();
      let currentDate = this.details.start_time;
      let time = Math.ceil(-(currentDate - date));
      let hours = new Date(time).getHours();
      return `Закончился ${hours} часов назад `;
    },
  },
  computed: {
    filterRadiant() {
      return [...this.players].filter((item) => item.isRadiant);
    },
    filterDire() {
      return [...this.players].filter((item) => !item.isRadiant);
    },
  },
  mounted() {
    this.heroFetch();
    this.timeMatch();
  },
  components: { BurgerIcon, MyBurger, PlayerDetailList },
};
</script>

<style  scoped>
#dire {
  padding-top: 40px;
}
h1 {
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  /* identical to box height */

  text-transform: uppercase;
  color: #e0d8ff;
}
.content {
  padding: 30px;
}
.navbar {
  display: flex;
}

.navbar__logo {
  width: 190px;
  height: 32px;
  margin-left: 20px;
}
.title {
  margin-left: 80x;
}
.title__content {
  margin-left: 40px;
}
.header {
  display: flex;
  justify-content: space-around;
  margin-right: 270px;
  margin-left: 190px;
}
.win {
}
.win__team {
  display: flex;
  text-align: center;
  background: #fff;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
}
.lose {
}
.lose__team {
  display: flex;
  text-align: center;
  background: #000;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
}

.kills-radiant {
  margin-left: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;

  /* Main colors/Lime */

  color: #bbdd00;
}
.all-draft {
  margin-left: 90px;
}
.draft {
}
.team__logo {
}
.team__winner {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #7d3800;
  margin-left: 10px;
}

.all-draft {
  text-align: center;
}
.draft {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  /* Main colors/White */

  color: #ffffff;
}
.time {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  /* Main colors/White */

  color: #ffffff;
}
.last-time {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  /* Main colors/Brightest violet */

  color: #e0d8ff;
}
.kills-dire {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;

  /* Main colors/Orange */
margin-left: 40px;
  color: #fa7000;
}
.match-in {
  display: flex;
}
.info__icon {
  padding-top: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
}

.buttons {
  display: flex;
  margin-left: 650px;
}
button {
  margin: 20px;
  padding: 0px 20px 0px 20px;
  height: 50px;

  ont-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  /* Main colors/Black */

  color: #000000;
  white-space: nowrap;

  background: #ffffff;
  border-radius: 4px;
}
.table {
}
.table__header {
  margin-left: 270px;
  margin-right: 270px;
  display: flex;
  padding-left: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  padding: 20px;
  /* Main colors/White */
  background: rgba(36, 3, 63, 0.5);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  color: #ffffff;
}
.header__rad {
  padding-top: 5px;
}
.header__stat {
  margin-left: 20px;
  padding-top: 5px;
}
.final_lose {
  background: rgba(250, 112, 0, 0.25);
  border-radius: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  /* Main colors/Orange */

  color: #fa7000;
  padding: 5px 15px 5px 15px;
  margin-left: 10px;
}
.final_win {
  background: rgba(187, 221, 0, 0.25);
  border-radius: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-left: 10px;

  /* Main colors/Orange */

  color: #bbdd00;
  padding: 5px 15px 5px 15px;
}
</style>