<template>
  <ItemTable :items="items" @click-buy="clickBuy" />
</template>

<script>
import ItemTable from "../components/ItemTable";

export default {
  name: "Shop",
  components: {
    ItemTable,
  },
  data() {
    return {
      items: [],
    };
  },
  props: {
    cartCount: Number,
    loginStatus: Boolean,
  },
  methods: {
    async fetchItems() {
      const url = `${process.env.VUE_APP_URL_PREFIX}/api/shop`;

      const res = await fetch(url);
      const data = await res.json();
      //   console.log(data);
      return data;
      //   axios
      //     .get(url)
      //     .then((results) => {
      //       const { data } = results;
      //       console.log(data);
      //       return data;
      //     })
      //     .catch((error) => console.log(error));
    },
    clickBuy(id) {
      this.loginStatus ? this.$emit('click-buy', id) : alert('Please log in first!')
    },
  },
  async created() {
    this.items = await this.fetchItems();
  },
};
</script>
