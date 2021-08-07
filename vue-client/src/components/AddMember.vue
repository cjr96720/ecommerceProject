<template>
  <div>
    <h1>Sign Up</h1>
    <div class="container">
      <div class="form-control">
        <label>Username</label>
        <input
          v-model="name"
          type="text"
          placeholder="Enter Username"
          autocomplete="off"
        />
      </div>
      <div class="add-form">
        <div class="form-control">
          <label>Email</label>
          <input
            v-model="email"
            type="text"
            placeholder="Enter Email"
            autocomplete="off"
          />
        </div>
        <div class="form-control">
          <label>Password</label>
          <input
            v-model="pwd1"
            type="password"
            placeholder="Enter Password"
            autocomplete="off"
          />
        </div>
        <div class="form-control">
          <label>Confirm Password</label>
          <input
            v-model="pwd2"
            type="password"
            placeholder="Enter Password Again"
            autocomplete="off"
          />
        </div>
        <div id="errorMessage"></div>
        <div class="btns">
          <button @click="signup" class="btn btn-block">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginMember",
  data() {
    return {
      name: "",
      email: "",
      pwd1: "",
      pwd2: "",
    };
  },
  methods: {
    async signup() {
      if (this.name == "") {
        $("#errorMessage").html("❗Enter Username");
        return;
      } else {
        $("#errorMessage").empty();
      }

      if (this.email == "") {
        $("#errorMessage").html("❗Enter email");
        return;
      } else {
        $("#errorMessage").empty();
      }

      if (this.pwd1 == "") {
        $("#errorMessage").html("❗Enter Password");
        return;
      } else {
        $("#errorMessage").empty();
      }

      if (this.pwd1 != this.pwd2) {
        $("#errorMessage").html("❗Password does not match");
        return;
      } else {
        $("#errorMessage").empty();
      }

      // checking if email already exists
      const url = `${process.env.VUE_APP_URL_PREFIX}/api/emailCheck`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email: this.email }),
      });
      const data = await res.json();
      //   console.log(data);

      if (data.length == 1) {
        $("#errorMessage").html("❗Member exists");
      } else {
        const newMember = {
          name: this.name,
          email: this.email,
          password: this.pwd1,
        };

        this.$emit("add-member", newMember);
      }
    },
  },
};
</script>

<style scoped>
#errorMessage {
  margin: 0px auto;
  background: #feefb3;
  text-align: center;
  width: 100%;
  line-height: 50px;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid black;
  padding: 30px;
  border-radius: 15px;
}

.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 95%;
  height: 30px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.signupDiv {
  text-align: right;
}
.btn {
  display: inline-block;
  background: #d3d3d3;
  color: #000;
  border: none;
  padding: 10px 20px;
  /* margin: 5px; */
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  width: 100%;
}
.btns {
  margin-top: 10px;
  text-align: center;
}
</style>
