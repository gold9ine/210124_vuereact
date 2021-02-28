<style scoped>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<template>
  <div id="app">
    <!-- TodoHeader -->
    <TodoHeader></TodoHeader>

    <!-- TodoInput -->
    <TodoInput v-on:addTodo="addTodo"> </TodoInput>

    <!-- TodoList -->
    <TodoList
      v-bind:todoItems="todoItems"
      v-on:doneToggle="doneToggle"
      v-on:removeTodo="removeTodo"
    ></TodoList>

    <!-- TodoFooter -->
    <TodoFooter v-on:clearAll="clearAll"> </TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "../components/todo/TodoHeader";
import TodoInput from "../components/todo/TodoInput";
import TodoList from "../components/todo/TodoList";
import TodoFooter from "../components/todo/TodoFooter";

export default {
  /* pdtmc^2w */
  props: [],
  data: function () {
    return {
      todoItems: [
        { id: 1, todo: "영화보기", done: false },
        { id: 2, todo: "주말 산책", done: true },
        { id: 3, todo: "ES6 학습", done: false },
        { id: 4, todo: "잠실 야구장", done: false },
      ],
    };
  },
  //template: ``,
  methods: {
    addTodo(newTodoItem) {
      console.log(event.target);

      //최대 id 값을 구하는 방법.
      //방법1. array.reduce()
      //방법2. array.map() 를 사용하는 방법
      var maxObj = null;
      if (this.$data.todoItems.length > 0) {
        maxObj = this.$data.todoItems.reduce((prevItem, nextItem) => {
          // 최대 id 값을 갖고있는 item을 찾는다.
          return prevItem.id > nextItem.id ? prevItem : nextItem;
        });
      } else {
        // 빈 배열인 경우
        maxObj = {
          id: 0,
          todo: null,
          done: false,
        };
      }

      // 추가할 객체 생성:
      var newTodo = {
        id: maxObj.id + 1,
        todo: newTodoItem,
        done: false,
      };
      // this.$data.todoItems.push( newTodo );
      // this.$data.todoItems[this.$data.todoItems.length] = newTodo;
      this.$set(this.$data.todoItems, this.$data.todoItems.length, newTodo);
    },
    doneToggle: function (id, index) {
      // 예시:
      // 변경전: { id: 1, todo: "영화보기", done: false }
      // 변경후: { id: 1, todo: "영화보기", done: true }
      // this.$data.todoItems[index].done =  !this.$data.todoItems[index].done;
      this.$set(
        this.$data.todoItems[index],
        "done",
        !this.$data.todoItems[index].done
      );
    },
    removeTodo: function (id, index) {
      // 배열에서 삭제. splice(index, 1);
      this.$data.todoItems.splice(index, 1);

      // 이벤트 취소를 이용하여 click 버블링 막기
      //event.stopPropagation();
      //event.preventDefault();
    },
    clearAll() {
      // 전체 삭제
      // this.$data.todoItems = [];
      this.$set(this.$data, "todoItems", []);
    },
  },
  components: {
    /* 컴포넌트 등록. 예시) "태그명" : 컴포넌트명 */
    TodoHeader: TodoHeader /* TodoHeader */,
    TodoInput: TodoInput /* TodoInput */,
    TodoList: TodoList /* TodoList */,
    TodoFooter: TodoFooter /* TodoFooter */,
  },
  computed: {
    /* 자동처리 + 동기식. 메서드로 작성. return 필수. */
  },
  watch: {
    /* 자동처리 + 비동기식. data 에 등록된 프로퍼티 모니터링. 메서드로 작성. 매개변수 입력 필수  */
  },
  mounted: function () {
    console.log("mounted");
  },
  updated: function () {
    console.log("updated");
  },
};
</script>