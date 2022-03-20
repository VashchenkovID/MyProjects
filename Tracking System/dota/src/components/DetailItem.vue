<template>
  <div>
    <div class="content">
      <div class="flex">
        <div class="flex__item">
          <div class="flex__icon">
            <div>
              <div>
                <img
                  class="hero_img"
                  :src="`https://api.opendota.com${this.heroImg}`"
                  alt="err"
                />
              </div>
            </div>
            <div>
              <div class="item__nickname">{{ this.personName }}</div>
              <div class="item__hero">{{ this.heroName }}</div>
            </div>
          </div>
        </div>
        <div class="flex__item">
          <div class="item__lvl">{{ player.level }}</div>
        </div>
        <div class="flex__item">
          <div class="item__kills">{{ player.kills }}</div>
        </div>
        <div class="flex__item">
          <div class="item__deaths">{{ player.deaths }}</div>
        </div>
        <div class="flex__item">
          <div class="item__assist">{{ player.assists }}</div>
        </div>
        <div class="flex__item">
          <div class="item__crips">
            {{ player.last_hits }}/{{ player.denies }}
          </div>
        </div>
        <div class="flex__item">
          <div class="item__new">{{ player.net_worth }}.k</div>
        </div>
        <div class="flex__item">
          <div class="item__gmp">
            {{ player.total_gold }}/{{ player.gold_spent }}
          </div>
        </div>
        <div class="flex__item">
          <div class="item__hd">{{ player.total_xp }}.k</div>
        </div>
        <div class="flex__item">
          <div class="item__td">{{ player.hero_damage }}</div>
        </div>
        <div class="flex__item">
          <div class="item__hh">{{ player.hero_healing }}</div>
        </div>
        <div class="flex__item">
          <div class="item__backpack">
            <div class="backpack">{{ player.backpack_0 }}</div>
            <div class="backpack">{{ player.backpack_1 }}</div>
            <div class="backpack">{{ player.backpack_2 }}</div>
            <div class="backpack">{{ player.backpack_3 }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      personName: [],
      accountName: [],
      accountProfile: [],
      heroImg: [],
      heroName: [],
    };
  },
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
  methods: {
    requestProfile() {
      try {
        setTimeout(async () => {
          const response = await axios.get(
            `https://api.opendota.com/api/players/${this.player.account_id}`
          );
          this.accountName = response.data;

          this.accountProfile = this.accountName.profile;
          this.personName = this.accountProfile.personaname;
        }, 10);
      } catch (e) {
        alert("Ошибка");
      }
    },
    destructionHeroes() {
      let heroes = this.player.heroes;
      let resultId = [];

      for (let key in heroes) {
        if (this.player.hero_id === heroes[key].id) {
          resultId = heroes[key].img;
          this.heroImg = resultId;
          this.heroName = heroes[key].localized_name;
        }
      }
      console.log(this.heroImg);
    },
  },

  mounted() {
    this.requestProfile();

    this.destructionHeroes();

  },
};
</script>

<style scoped>
.backpack {
  width: 30px;
  height: 22px;
  left: 0px;
  top: 0px;

  /* Main colors/Shade violet */

  background: #100025;
  color: #100025;
  opacity: 0.5;
  border-radius: 4px;
  margin-left: 5px;
}
.content {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 17px;
  /* identical to box height */

  /* Main colors/Brightest violet */

  color: #e0d8ff;
  margin-left: 270px;
  margin-right: 270px;
  padding: 30px 44px 30px 34px;
  border: 1px solid #301070;
  background: #170738;
}
.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
}

.item__nickname {
  font-size: 20px;
  line-height: 19px;
  color: #bbdd00;
  width: 200px;
  margin-left: 10px;
}
.item__hero {
  padding-top: 10px;
  margin-left: 10px;
}
.item__lvl {
  margin-left: 40px;
  width: 10px;
}
.item__kills {
  margin-left: 70px;
  width: 10px;
  color: #bbdd00;
}
.item__deaths {
  margin-left: 50px;
  width: 10px;
  color: #fa7000;
}
.item__assist {
  width: 10px;
  margin-left: 50px;
}
.item__crips {
  margin-left: 50px;
  width: 20px;
}
.item__new {
  margin-left: 70px;
  color: #eecd00;
  width: 30px;
}
.item__gmp {
  margin-left: 60px;
  width: 40px;
}
.item__hd {
  margin-left: 70px;
  width: 40px;
}
.item__td {
  margin-left: 40px;
  width: 40px;
}
.item__hh {
  margin-left: 50px;
  width: 10px;
}
.item__backpack {
  margin-left: 50px;
}
.hero_img {
  width: 48px;
  height: 27px;
}
.flex__icon {
  display: flex;
}
.item__backpack{
  display: flex;
  flex-direction: row;
}
</style>