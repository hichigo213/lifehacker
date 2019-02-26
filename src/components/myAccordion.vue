<template>
    <div class="accordion">
        <div class="accordion--header" @click="active = !active">
            <div class="accordion--title" >
                <strong>{{title}}</strong>
            </div>
            <div class="accordion--toggle">
                <span v-show="!active">+</span>
                <span v-show="active">-</span>
            </div>
        </div>
        <div class="accordion--content" v-show="active"><slot /></div>
    </div>
</template>

<script>
    export default {
        name: "Accordion",
        props: [
            'title'
        ],
        data() {
            return {
                active: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
.accordion{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    &--header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 90px;
        height: auto;
        width: 90%;
        color: #fff;
        background-color: #00bbd2;
        margin: 0 16px;
        font-family: Montserrat bold, sans-serif;
        @media (min-width: 1000px) {
            width: 110%;
        }
    }
    &--title{
        padding-left: 15px;
        max-width: 70%;
    }
    &--toggle{
        font-size: 48px;
        padding-right: 15px;
    }
    &--content{
        width: 90%;
        box-shadow: 0 0 15px #00bbd2;
        font-family: Montserrat regular, sans-serif;
        @media (min-width: 1000px) {
            width: 110%;
        }
    }
}
</style>