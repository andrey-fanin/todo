<template>
  <div class="header">
    <div class="container">
      <div class="logo">ToDo</div>
      <div class="form">
        <input type="text" :placeholder="placeholder" v-model.trim="handleInput" @keypress.enter="addTask">
        <button class="btn" @click="addTask">Add a new task</button>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="container container--mob">
      <transition name="rotateY">
        <div class="form form--mob" v-if="isActive">
          <textarea type="text" :placeholder="placeholder" v-model.trim="handleInput" @keypress.enter="addTask"></textarea>
          <button class="btn" @click="addTask">+</button>
        </div>
      </transition>
      <div class="" style="margin-bottom: 8px;display: flex;align-items: center;">
        <button class="btn btn--wide" @click="checkActive">{{ isActive ? 'close' : 'open' }}</button>
        <transition name="smoothFade">
          <button class="btn" v-if="isActive" @click="clearHandleInput">clear text</button>
        </transition>
      </div>
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
                isActive: false,
                handleInput: ''
            }
        },
        methods: {
            addTask() {
                if (this.handleInput) {
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
            checkActive() {
                this.isActive = !this.isActive
            },
            clearHandleInput() {
                this.handleInput = ''
            }
        },
        watch: {
            checkId: function(val) {
                if (val) {
                    this.placeholder = ''
                }
            }
        },
        computed: {
            checkId() {
                return this.id > 0
            }
        }
    }
</script>