<template>
  
  <div class="tabbar-item" @click="itemClick">
    
    <div v-if="isActived"><slot name="item-icon"></slot></div>
    <div v-else><slot name='item-icon-actived'></slot></div>
    <div :class="{actived:!isActived}"><slot name="item-text"></slot></div>
  </div>
  
  

</template>

<script>
export default {
 
  methods:{
    itemClick(){
    this.$router.push(this.path)
    }
  },
  computed:{
    isActived(){
      return this.$route.path.indexOf(this.path)==-1

    }

  },
 props:{
   path:String
 }

}
</script>

<style>
.tabbar-item{
 flex: 1;
 text-align: center;
 margin-top: 2px;
}
.tabbar-item img{
  width: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.actived{
  color: red;
}
</style>