<template>
  <ItemTable :items="items" @buy-item="$emit('click-buy', id)" />
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
  },
  async created() {
    this.items = await this.fetchItems();
  },
};
</script>
