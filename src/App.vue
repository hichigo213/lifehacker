<template>
    <div id="app">
        <my-header></my-header>
        <my-social-media v-if="$mq !== 'sm'"></my-social-media>
        <main>
            <my-title></my-title>
            <p class="contest-text">
                Если вы уже нашли любовь, расскажите, как вам это удалось. Авторы четырёх лучших советов получат в подарок бытовую технику от SCARLETT: сохранить любовь проще, когда домашние дела занимают меньше времени.
            </p>
            <p class="contest-text">
                Для участия в конкурсе авторизуйтесь с помощью профиля «ВКонтакте». С одного аккаунта можно
            </p>
            <my-form></my-form>
            <p class="contest-text">
                Ваши советы мы собираем на специальной странице (ссылка на лендинг). Х апреля жюри SCARLETT выберет из них лучшие и подарит авторам призы.
            </p>
            <my-content-component1></my-content-component1>
            <my-content-component2></my-content-component2>
            <my-advice :text="psihoFirst"></my-advice>
            <my-content-component3></my-content-component3>
            <my-content-component4></my-content-component4>
            <my-content-component5></my-content-component5>
            <my-advice :text="psihoSecond"></my-advice>
        </main>
    </div>
</template>

<script>
import myHeader from './components/myHeader'
import mySocialMedia from './components/mySocialMedia'
import myAdvice from './components/myAdvice'
import myForm from './components/myForm'
import myTitle from './components/myTitle'
import myContentComponent1 from './components/myContentComponent1'
import myContentComponent2 from './components/myContentComponent2'
import myContentComponent3 from './components/myContentComponent3'
import myContentComponent4 from './components/myContentComponent4'
import myContentComponent5 from './components/myContentComponent5'


export default {
    name: 'app',
    components: {
        myHeader,
        mySocialMedia,
        myAdvice,
        myForm,
        myTitle,
        myContentComponent1,
        myContentComponent2,
        myContentComponent3,
        myContentComponent4,
        myContentComponent5
    },
    data(){
        return {
            psihoFirst: 'Нет ничего необычного в чувстве тревоги перед знакомством или первым свиданием. Испытывать волнение перед важной встречей нормально. Если же это болезненный парализующий страх, с ним нужно работать: в первую очередь — разбираться в причинах.\n' +
                '\n' +
                'Сильный страх знакомства может быть связан с неприятной ситуацией, пережитой в прошлом. Или с социальным страхом: когда человек боится, что другие увидят в нём нечто постыдное, это приводит к робости и тревоге в общении с другими людьми, причем не только в романтическом контексте. Причиной также может быть чрезмерная фиксация на цели завязать отношения.\n' +
                '\n' +
                'Во многих случаях справиться со страхом знакомства помогает практика. Чем чаще вы знакомитесь, тем реалистичнее будут ожидания при каждой попытке. Если справиться со страхом самостоятельно не удаётся — обратитесь за помощью к психологу.',
            psihoSecond:'Найдёте ли вы партнёра, зависит от множества факторов, многие из которых не в вашей власти. Поэтому не стоит относиться к поиску как к задаче чрезмерной важности: в этом случае в фокусе внимания оказываются не сами отношения, а формальный результат. \n' +
                '\n' +
                'Люди, которые приходят на терапию с сильным желанием найти партнёра, испытывают дискомфорт и фрустрацию, сталкиваясь с неудачей. А отпустив желание непременно реализоваться в сфере отношений, неожиданно легко находят спутника жизни.\n' +
                '\n' +
                'Ощущение готовности вступить в отношения может быть очень приятным. Но это не значит, что вы должны каждую минуту делать всё возможное и невозможное, чтобы найти их. Представьте себе, что отношения — это голубь, которого вы пытаетесь поймать. Если вы преследуете голубя, вы можете его напугать и он улетит. Но если просто протянуть руку и подождать, то, возможно, голубь сядет на неё сам.',

        }
    }
}
</script>

<style lang="scss">
body{
    margin: 0;
    font-family: Montserrat regular, sans-serif;
}
#app {
    display: flex;
    flex-direction: column;
}
main{
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
    align-items: center;
    @media (min-width: 678px) {
        width: 80%;
    }
    @media (min-width: 1000px) {
        width: 70%;
    };
    @media (min-width: 1920px) {
        width: 60%;
    }
}
.my-slide{
    background-color: #fff;
    padding: 80px 90px;
    font-family: Montserrat regular, sans-serif;
    .slide{
        &--content{
            line-height: 1.5em;
        }
        &--title{
            font-family: Montserrat bold, sans-serif;
        }
    }
    @media (max-width: 320px) {
        padding: 20px 10px 0 10px;
    }
}
.carousel__indicator{
    opacity: 1!important;
    bottom: 30px;
    &:before{
        background-color: #00bbd2!important;
    }
    &--active{
        border-radius: 50%;
        border: 1px solid #00bbd2;
        box-sizing: border-box;
        &:before{
            width: 0.3rem !important;
            height: 0.3rem !important;
        }
    }
}
.carousel__indicators--disc>.carousel__indicator[data-v-58e9dff8] {
    width: 1.5rem !important;
}
.carousel__list{
    box-shadow: 0 0 10px #00bbd2;
    height: 480px;
    max-width: 620px;
    background-color: #fff;
}
.contest-text{
    width: 80%;
    &:first-of-type{
        margin-top: 65px;
        @media (max-width: 320px) {
            margin-top: 75px;
        }
    }
    @media (min-width: 1920px) {
        width: 66%;
    }
}
</style>
