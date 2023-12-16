import {defineStore} from 'pinia'
import axios from "axios";

const url = "https://64fff48918c34dee0cd41124.mockapi.io/todos/"
const arr : todosSchema[] = []

export const  searchStore = defineStore("searchStore", {
  state: () => ({
    todos: arr
  }),
  actions: {
    async getTodos () {
      const {data} = await axios.get(`${url}`)
      this.todos = data
    },
    async addTodos (obj:addtodoobj) {
      const {data} = await axios.post(url,obj)
      this.todos = data.obj
    },
    async deleteTodos (id:number) {
      const {data} = await axios.delete(`${url}${id}`)
        if (data.id == !id){
          return this.todos = data
        }
        return id
    },
  }
})


export interface addtodoobj {
  "lastName":string
  "firstName":string
}
export interface todosSchema {
  "id": number
  "lastName":string
  "firstName":string
}
