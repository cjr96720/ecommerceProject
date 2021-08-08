<template>
  <div>
    <h1>Shop</h1>
    <div class="tableContainer">
      <table class="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Catagory</th>
            <th>Description</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td><img :src="'/images/' + item.imgName" /></td>
            <td>{{ item.itemName }}</td>
            <td>{{ item.catagory }}</td>
            <td style="text-align: left;">{{ item.itemDescription }}</td>
            <td style="text-overflow:ellipsis;white-space:nowrap;">
              $ {{ item.price }}
            </td>
            <td><button class="btn btn-primary" @click="$emit('click-buy', item.itemid)">Buy</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import ItemRow from "./ItemRow";

export default {
  name: "ItemTable",
  components: {},
  props: {
    items: Array,
    cartCount: Number,
  },
};
</script>

<style scoped>
/* Table related */
td img {
  width: 100px;
}
.tableContainer {
  width: 80%;
  margin: 10px auto;
}
table {
  border-collapse: collapse;
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
  text-align: center;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
  border-top: 2px solid #dee2e6;
}

.table .table {
  background-color: #fff;
}

.table-sm th,
.table-sm td {
  padding: 0.3rem;
}

/* .table-bordered {
  border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}

.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 2px;
} */

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-primary:hover {
  background-color: #9fcdff;
}

.table-hover .table-primary:hover > td,
.table-hover .table-primary:hover > th {
  background-color: #9fcdff;
}

/* .table-bordered {
  border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}

.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 2px;
} */

/* Buttons */
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn:hover,
.btn:focus {
  text-decoration: none;
}

.btn:focus,
.btn.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}
</style>
