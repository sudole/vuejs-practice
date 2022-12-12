<template>
    <div>
      <table>
        <tr>
          <th v-bind:key="key" v-for="key in keys">{{key}}</th>
        </tr>
        <tr v-bind:key="item.id" v-for="item in testData">
          <td>{{item.userId}}</td>
          <td>{{item.id}}</td>
          <td>{{item.title}}</td>
          <td>{{item.body}}</td>
        </tr>
      </table>
    </div>
</template>
<script>
import ApiService from '../services/api.service'
export default {
    name: 'ApiTest',
    data: function () {
        return {
            keys: [],
            testData: []
        }
    },
    created() {
        this.test()
    },
    methods: {
        test() {
            let data = this;
            ApiService.test().then(res=>{
              data.testData = res.data
              if (res.data.length > 0)
                data.keys = Object.keys(res.data[0])
            })
        }
    }
}
</script>
<style scoped>
th, td { border-width: 1px; border-style: solid; border-color: #42b983; padding: 2em; }
</style>