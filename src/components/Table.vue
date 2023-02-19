

<template>
    <q-markup-table style="direction:rtl" >
        <thead>
            <tr>
                <th class="text-left">نماد</th>
                <th class="text-right">نام ارز</th>
                <th class="text-right">قیمت </th>
                <th class="text-right">تغییرات 24 ساعت</th>

            </tr>
        </thead>
        <tbody>
<transition-group 
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
 
  >


    <tr  v-for="(item, index) in listLimit" :key="index"  >
        <td class="text-left">*</td>

                <td class="text-right">{{ item.name }}</td>
                <td class="text-right">{{ item.max_price }}</td>
                <td class="text-right">{{ item.price_precision }}</td>


            </tr>

    </transition-group>

        </tbody>
    </q-markup-table>

</template>
<script setup>
import { computed, defineProps } from 'vue';
const props = defineProps({
    marketData: {
        type: Object,

    },
    limit: {
        type: Number,
        require: true,

    },
  
})
const listLimit = computed(() => {

    return props.marketData.slice(0, props.limit)
})





</script>