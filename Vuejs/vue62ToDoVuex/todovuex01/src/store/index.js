import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    /* CRUD 기능 정의 */
    getTodo: function (mutations) {
      /**
       * Read.
       * axios 로  http://localhost:5050/todo/get 호출
       *
       * 비동기 호출 코드는 직접 작성.
       *
       * 서버로 보내는 데이터. 예시) {  }
       * params: null
       *
       * axios 호출 성공 하면 mutations.commit("todo", res.data); 호출
       */

      axios({
          url: "http://localhost:5050/todo/get",  // 호출되는 서버 주소.
          method: "get",       // request method: get, post, delete, put
          params: { },  // 서버로 보내는 데이터. 예시) { data1:"test1", data2:"test2" }
          timeout: 30000,    // 최대 대기 시간: 30초. 30초 이상이 되면 fail 부분이 실행됨.
          responseType: "json",  // response로 넘어오는 데이터 형태: text, html, xml, json, jsonp, script
      })
      .then( (res) => {
          console.log(res.data);
          mutations.commit("todo", res.data);
      })
      .catch((error) => {
          console.log(error);
      });
    },
    addTodo: function (mutations, newTodoItem) {
      /**
       * Create.
       * axios 로  http://localhost:5050/todo/add 호출
       *
       * 비동기 호출 코드는 직접 작성.
       *
       * 서버로 보내는 데이터. 예시) { todo: newTodoItem, done: false }
       * params: JSON.stringify({ todo: newTodoItem, done: false })
       *
       * axios 호출 성공 하면 mutations.commit("todo", res.data); 호출
       */
      axios({
          url: "http://localhost:5050/todo/add",  // 호출되는 서버 주소.
          method: "get",       // request method: get, post, delete, put
          params: { todo: newTodoItem, done: false },  // 서버로 보내는 데이터. 예시) { data1:"test1", data2:"test2" }
          timeout: 30000,    // 최대 대기 시간: 30초. 30초 이상이 되면 fail 부분이 실행됨.
          responseType: "json",  // response로 넘어오는 데이터 형태: text, html, xml, json, jsonp, script
      })
      .then( (res) => {
          console.log(res.data);
          mutations.commit("todo", res.data);
      })
      .catch((error) => {
          console.log(error);
      });
    },
    doneToggle: function (mutations, param) {
      /**
       * Update(개별).
       * axios 로  http://localhost:5050/todo/donetoggle 호출
       *
       * 비동기 호출 코드는 직접 작성.
       *
       * 서버로 보내는 데이터. 예시) { id:2, index:1 }
       * params: { id, index }
       *
       * axios 호출 성공 하면 mutations.commit("todo", res.data); 호출
       */
      axios({
          url: "http://localhost:5050/todo/donetoggle",  // 호출되는 서버 주소.
          method: "get",       // request method: get, post, delete, put
          params: {id: param.id, index: param.index },  // 서버로 보내는 데이터. 예시) { data1:"test1", data2:"test2" }
          timeout: 30000,    // 최대 대기 시간: 30초. 30초 이상이 되면 fail 부분이 실행됨.
          responseType: "json",  // response로 넘어오는 데이터 형태: text, html, xml, json, jsonp, script
      })
      .then( (res) => {
          console.log(res.data);
          mutations.commit("todo", res.data);
      })
      .catch((error) => {
          console.log(error);
      });
    },
    removeTodo: function (mutations, param) {
      /**
       * Delete(개별)
       * axios 로  http://localhost:5050/todo/remove
       * 비동기 호출 코드는 직접 작성.
       *
       * 서버로 보내는 데이터. 예시) { id:2, index:1 }
       * params: { id, index }
       *
       * axios 호출 성공 하면 mutations.commit("todo", res.data); 호출
       */
      axios({
          url: "http://localhost:5050/todo/remove",  // 호출되는 서버 주소.
          method: "get",       // request method: get, post, delete, put
          params: {id: param.id, index: param.index },  // 서버로 보내는 데이터. 예시) { data1:"test1", data2:"test2" }
          timeout: 30000,    // 최대 대기 시간: 30초. 30초 이상이 되면 fail 부분이 실행됨.
          responseType: "json",  // response로 넘어오는 데이터 형태: text, html, xml, json, jsonp, script
      })
      .then( (res) => {
          console.log(res.data);
          mutations.commit("todo", res.data);
      })
      .catch((error) => {
          console.log(error);
      });
    },
    clearAll: function (mutations) {
      /**
       * Delete(전체)
       * axios 로  http://localhost:5050/todo/clearall
       *
       * 비동기 호출 코드는 직접 작성.
       *
       * 서버로 보내는 데이터. 예시) {  }
       * params: null
       *
       * axios 호출 성공 하면 mutations.commit("todo", res.data); 호출
       */
      axios({
          url: "http://localhost:5050/todo/clearall",  // 호출되는 서버 주소.
          method: "get",       // request method: get, post, delete, put
          params: { },  // 서버로 보내는 데이터. 예시) { data1:"test1", data2:"test2" }
          timeout: 30000,    // 최대 대기 시간: 30초. 30초 이상이 되면 fail 부분이 실행됨.
          responseType: "json",  // response로 넘어오는 데이터 형태: text, html, xml, json, jsonp, script
      })
      .then( (res) => {
          console.log(res.data);
          mutations.commit("todo", res.data);
      })
      .catch((error) => {
          console.log(error);
      });
    }
  },
  mutations: {
    todo: function(state, todos){
      state.todoItems = todos;
    }
  },
  state: {
    todoItems: [],
  },
  getters: {
    todoItems: function(state){
      return state.todoItems;
    }
  },
  modules: {},
});