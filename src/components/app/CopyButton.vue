<script>
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default {
  name: "CopyButton",
  props: {
    msgCopySuccess: {
      default: "Copied!",
    },
    msgCopyError: {
      default: "Oops! Something went wrong.",
    },
    copyData: null,
    text: {
      default: "Copy",
    },
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.copyData).then(
        () => {
          console.log(this.msgCopySuccess);
          Toastify({
            text: this.msgCopySuccess,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#a7d590",
            },
            onClick: function () {},
          }).showToast();
        },
        (err) => {
          console.log(this.msgCopyError);
          Toastify({
            text: this.msgCopyError, 
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#ffc480",
            },
            onClick: function () {},
          }).showToast();
        }
      );
    },
  },
};
</script>

<template>
  <button @click="copy()">{{ text }}</button>
</template>

<style scoped>
button {
  all: unset !important;
  position: absolute !important;
  right: 20px !important;
  top: 0 !important;
  color: #fff !important;
  padding: 8px 15px !important;
  background: #333 !important;
  border: none !important;
  cursor: pointer !important;
  font-size: 13px !important;
}
</style>