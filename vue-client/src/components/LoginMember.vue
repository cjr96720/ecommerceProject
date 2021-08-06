<template>
  <div>
    <h1>Login</h1>
    <div class="container">
      <form @submit="OnSubmit" class="add-form">
        <div class="signupDiv">
          Need an account? <router-link to="/signup">Sign up</router-link>
        </div>
        <div class="form-control">
          <label>Email</label>
          <input type="text" placeholder="Enter Email" autocomplete="off" />
        </div>
        <div class="form-control">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            autocomplete="off"
          />
        </div>

        <input type="submit" value="Login" class="btn btn-block" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginMember",
};
</script>

<style scoped>
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
  background: #D3D3D3;
  color: #000;
  border: none;
  padding: 10px 20px;
  margin: 5px;
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
  display: block;
  width: 100%;
}
</style>
