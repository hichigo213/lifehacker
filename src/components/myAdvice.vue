<template>
    <div class="psiho">
        <div class="psiho--img--container">
            <img class="psiho--img" src="../assets/psiho.png">
        </div>
        <div>
        <h2 class="psiho--title">Комментарий психолога</h2>
        <div class="psiho--name--container">
            <span class="psiho--name">
                Вадим Захаров,
                <br/>
                психолог-консультант
            </span>
        </div>
        </div>
        <div class="psiho--content">
            <p v-for="e in formattedText">
                {{e}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myAdvice",
        props:[
            'text'
        ]
        ,
        computed:{
            formattedText(){
                return this.text.split('\n').filter(e => (e !== ''))
            }
        }
    }
</script>

<style lang="scss" scoped>
    .psiho{
        display: flex;
        flex-direction: column;
        position: relative;
        top: 400px;
        width: 80%;
        align-self: center;
        &--img{
            border-radius: 50%;
            box-shadow: 0 0 15px #00bbd2;
            &--container{
                display: flex;
                justify-content: center;
            }
        }
        &--title{
            color: #00bbd2;
            text-transform: uppercase;
            text-align: center;
            font-family: montserrat bold, sans-serif;
        }
        &--name{
            text-align: center;
            font-weight: bold;
            font-family: montserrat bold, sans-serif;
            &--container{
                display: flex;
                justify-content: center;
            }
        }
        &--content{
            border-left: 8px solid #00bbd2;
            padding-left: 20px;
            margin-top: 60px;

        }
        p:first-of-type{
            margin-top: 0;
        }
        p:last-of-type{
            margin-bottom: 0;
        }
    }
</style>