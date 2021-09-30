<template>
  <div>
    <Nav
      :loginStatus="loginStatus"
      :memberInfo="memberInfo"
      @logout="logout"
      :cartCount="cartCount"
    />

    <router-view
      @toggle-status="toggleStatus"
      @click-buy="clickBuy"
      :loginStatus="loginStatus"
    ></router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
  data() {
    return {
      loginStatus: false,
      memberInfo: {
        memberid: 0,
        memberName: "",
        memberEmail: "",
      },
      cartCount: 0,
    };
  },
  methods: {
    toggleStatus(loginInfo) {
      this.memberInfo.memberid = loginInfo[0].memberid;
      this.memberInfo.memberName = loginInfo[0].mname;
      this.memberInfo.memberEmail = loginInfo[0].email;

      localStorage.setItem("localLogin", true);
      localStorage.setItem("memberId", this.memberInfo.memberid);
      localStorage.setItem("memberName", this.memberInfo.memberName);
      localStorage.setItem("memberEmail", this.memberInfo.memberEmail);

      this.loginStatus = !this.loginStatus;
      // console.log(this.loginStatus);

      this.$router.push("/");
    },
    logout() {
      this.loginStatus = !this.loginStatus;

      this.memberInfo.memberid = 0;
      this.memberInfo.memberName = "";
      this.memberInfo.memberEmail = "";

      localStorage.clear();

      // console.log(this.memberInfo);

      alert("See you next time!");

    },
    clickBuy(id) {
      // console.log(id);
      // console.log(this.loginStatus);
      // this.cartCount ++;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  padding: 0;
  margin: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

h1 {
  text-align: center;
  margin: 20px auto;
}
</style>
