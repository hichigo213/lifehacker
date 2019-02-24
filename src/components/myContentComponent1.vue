<template>
    <div class="content">
        <my-content-title
            :text="['Бывает ли', 'Любовь']"
            :number="1"
            :img="'src/assets/content-images/content_image.png'"
        >
        </my-content-title>
        <p class="content--paragraph">
            У учёных нет точного ответа на этот вопрос, но есть любопытные исследования. Например, в Голландии провели серию экспериментов и пришли к выводу, что любви с первого взгляда не существует. Люди путают её с сексуальным влечением, которое возникает, когда мы видим человека с привлекательной внешностью.
        </p>
        <p class="content--paragraph">
            Учёные вообще любят объяснять любовь химическими процессами в организме. С точки зрения нейробиологии, существует три нейрофизиологические подсистемы, которые запускают половое влечение, влюблённость и привязанность.
        </p>
        <div class="slider--container">
            <carousel :data="data" indicator-type="disc" :controls="false"></carousel>
        </div>
        <p class="content--paragraph">
            Любовь может начаться с любого из этих чувств. Например, привязанность к другу или коллеге способна перерасти в романтические отношения: не обязательно сначала влюбляться или испытывать физическое влечение.
        </p>
        <p class="content--paragraph">
            Не стоит расстраиваться, если с первого взгляда между вами не пробежала искра.
            В среднем человеку нужно девять свиданий, чтобы привыкнуть к новому партнёру и перейти к серьёзным
        </p>
    </div>

</template>

<script>
    import myContentTitle from './myContentTitle'
    export default {
        name: "myContentComponent",
        components: {
            myContentTitle
        },
        data(){
            return {
                data: [
                    '<div class="my-slide">' +
                    '<h3 class="slide--title">Половое влечение</h3>' +
                    '<p class="slide--content">это и есть «любовь с первого взгляда». Решающую роль в этом процессе играет тестостерон (и у мужчин, и у женщин). Этот гормон побуждает искать потенциальных партнёров, но не вызывает зависимости от конкретного человека. Если симпатия невзаимна, вы легко переживёте отказ.</p>' +
                    '</div>',
                    '<div class="my-slide">' +
                    '<h3 class="slide--title">Половое влечение</h3>' +
                    '<p class="slide--content">это и есть «любовь с первого взгляда». Решающую роль в этом процессе играет тестостерон (и у мужчин, и у женщин). Этот гормон побуждает искать потенциальных партнёров, но не вызывает зависимости от конкретного человека. Если симпатия невзаимна, вы легко переживёте отказ.</p>' +
                    '</div>',
                    '<div class="my-slide">' +
                    '<h3 class="slide--title">Половое влечение</h3>' +
                    '<p class="slide--content">это и есть «любовь с первого взгляда». Решающую роль в этом процессе играет тестостерон (и у мужчин, и у женщин). Этот гормон побуждает искать потенциальных партнёров, но не вызывает зависимости от конкретного человека. Если симпатия невзаимна, вы легко переживёте отказ.</p>' +
                    '</div>',
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.content{
    position: relative;
    @media (min-width: 678px) {
        width: 90%;
    }
    @media (min-width: 1000px) {
        width: 76%;
    }
    @media (min-width: 1920px) {
        width: 59%;
    }
    &--paragraph{
        padding: 0 20px;
        font-family: Montserrat regular, sans-serif;
        font-size: 16px;
    }
}
.slider--container{
    display: flex;
    justify-content: center;
    background-color: #00bbd2;
    background-image: url('../assets/slider-background.png');
    background-repeat: no-repeat;
    @media (max-width: 320px) {
        width: 90%;
        margin: auto;
    }
    @media (min-width: 678px) {
        width: 101vw;
        display: flex;
        justify-content: flex-end;
        transform: translateX(-14%)
    }
    @media (min-width: 1024px) {
        transform: translateX(-24%)
    }
    @media (min-width: 1280px) {
        background-position: 16%;
        padding-left: 35%;
        justify-content: center;
    };
    @media (min-width: 1920px) {
        background-position: 25%;
        padding-left: 23%;
        transform: translateX(-30%)
    }
}
</style>