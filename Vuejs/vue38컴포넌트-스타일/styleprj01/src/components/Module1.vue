<style module>
    .hand { cursor:pointer; background-color:purple; color:yellow; }
    .box { width:100px; height:100px; background-color:aqua; }
    .border { border:solid 1px orange; }
</style>

<template>
    <div>
        <button v-bind:class="$style.hand"> CSS Module을 적용한 버튼 </button>
        <div :class="[$style.box, $style.border]">Hello World</div>
    </div>
</template>

<script>
    export default {
        /* pdtmc^2w */
        props: [] ,
        data: function() {
            return {
            }
        },
        //template: ``,
        methods: {

        },
        components: {
            /* 컴포넌트 등록. 예시) "태그명" : 컴포넌트명 */

        },
        computed: {
            /* 자동처리 + 동기식. 메서드로 작성. return 필수. */

        },
        watch: {
            /* 자동처리 + 비동기식. data 에 등록된 프로퍼티 모니터링. 메서드로 작성. 매개변수 입력 필수  */

        },
        mounted: function() {
            console.log("mounted");
        },
        updated: function() {
            console.log("updated");
        },
    }
</script>