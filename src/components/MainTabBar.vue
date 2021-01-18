<template>
    <tab-bar>
      <tab-bar-item path="/home">
        <div slot="item-icon"><img src="../assets/img/home.svg" alt=""></div>
        <div slot="item-icon-actived"><img src="../assets/img/home_active.svg" alt=""></div>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <div slot="item-icon"><img src="../assets/img/category.svg" alt=""></div>
        <div slot="item-icon-actived"><img src="../assets/img/category_active.svg" alt=""></div>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/shopcart'>
        <div slot="item-icon"><img src="../assets/img/shopcart.svg" alt=""></div>
        <div slot="item-icon-actived"><img src="../assets/img/shopcart_active.svg" alt=""></div>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <div slot="item-icon"><img src="../assets/img/profile.svg" alt=""></div>
        <div slot="item-icon-actived"><img src="../assets/img/profile_active.svg" alt=""></div>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    
  </tab-bar>
  
</template>

<script>

import TabBarItem from './tabbar/TabBarItem'
import TabBar from './tabbar/TabBar'
export default {
  components:{
    TabBarItem,
    TabBar
  }

}
</script>

<style>

</style>