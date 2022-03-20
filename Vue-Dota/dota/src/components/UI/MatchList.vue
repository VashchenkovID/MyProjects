<template>
  <div class="tabHeader">
    <div class="tab-column">Id</div>
    <div class="tab-column" id="two">Длительность</div>
    <div class="tab-column" id="rad">Radiant</div>
    <div class="tab-column" id="dire">Dire</div>
  </div>
  <div :key="match.id" v-for="match in matches">
    <ul>
      <li class="item">
        <div class="item__content">
          <MatchItem class="team-item" :match="match" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import MatchItem from "./MatchItem.vue";

export default {
  data() {
    return {};
  },
  props: {
    matches: {
      type: Array,
      required: true,
    },
  },
  methods: {},
  components: { MatchItem },
};
</script>

<style  scoped>
.tabHeader {
  display: flex;
  background: #301070;
  padding: 20px 20px 20px 30px;
}

#two {
  margin-left: 234px;
}
#rad {
  margin-left: 80px;
}
#dire {
  margin-left: 350px;
}
.tab-column {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #FFFFFF;
}
ul {
  margin: 0;
  padding: 0;
}
.item {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  vertical-align: middle;
  /* Main colors/Brightest violet */

  color: #e0d8ff;

  border-top: none;
  border: 3px solid #301070;
}
.index {
  margin-top: 40px;
  padding-left: 40px;
}
.item__content {
  display: flex;
}
.team-item {
  padding-top: 0;
}
</style>