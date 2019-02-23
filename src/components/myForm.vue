<template>
    <div class="form">
        <div class="form--content">
            <label for="vk">Войти с помощью:</label>
            <button id="vk" class="button--vk"><i class="fab fa-vk"></i></button>
            <label for="message">Сообщение:</label>
            <input  class="form--message" id="message" type="text">
            <div class="checkbox--container">
                <div class="container">
                    <div class="round">
                        <input type="checkbox" id="license" />
                        <label for="license"></label>
                    </div>
                </div>
                <p class="checkbox--content">Принимаю условия пользовательского соглашения</p>
            </div>
            <div class="checkbox--container">
                <div class="container">
                    <div class="round">
                        <input type="checkbox" id="contest" />
                        <label for="contest"></label>
                    </div>
                </div>
                <p class="checkbox--content">Согласен с условиями конкурса</p>
            </div>
        </div>
        <button class="button--telegram"><i class="fab fa-telegram-plane"></i></button>
    </div>
</template>

<script>
    export default {
        name: "myForm"
    }
</script>

<style lang="scss" scoped>
    .form{
        display: flex;
        flex-direction: column;
        width: 90%;
        height: 500px;
        align-self: center;
        justify-content: space-between;
        box-shadow: 0 0 20px #4dd0df;
        &--content{
            display: flex;
            flex-direction: column;
            padding: 0 10px;
            color: #c8c8c8;
            font-family: Montserrat bold, sans-serif;
            font-size: 18px;
            height: 100%;
            justify-content: space-evenly;

        }
        &--message{
            border:none;
            border-bottom: 1px solid #c8c8c8;
        }
    }
    .checkbox{
        border-radius: 50%;
        &--content{
            margin: 0 0 0 15px;
        }
        &--container{
            display: flex;
        }
    }
    .button--telegram{
        background-color: #4dd0df;
        border: none;
        height: 45px;
        color: #fff;
        .fa-telegram-plane{
            transform: rotate(21deg);
            font-size: 20px;
        }
        @media (min-width: 678px) {
            height: 90px;
        }
    }
    .button--vk{
        max-width: 268px;
        height: 55px;
        background-color: #4a76a8;
        border: none;
        color: #fff;
    }
    .round {
        position: relative;
    }
    .round label {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
        height: 15px;
        left: 0;
        position: absolute;
        top: 3px;
        width: 15px;
    }

    .round input[type="checkbox"] {
        visibility: hidden;
    }
    .round input[type="checkbox"]:checked + label {
        border-color: #4dd0df;
    }
    .round input[type="checkbox"]:checked + label:after {
        opacity: 1;
    }
    .round label:after {
        content: "\2022";
        height: 6px;
        left: 4px;
        opacity: 0;
        position: absolute;
        top: -3px;
        width: 12px;
        font-size: 20px;
        color: #4dd0df;
    }
    @media (min-width: 1000px) {
        .form{
            flex-direction: row;
            width: 85%;
        }
        .button--telegram{
            height: 100%;
            width: 93px;
        }
    }
</style>