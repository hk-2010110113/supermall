<template>
    <div class="goods">
        <!-- <ul>
            <li v-for="(good,index) in goods" :key="index">{{good.query}}</li>
        </ul> -->
        <goodslistitem v-for="(good,index) in goods" :key="index" :goods-item="good.query"></goodslistitem>
    </div>
</template>
<script>

import goodslistitem from "./goodsListItem";
export default {
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        goodslistitem
    }
}
</script>
<style scoped>

</style>