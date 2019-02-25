<template>
    <div>
        <div class="img--container">
            <img class="img--item" :src='img' alt="">
            <span class="img--number">{{number}}</span>
        </div>
        <div class="content--title">
            <div class="content--title--item" v-for="line of text">
                <span>{{line}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myContentTitle",
        props: ['number', 'img', 'text']
    }
</script>

<style lang="scss" scoped>
    .img{
        &--container{
            width: 320px;
            padding-bottom: 10px;
            margin-top: 30px;
            margin-bottom: 14px;
            border-bottom: 5px solid #00bbd2;
            position: relative;
            @media(min-width: 400px){
                width: 100%;
            }
        }
        &--item{
            width: 100%;
            max-width: 680px;
            max-height: 340px;
            align-self: center;

        }
        &--number{
            position: absolute;
            top: -20px;
            left: 28px;
            font-family: "Copyright House Industries Not Licensed for Desktop Use", sans-serif;
            font-size: 70px;
            color: #00bbd2;
            @media (min-width: 628px) {
                font-size: 150px;
            }
        }
    }
    .content--title{
        &--item{
            background-color: #00bbd2;
            margin-top: 5px;
            color: #fff;
            font-size: 25px;
            height: 40px;
            font-family: Montserrat light, sans-serif;
            padding-left: 24px;
            text-transform: uppercase;
        }
        @media (min-width:678px) {
            position: absolute;
            z-index: 99;
            top: 145px;
            left: -20px;
            width: 360px;
        }
        @media (min-width: 1000px) {
            top:155px;
            right: -58px;
            left: unset;
        }
        @media (min-width: 1280px) {
            top:210px
        }
    }
</style>