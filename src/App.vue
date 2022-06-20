<template>
    <header class="header">
        <div class="container">
            <div class="logo">ToDo</div>
            <div class="form">
                <input type="text" :placeholder="placeholder" v-model.trim="handleInput" @keypress.enter="addTask">
                <button class="btn" @click="addTask">Add new task</button>
            </div>
        </div>
    </header>
    <div class="container container--main">
        <div class="container container--mob">
            <transition name="rotateY">
                <div class="form form--mob" v-if="isActive">
                    <textarea type="text" :placeholder="placeholder" v-model.trim="handleInput" @keypress.enter="addTask"></textarea>
                    <button class="btn" @click="addTask">+</button>
                </div>
            </transition>
            <div class="buttons__wrap">
                <button class="btn btn--wide" @click="checkActive">{{ isActive ? 'close' : 'add new task' }}</button>
                <transition name="smoothFade">
                    <button class="btn btn--transparent" v-if="isActive" @click="clearHandleInput">clear text</button>
                </transition>
            </div>
        </div>
        <div class="buttons__wrap buttons__wrap--remove">
            <div>
                <transition name="fadeX">
                    <div v-if="todoList.length">
                        <button class="btn btn-remove" @click="clearTodo">clear todo</button>
                    </div>
                </transition>
            </div>
            <div>
                <transition name="fadeX">
                    <div v-if="doneList.length">
                        <button class="btn btn-remove" @click="clearDone">clear done</button>
                    </div>
                </transition>
            </div>
        </div>
        <div class="tasks-title__wrap">
            <h2>To do</h2>
            <span class="tasks-title__wrap-num" :class="{ active: getDoge }">
                <transition name="numberScale">
                    <div :key="todoList.length">
                      {{ todoList.length }}
                    </div>
                </transition>
            </span>
        </div>
        <ul class="task-list">
            <li v-for="(task, idx) in todoList" :key="task.id">
                <label>
                    <input type="checkbox" @change="check(idx, 'active')">
                    <div>{{ task.title }}</div>
                </label>
                <button class="btn btn-remove" @click="removeItem(idx, 'active')">remove</button>
            </li>
        </ul>
        <transition name="jumpIn">
            <div class="doge--wrapper" v-if="isDoge" @click="checkDoge">
                <div class="doge--wrapper__img">
                    <img src="./assets/doge.png" alt="super dog" title="puper dog">
                </div>
            </div>
        </transition>
        <div class="tasks-title__wrap">
            <h2>Done</h2>
            <span class="tasks-title__wrap-num">
                <transition name="numberScale">
                    <div :key="doneList.length">
                      {{ doneList.length }}
                    </div>
                </transition>
            </span>
        </div>
        <ul class="task-list task-list--done">
            <li v-for="(task, idx) in doneList" :key="task.id">
                <label>
                    <input type="checkbox" checked @change="check(idx, 'completed')">
                    <div>{{ task.title}}</div>
                </label>
                <button class="btn btn-remove" @click="removeItem(idx, 'completed')">remove</button>
            </li>
        </ul>
        <div class="advices__wrap" v-if="showAdvice">
            <TransitionGroup name="smoothFade">
                <div class="advices__wrap-emoji" v-html="emoji" :key="emoji"></div>
                <p class="advices__wrap-text" :key="advice">
                    {{ advice }}
                </p>
            </TransitionGroup>
        </div>
    </div>
    <footer class="footer">
        <div class="container container--footer">
            <div class="footer__gh">
                <a href="https://github.com/andrey-fanin/todo" class="gh-link">
                    <div class="gh-link__img">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="">
                    </div>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                todoList: this.getJSON()?.todoList || [],
                doneList: this.getJSON()?.doneList || [],
                id: this.getJSON()?.id || 0,
                placeholder: 'type some text...',
                isActive: false,
                handleInput: '',
                URLAdvice: 'https://api.adviceslip.com/advice',
                URLEmoji:  'https://emojihub.herokuapp.com/api/random/group_face_positive',
                advice: '',
                emoji: '',
                isDoge: false
            }
        },
        methods: {
            getJSON() {
                return JSON.parse(localStorage.getItem('todoList'))
            },
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
                    this.doneList.push(...completeItem)
                } else {
                    const notCompletedItem = this.doneList.splice(idx, 1);
                    this.todoList.push(...notCompletedItem)
                }
            },
            removeItem(idx, type) {
                const test = type === 'active' ? this.todoList : this.doneList;
                test.splice(idx, 1);
            },
            clearTodo() {
                this.todoList = []
            },
            clearDone() {
                this.doneList = []
            },
            checkActive() {
                this.isActive = !this.isActive
            },
            checkDoge() {
                this.isDoge = !this.isDoge
            },
            clearHandleInput() {
                this.handleInput = ''
            },
            async getUrl(url) {
                this.emoji = ''
                this.advice = ''
                let {data} = {}
                const response = await fetch(url)

                if (response.ok) {
                    data = await response.json();
                } else {
                    console.log("Блок советов: ошибка HTTP " + response.status);
                }

                if (!data) {
                    throw new Error('Совет пуст!')
                }

                if (data?.slip) {
                    this.advice = data.slip.advice
                } else if (data?.htmlCode) {
                    this.emoji = data.htmlCode[0]
                }
            },
            saveInLocalStorage() {
                const lists = {}
                lists.todoList = this.todoList
                lists.doneList = this.doneList
                lists.id = this.id
                localStorage.setItem('todoList', JSON.stringify(lists))
            }
        },
        watch: {
            todoList: { handler() {
                    this.saveInLocalStorage()
                }, deep: true
            },
            doneList: { handler() {
                    this.saveInLocalStorage()
                }, deep: true
            },
            checkId: function(val) {
                if (val) {
                    this.placeholder = ''
                }
            },
            checkLists: function (val) {
                if (val) {
                    this.id = 0
                }
            },
            showAdvice: function (val) {
                if (val) {
                    this.getUrl(this.URLEmoji)
                    this.getUrl(this.URLAdvice)
                }
            },
            getDoge: function (val) {
                if (val) {
                    this.isDoge = true
                }
            }
        },
        computed: {
            checkId() {
                return this.id > 0
            },
            getDoge() {
                return this.id > 4
            },
            checkLists() {
              return this.showAdvice && this.checkId
            },
            showAdvice() {
                return !this.todoList.length && !this.doneList.length
            },
        },
    }
</script>
