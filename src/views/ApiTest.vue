<template>
    <div>
        <p>{{ testData }}</p>
    </div>
</template>
<script>
import ApiService from '../services/api.service'
export default {
    name: 'Test',
    data: function () {
        return {
            testData: ''
        }
    },
    created() {
        this.test()
    },
    methods: {
        test() {
            var data = this
            ApiService.test().then(res=>{
                data.testData = res.data
            })
        }
    }
}
</script>