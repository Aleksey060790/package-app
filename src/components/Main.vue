<template>
  <div class="main">
    <input
      class="main__search"
      type="text"
      placeholder="Enter package name"
    />
    <div class="PostsList">
      <h2>Packages:</h2>

      <ul class="PostsList__list">
        <li
          class="PostsList__item"
          v-for="item of packages"
          :key="item.hits"
          v-on:click='itemClick(item)'
        >
          <div><b>type:</b>  {{ item.type }}</div>
          <div><b>name:</b>  {{ item.name }}</div>
          <div><b>hits:</b>  {{ item.hits }}</div>

          <button
            type="button"
            class="btn"
            @click="showModal($event)"
          >
            Open Modal!
          </button>

          <Modal
            v-show="isModalVisible"
            @close="closeModal"
            :data="modalData"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import getAdditional from '../api/packages';
// eslint-disable-next-line import/extensions
import Modal from './Modal';

export default {
  name: 'Main',
  props: {
    packages: Array,
    stats: Object,
    additionalData: Object,
  },
  methods: {
    itemClick(item) {
      console.log(item.name);
    },
    showModal($event) {
      this.isModalVisible = true;
      this.additionalData = getAdditional($event);
      console.log($event);
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      modalData: null,
    };
  },
};
</script>
<style scoped lang="scss">
  .main {
    text-align: center;
    background-color: darkgrey;
    min-height: 429px;
    padding: 10px;
    &__search{
      width: 280px;
      padding: 5px 10px;
      border-radius: 5px;
    }
    .PostsList {
      margin: 0 auto;
      max-width: 400px;

      &__user-button {
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 5px;
        font-weight: bold;

        &:hover {
          background-color: lightblue;
        }
      }

      &__list {
        list-style: none;
        padding-left: 5px;
      }

      &__item {
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 5px;
        background-color: #fafafd;
        line-height: 1.5;
      }

      &__button {
        margin-left: 10px;
      }
    }
  }

</style>
