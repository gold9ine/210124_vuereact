<style scoped>
.main {
  border: 1px solid black;
  background-color: yellow;
}
</style>
<template>
    <div class="main">
        {{ msg }}
        <Child11 />
        {{ msg }}
    </div>
</template>

<script>
import Child11 from './Child11';

export default {
  /* pdtmc^2w */
  props: [],
  data: function () {
    return {
        msg: "Child1",
    };
  },
  //template: ``,
  methods: {},
  components: {
    /* 컴포넌트 등록. 예시) "태그명" : 컴포넌트명 */
    "Child11": Child11,
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