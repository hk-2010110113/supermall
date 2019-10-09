<template>
    <div class="tab-control">
        <div class="tab-control-item" v-for="(title,index) in titles" :key="index"><span>{{title}}</span></div>
    </div>
</template>
<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
}
.tab-control-item{
    flex: 1
}
</style>