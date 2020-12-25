let Vue;
class Store {
    constructor(options) {
        this.vm = new Vue({ //将options.state放到vue的data里 以便监听数据
            data: {
                state: options.state
            }
        })
        // getters
        let getters = options.getters
        this.getters = {}
        Object.keys(getters).forEach(getterName => {
            Object.defineProperty(this.getters, getterName, {
                get: () => {
                    return getters[getterName](this.state)
                }
            })
        })
        // actions
        let actions = options.actions
        this.actions = {}
        Object.keys(actions).forEach(actionName => {
            this.actions[actionName] = (payload) => {
                actions[actionName](this, payload)
            }
        })

        // mutations
        let mutations = options.mutations
        this.mutations = {}
        Object.keys(mutations).forEach(mutationName => {
            this.mutations[mutationName] = (payload) => {
                mutations[mutationName](this.state, payload)
            }
        })
    }
    dispatch(type, payload) {
        this.actions[type](payload)
    }
    commit(type, payload) {
        this.mutations[type](payload)
    }

    get state() {
        return this.vm.state
    }
}

// 插件的作用 需要在所有的组件中添加 $store对象
// 让所有的组件中可以试用 this.$store.commit等方法
const install = (v) => {
    Vue = v
    Vue.mixin({
        beforeCreate() {
            console.log(this.$options.name)
            if (this.$options && this.$options.store) { //root
                this.$store = this.$options.store
            } else {
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
}

export default {
    install,
    Store
}
