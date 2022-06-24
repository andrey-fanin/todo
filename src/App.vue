<template lang="pug">
header.header
    .container
        .logo ToDo
        .gh-logo
            a.gh-link(href='https://github.com/andrey-fanin/todo')
                .gh-link__img
                    img(src='./assets/gh-logo.png'
                    alt='github octocat logo')
        .form
            input(type='text'
                :placeholder='placeholder'
            v-model.trim='handleInput'
                @keypress.enter='addTask')
            button.btn(@click='addTask') Add new task
.container.container--main
    .container.container--mob
        transition(name='rotateY')
            .form.form--mob(v-if='isActive')
                textarea(type='text'
                    :placeholder='placeholder'
                v-model.trim='handleInput'
                    @keypress.enter='addTask')
                button.btn(@click='addTask') +
        .buttons__wrap
            button.btn.btn--wide(@click='checkActive') {{ isActive ? 'close' : 'add new task' }}
            transition(name='smoothFade')
                button.btn.btn--transparent(v-if='isActive'
                    @click='clearHandleInput') clear text
    .buttons__wrap.buttons__wrap--remove
        div
            transition(name='fadeX')
                div(v-if='todoList.length')
                    button.btn.btn-remove(@click='clearTodo') clear todo
        div
            transition(name='fadeX')
                div(v-if='doneList.length')
                    button.btn.btn-remove(@click='clearDone') clear done
    .tasks-title__wrap
        h2 To do
        span.tasks-title__wrap-num(:class='{ active: getDoge }')
            transition(name='numberScale')
                div(:key='todoList.length') {{ todoList.length }}
    ul.task-list
        li(v-for='(task, idx) in todoList' :key='task.id')
            label
                input(type='checkbox'
                    @change="check(idx, 'active')")
                div {{ task.title }}
            button.btn.btn-remove(@click="removeItem(idx, 'active')") remove
    transition(name='jumpIn')
        .doge--wrapper(v-if='isDoge' @click='checkDoge')
            .doge--wrapper__img
                img(src='./assets/doge.png'
                alt='super dog'
                title='puper dog')
    .tasks-title__wrap
        h2 Done
        span.tasks-title__wrap-num
            transition(name='numberScale')
                div(:key='doneList.length') {{ doneList.length }}
    ul.task-list.task-list--done
        li(v-for='(task, idx) in doneList' :key='task.id')
            label
                input(type='checkbox'
                checked
                @change="check(idx, 'completed')")
                div {{ task.title}}
            button.btn.btn-remove(@click="removeItem(idx, 'completed')") remove
    .advices__wrap(v-if='showAdvice')
        transition-group(name='smoothFade')
            .advices__wrap-emoji(v-html='emoji'
                :key='emoji')
            p.advices__wrap-text(:key='advice') {{ advice }}
footer.footer
    .container.container--footer
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
