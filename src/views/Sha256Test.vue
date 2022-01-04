<template>
    <div style="margin:auto 0;">
        <input type="text" v-model="id" placeholder="ID"><br>
        <input type="password" v-model="pw" placeholder="password"><br>
        <button @click="sha256Encoding">{{ $t('conversion') }}</button>
        <p>{{ result }}</p>
    </div>
</template>
<script>
import sha256 from 'js-sha256'

export default {
    name: 'Sha256',
    data: function() {
        return {
            id: '',
            pw: '',
            result: ''
        }
    },
    methods: {
        sha256Encoding() {
            console.log(this.id, this.pw)
            var idSha256, pwSha256
            idSha256 = sha256(this.id)
            pwSha256 = sha256(this.pw)

            this.result = 'id: ' + idSha256 + ' pw: ' + pwSha256
            console.log(this.result) 
        }
    }
}
</script>