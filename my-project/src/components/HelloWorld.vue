<template>
  <div class="hello">
    <h1>welcome,num is {{ count }}</h1>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  created() {
    this.num = this.$store.state.count;
    console.log("输出this.$store.state", this.$store.state);
    console.log(
      "输出this.$store.getters.getStateCount",
      this.$store.getters.getStateCount
    );
  },
  methods: {
    add() {
      this.$store.commit("add");
      console.log("commit add:", this.$store.getters.getStateCount);
    },
    sub() {
      this.$store.dispatch("subAction");
      console.log("store dispatch sub", this.$store.state.count);
    },
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
