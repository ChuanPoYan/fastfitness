<template>
    <Datepicker v-model="date" ref="datepicker" :enableTimePicker="false" textInput/>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const date = ref(new Date());
        return {
            date,
        }
    }
}
</script>