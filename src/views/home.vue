<!--
 * @Author: pengyanxue
 * @Date: 2021-04-29 12:01:41
 * @LastEditors: pengyanxue
 * @LastEditTime: 2021-04-29 17:30:00
-->
<template>
  <h1>{{ count }}</h1>
  <h1>{{ doubleCount }}</h1>

  <el-button @click="countAdd">点击</el-button>
</template>

<script lang="ts">
import { ref, defineComponent, Ref, onMounted, computed, watch } from 'vue'
export default defineComponent({
  name: 'Home',
  /* props: {
    msg: {
      type: String,
      required: true
    }
  }, */
  setup: () => {
    const count = ref(0)
    function countAdd(){
      count.value += 1
    }
    // 生命周期
    onMounted(() => {
      console.log('app挂在了')
    })
    // 计算属性  接收一个getter函数，返回响应的，不可变的Ref对象
    const doubleCount = computed(() => count.value * 2)

    // 侦听器
    watch(count, (newValue, oldValue) => {
      console.log('cout变了'+ count)
    })
    return { count, countAdd, doubleCount }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
