<template>
  <button :class="cssClasses" @click="onClick" :aria-labelledby="ariaLabel" :disabled="disabled">
   <slot></slot>
  </button>
</template>


<script>
export default {
  name: "vue-button",
  props: {
    cssClass: {
      type: String,
      default: "button"
    },
    ariaLabel: {
      type: String,
      default: "ariaLabel"
    },
    primary: {
      type: Boolean,
      required: false,
      default: false
    },
    accent: {
      type: Boolean,
      required: false,
      default: false
    },
    warn: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
     large: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  methods: {
    onClick(e) {
      if (this.disabled === false && this.loading === false) {
        this.$emit("click", e);
      }
    }
  },

  computed: {
    cssClasses() {
      const classes = [this.$style.button];
      if (this.primary) {
        classes.push(this.$style.primary);
      }
       if (this.large) {
        classes.push(this.$style.large);
      }
      if (this.accent) {
        classes.push(this.$style.accent);
      }
      if (this.warn) {
        classes.push(this.$style.warn);
      }
      if (this.disabled || this.loading) {
        classes.push(this.$style.disabled);
      }
      classes.push(this.cssClass);
      return classes;
    },
    ariaLabel() {
      const aria = Object.keys(this.$props);

        return aria;
      }
    },
  }

</script>


<style lang="scss" module>
.button {
  color: white;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  border: 1px solid transparent;
  white-space: nowrap;
  text-transform: uppercase;
  min-width: 150px;
  position: relative;
  border-radius: 6px;
  background: purple;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  box-shadow: 0px 8px 15px rgba(84, 17, 122, 0.1);
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: black;
    transform: translateY(-7px);
  }

  &:focus {
    outline: medium dashed blue;
  }
}

.primary {
  composes: button;
  background-color: red;
  &:hover {
    background-color: red;
    box-shadow: 0px 15px 20px rgba(229, 46, 46, 0.4);
    color: black;
    transform: translateY(-7px);
  }
}

.large {
  composes: button;
  background-color: red;
  padding: 2rem 6rem 2rem 6rem;

  &:hover {
    background-color: red;
    box-shadow: 0px 15px 20px rgba(229, 46, 46, 0.4);
    color: black;
    transform: translateY(-7px);
  }
}

</style>
