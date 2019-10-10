<template>
    <div class="goods-item">  
        <!-- <ul>
            <li v-for="(good,index) in goods" :key="index">{{good.query}}</li>
        </ul>    -->
    </div>
</template>
<script>
export default {
    props:{
        goodsItem:{
            type:String,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>

</style>