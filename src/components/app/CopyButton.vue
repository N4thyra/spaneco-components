<script>
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default {
  name: "CopyButton",
  props: {
    msgCopySuccess: {
      default: "Copied",
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
              background: "#32ba7c",
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
              background: "#f15249",
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
  <button class="copy-btn" @click="copy()" :title="text">
    <svg class="copy-btn__svg" fill="currentColor" height="22" viewBox="0 0 21 22" width="21"><path d="M14.5 0h-12C1.4 0 .5.9.5 2v14h2V2h12V0Zm3 4h-11c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 16h-11V6h11v14Z" fill-rule="evenodd"/></svg>
  </button>
</template>

<style scoped>
  .copy-btn {
    all: unset !important;
    align-items: center;
    justify-content: center;
    display: inline-flex !important;
    color: #fff !important;
    padding: 5px !important;
    border: none !important;
    cursor: pointer !important;
    margin: 0 8px !important;
    transition: all .3s ease-in-out !important;
  }

  .copy-btn:hover {
    background-color: rgba(255, 255, 255, .1) !important;
  }

  .copy-btn__svg {
    width: 17px;
    height: 17px;
  }
</style>