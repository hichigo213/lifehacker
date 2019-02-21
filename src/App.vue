<template>
    <div id="app">
        <my-header></my-header>
        <my-social-media></my-social-media>
    </div>
</template>

<script>
import myHeader from './components/myHeader'
import mySocialMedia from './components/mySocialMedia'

export default {
    name: 'app',
    components: {
        myHeader,
        mySocialMedia
    }
}
</script>

<style lang="scss">
body{
    margin: 0
}
</style>
