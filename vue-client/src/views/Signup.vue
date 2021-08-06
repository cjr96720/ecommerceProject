<template>
  <AddMember @add-member="addMember" />
</template>

<script>
import AddMember from "../components/AddMember";

export default {
  name: "Signup",
  components: {
    AddMember,
  },
  methods: {
    addMember(newMember) {
      console.log(newMember);
      const url = `${process.env.VUE_APP_URL_PREFIX}/api/signup`;
      axios
        .post(url, newMember)
        .then((data) => {
          console.log(data);
          alert("Welcome!");
          this.$router.push("/login");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
