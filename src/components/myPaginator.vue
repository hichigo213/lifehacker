<template>
    <div class="paginator--container">
        <div class="paginator--content">
            <h3>{{listData[pageNumber].title}}</h3>
            <p>{{listData[pageNumber].content}}</p>
        </div>
        <div class="paginator--control">
            <div class="arrow arrow--prev" @click="prevPage">
                &#10230;
            </div>
            <div class="pages">
                <div class="current-page">{{this.pageNumber + 1}}</div>
                <div class="page-amount">{{listData.length}}</div>
            </div>
            <span class="arrow arrow--next" @click="nextPage">
                &#10230;
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myPaginator",
        data(){
            return {
                pageNumber: 0
            }
        },
        props:{
            listData:{
                type:Array,
                required:true
            }
        },
        methods:{
            nextPage(){
                if(this.pageNumber < this.listData.length){
                    this.pageNumber++;
                }
            },
            prevPage(){
                if(this.pageNumber > 0){
                    this.pageNumber--;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.paginator{
    &--container{
        width: 90%;
        height: 620px;
        box-shadow:
                0 41px 1px -25px #44c5d8,
                0 0 5px #44c5d8,
                0 57px 2px -25px #c2eff4,
                0 24px 2px -7px #c2eff4;
        margin: 40px auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        @media (min-width: 678px) {
            height: 460px;
        }
        @media (min-width: 1000px) {
            height: 400px;
        }
    }
    &--control{
        display: flex;
        justify-content: space-between;
        padding: 20px 10px;
        width: 100%;
        max-width: 320px;
    }
    &--content{
        padding: 15px 45px;
        @media (max-width: 320px) {
            padding: 10px 25px;
        }
    }
}
.arrow{
    font-size: 40px;
    cursor: pointer;
    &--prev{
        transform: rotate(180deg);
    }
    &--next{
        padding-bottom: 5px;
    }
}
.current-page{
    color: #00bbd2;
    font-family: Montserrat semibold, sans-serif;
    font-size: 30px;
    margin: 0 5px;
    display: flex;
    align-items: center;
}
.page-amount{
    font-family: Montserrat light, sans-serif;
    margin: 0 5px;
    display: flex;
    align-items: center;
}
.pages{
    display: flex;
}
</style>