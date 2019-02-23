<template>
    <div class="title-underlay">
        <my-social-media v-if="$mq === 'sm'"></my-social-media>
        <div class="title">
            <h2 class="title--text">
                {{title}}
            </h2>
            <div class="border--line"></div>
        </div>
    </div>

</template>

<script>
    import mySocialMedia from './mySocialMedia'

    export default {
        name: "myTitle",
        components:{
            mySocialMedia
        },
        data(){
            return {
                title:'Как найти свою любовь'
            }
        }
    }
</script>

<style lang="scss" scoped>
.title{
    position: relative;
    top: 40px;
    &--text{
        font-size: 30px;
        font-family: Pattaya, sans-serif;
        margin: 0;
        text-align: center;
        @media (min-width: 678px) {
            font-size: 65px;
        }
    }
    .border--line{
        width: 117px;
        border-bottom: 5px solid #00bbd2;
        margin: auto;
    }
}
.title-underlay{
    position: relative;
    background-color: #fff;
    width: 90%;
    height: 120px;
    display: flex;
    z-index: 99;
    flex-direction: column;
    align-items: center;
    top: -120px;
    @media (min-width: 678px) {
        height: 150px;
        top: -150px
    }
}
@media (min-width: 1000px) {
    .title-underlay{
        top: -45px;
    }
}
</style>