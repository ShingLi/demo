<template>
    <div id="app">
        <!-- <transition></transition> -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
    export default {
        name: 'App'
    }
</script>
