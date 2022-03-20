<template>
  <div class="container">
    <div class="content">
      <div class="team">
        <div class="team__icon">
          <div class="team__logo">
            <img class="logo_img" :src="team.logo_url" alt="err" />
          </div>
          <div class="team-cont">
            <p class="team__title">{{ team.name }}</p>
            <p class="team__time">{{ lastTimeFor() }}</p>
          </div>
        </div>

        <div class="raiting">
          <div>{{ team.rating }}</div>
          <div>
            <meter
              min="-200"
              low="300"
              high="1400"
              max="1550"
              optimum="1500"
              :value="team.rating"
            ></meter>
          </div>
        </div>
        <div class="wins">
          <div>{{ team.wins }}</div>
          <div>
            <meter
              min="-200"
              low="300"
              high="1400"
              max="1550"
              optimum="1500"
              :value="team.wins"
            ></meter>
          </div>
        </div>
        <div class="loses">
          <div>{{ team.losses }}</div>
          <div>
            <meter
              min="-200"
              low="300"
              high="1400"
              max="1550"
              optimum="1500"
              :value="team.losses"
            ></meter>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeNow: Date.now(),
      valueRaiting: 0,
    };
  },
  props: {
    team: {
      type: Object,
      required: true,
    },
  },
  methods: {
    lastTimeFor() {
      const date = Date.now(); // время текущее
      let currentDate = this.team.last_match_time; // время из объекта
      let time = Math.ceil(date - currentDate);
      let month = new Date(time).getMonth();
      let days = new Date(time).getDay();
      if (month == 1) {
        return ` ${month} месяц назад`;
      } else {
        if (month > 1) {
          return ` ${month} месяца  назад`;
        }
      }
      return `  ${days} дней назад`;
    },
    meterRait() {
      this.valueRaiting = this.team.rating;
    },
  },
};
</script>

<style scoped>
.team {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.team__icon {
  display: flex;
  width: 300px;
}
.team-cont {
  width: 250px;
}
.logo_img {
  vertical-align: center;
  width: 40px;
  height: 40px;
  margin-top: 40px;
  margin-right: 20px;
}
.team__title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  /* Main colors/Lime */

  color: #bbdd00;
}
.team__time {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  /* Main colors/Brightest violet */

  color: #e0d8ff;
}
.raiting {
  text-align: left;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  /* Main colors/Brightest violet */
  padding: 0;
  color: #e0d8ff;
  padding-top: 40px;
  margin-left: 55px;
}
.wins {
  text-align: left;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  padding-top: 40px;
  /* Main colors/Brightest violet */

  color: #e0d8ff;
  margin-left: 145px;
}
.loses {
  text-align: left;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  padding-top: 40px;
  /* Main colors/Brightest violet */

  color: #e0d8ff;
  margin-left: 145px;
}

meter {
  width: 128px;
  -webkit-appearance: auto;
  height: 15px;

  border-radius: 6px;
}
::-webkit-meter-bar {
  background: #100025;
}

::-webkit-meter-optimum-value {
  background: #7540f0;
  color: #000;
}
::-webkit-meter-suboptimum-value {
  background: #bbdd00;
}
::-webkit-meter-even-less-good-value {
  background: #fa7000;
}
</style>