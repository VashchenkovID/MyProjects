<template>
  <div>
    <div class="header__navbar">
      <div class="stats">
        <ul class="flex">
          <li class="stats__item">Игрок</li>
          <li class="stats__item">lvl</li>
          <li class="stats__item">k</li>
          <li class="stats__item">d</li>
          <li class="stats__item">a</li>
          <li class="stats__item">lh/dh</li>
          <li class="stats__item">net</li>
          <li class="stats__item">gmp/xpm</li>
          <li class="stats__item">hd</li>
          <li class="stats__item">td</li>
          <li class="stats__item">hh</li>
          <li class="stats__item">предметы/бафы</li>
        </ul>
      </div>
    </div>
    <div v-for="player in players" :key="player.player_slot">
      <DetailItem :player="player" />
    </div>
  </div>
</template>

<script>
import DetailItem from "./DetailItem.vue";

export default {
  data() {
    return {
      radiant: [],
      dire: [],
    };
  },
  props: {
    players: {
      type: Array,
      required: true,
    },
  },
  methods: {},

  components: { DetailItem },
  mounted() {},
};
</script>

<style  scoped>
.header__navbar {
}
.player {
}
.stats {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;

  /* Main colors/White */

  color: #ffffff;
  margin-left: 270px;
  margin-right: 270px;
  padding: 10px 14px 10px 4px;
  border: 1px solid #301070;
  background: #301070;
}
.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.stats__item {
}
.stats__item:first-child {
  margin-right: 155px;
}
</style>