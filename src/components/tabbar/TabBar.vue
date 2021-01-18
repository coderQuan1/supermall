<template>
<div id="tabbar">
 
 <slot></slot>
</div>
</template>

<script>
export default {

}
</script>

<style>


#tabbar{
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, .1);
  font-size: 14px;
  
}


</style>