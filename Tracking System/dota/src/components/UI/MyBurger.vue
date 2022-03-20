<template>
  <div class="burger" v-if="showBurg" @click.stop="hideBurger">
    <div class="burger__content">
      <div class="closer">X</div>
      <ul @click.stop class="burger__nav">
        <li class="item__style">
          <router-link class="link" to="/"> На главную</router-link>
        </li>

        <li class="item__style">
          <router-link class="link" to="/matches"> Матчи</router-link>
        </li>
        <li class="item__style">
          <router-link class="link" to="/teams"> Команды</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showBurg: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideBurger() {
      this.$emit("update:showBurg", false);
    },
  },
};
</script>

<style  scoped>
.link {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  /* Main colors/Brightest violet */

  color: #e0d8ff;
}
.burger {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.closer {
  text-align: right;
  margin: 20px;
  padding-top: 20px;

  color: #e0d8ff;

  cursor: pointer;
}
.burger__content {
  background: rgba(16, 0, 37, 0.5);
  width: 400px;
  height: 600px;
}

.burger__nav {
  padding-top: 10px;
  margin-right: 30px;
}
.item__style {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  /* Main colors/Brightest violet */

  color: #e0d8ff;
  padding-top: 50px;
  padding-bottom: 10px;
  width: 100%;
  border-bottom: 1px solid #e0d8ff;
  cursor: pointer;
}
.item__style:hover {
  color: #86f30a;
}
</style>