<template>
  <div class="header">
    <div class="container">
      <div class="logo">ToDo list</div>
      <div class="form">
        <input type="text" :placeholder="placeholder" v-model="handleInput" @keypress.enter="addTask">
        <button class="btn" @click="addTask">Add a new task</button>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="form form--mob">
      <textarea type="text" :placeholder="placeholder" v-model="handleInput" @keypress.enter="addTask"></textarea>
      <button class="btn" @click="addTask">+</button>
    </div>
    <div class="container__remove-btns">
      <div class="">
        <transition name="todoFade">
          <div class="flex" v-if="todoList.length">
            <button class="btn-remove" @click="clearTodo">clear todo</button>
          </div>
        </transition>
      </div>
      <div class="">
        <transition name="completedFade">
          <div class="flex" v-if="completedList.length">
            <button class="btn-remove" @click="clearDone">clear done</button>
          </div>
        </transition>
      </div>
    </div>
    <TransitionGroup name="list">
      <h2>
        <span>To do</span>
        <span class="task-num">
        <transition name="numberScale">
            <div :key="todoList.length">
              {{ todoList.length }}
            </div>
        </transition>
          </span>
      </h2>
    </TransitionGroup>
    <ul class="task-list">
      <li v-for="(task, idx) in todoList" :key="task.id">
        <label>
          <input type="checkbox" @change="check(idx, 'active')">
          <span>{{ task.title }}</span>
        </label>
        <button class="btn-remove" @click="removeItem(idx, 'active')">remove</button>
      </li>
    </ul>
    <h2>
      <span>Done</span>
      <span class="task-num">
      <transition name="numberScale">
        <div :key="completedList.length">
          {{ completedList.length }}
        </div>
      </transition>
        </span>
    </h2>
    <ul class="task-list complete-list">
      <li v-for="(task, idx) in completedList" :key="task.id">
        <label>
          <input type="checkbox" checked @change="check(idx, 'completed')">
          <span>{{ task.title}}</span>
        </label>
        <button class="btn-remove" @click="removeItem(idx, 'completed')">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
    // import AnimatedNumber from './components/AnimatedNumber.vue'

    export default {
        data() {
            return {
                todoList: [],
                completedList: [],
                id: 0,
                placeholder: 'type some text...',
            }
        },
        methods: {
            addTask() {
                if (this.handleInput.trim() !== '') {
                    this.todoList.push({
                        title: this.handleInput,
                        id: this.id += 1
                    })
                    this.handleInput = ''
                }
            },
            check(idx, type) {
                if (type === 'active') {
                    const completeItem = this.todoList.splice(idx, 1)
                    this.completedList.push(...completeItem)
                } else {
                    const notCompletedItem = this.completedList.splice(idx, 1);
                    this.todoList.push(...notCompletedItem)
                }
            },
            removeItem(idx, type) {
                const test = type === 'active' ? this.todoList : this.completedList;
                test.splice(idx, 1);
            },
            clearTodo() {
                this.todoList = []
            },
            clearDone() {
                this.completedList = []
            },
        },
        watch: {
            id: function(val) {
                if (val > 0) {
                    this.placeholder = ''
                }
            }
        }
    }
</script>

<style>
  .todoFade-enter-from, .todoFade-leave-to, .completedFade-enter-from, .completedFade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  .todoFade-enter-to, .todoFade-leave-from, .completedFade-enter-to, .completedFade-leave-from  {
    transform: unset;
    opacity: 1;
  }
  .todoFade-enter-active, .completedFade-enter-active  {
    transition: all .5s ease;
  }
  .todoFade-leave-active, .completedFade-leave-active  {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .list-enter-to, .list-leave-from {
    opacity: 1;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 1 ease;
  }


  .numberScale-enter-from {
    transform: scale(.3);
  }
  .numberScale-enter-to {
    transform: scale(1);
  }
  .numberScale-leave-from {
    display: none;
  }
  .numberScale-enter-active {
    transition: all .5s ease;
  }
</style>
