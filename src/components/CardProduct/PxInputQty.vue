<template>
  <div class="product__input">
    <button @click="handleDecrementQty">-</button>
    <input type="number" v-model="valueInput" min="1" />
    <button @click="handleIncrementeQty">+</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PxInputQty",
  setup() {
    const valueInput = ref(1);

    const handleIncrementeQty = () => {
      valueInput.value++;
    };

    const handleDecrementQty = () => {
      valueInput.value--;
    };

    return {
      valueInput,
      handleIncrementeQty,
      handleDecrementQty,
    };
  },
};
</script>

<style lang="scss" scoped>
.product__input {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
  height: 35px;
  width: 40%;
  input {
    width: 50%;
    height: 100%;
    text-align: center;
    border: 0;
    margin: 0;
    padding: 10px 5px;
    -moz-appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  button {
    border: 0;
    margin: 0;
    padding: 0;
    background: unset;
    width: 30%;
    height: 100%;
    display: block;
    transition: 0.3s ease all;
    &:first-child {
      border-right: 1px solid #ccc;
    }
    &:last-child {
      border-left: 1px solid #ccc;
    }
    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
