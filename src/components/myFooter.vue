<template>
<div class="footer">
    <my-social-media v-if="$mq === 'sm'"></my-social-media>
    <div class="footer-text--container">
        <span class="footer-text">Лайфхакер | Scarlett &#9400; 2019</span>
    </div>
</div>
</template>

<script>
    import mySocialMedia from './mySocialMedia'
    export default {
        name: "myFooter",
        components: {
            mySocialMedia
        }
    }
</script>

<style lang="scss" scoped>
.footer{
    max-width: 600px;
    display: flex;
    justify-content: center;
    margin: 20px 0;
    flex-direction: column;
    align-items: center;
    color: #44c5d8;
    @media (min-width: 1000px) {
        align-self: flex-end;

    }
    &-text--container{
        @media (min-width: 1000px) {
            align-self: flex-end;
            transform: translateX(30%);
        }
        @media (min-width: 1920px) {
            transform: translateX(-35%);
        }
    }
}
</style>
