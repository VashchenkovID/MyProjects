<template>
  <div :key="team.id" v-for="(team, index) in teams">
    <ul>
      <li class="item">
        <div class="item__content">
          <div class="index">{{ index + 1 }}st</div>
          <TeamItem class="team-item" :team="team"></TeamItem>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import TeamItem from "./TeamItem.vue";
export default {
  data() {
    return {};
  },
  props: {
    teams: {
      type: Array,
      required: true,
    },
  },
  methods: {},
  components: { TeamItem },
};
</script>

<style  scoped>
ul{
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
  margin-left: 222px;
  
}
</style>