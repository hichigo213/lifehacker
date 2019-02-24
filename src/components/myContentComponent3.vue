<template>
    <div class="content">
        <my-content-title
            :text="['Как вести себя', 'На первом', 'Свидании']"
            :number="3"
            :img="'src/assets/content-images/content3.png'"
        >
        </my-content-title>
        <p class="content--paragraph">
            У учёных нет точного ответа на этот вопрос, но есть любопытные исследования. Например, в Голландии провели серию экспериментов и пришли к выводу, что любви с первого взгляда не существует. Люди путают её с сексуальным влечением, которое возникает, когда мы видим человека с привлекательной внешностью.
        </p>
        <p class="content--paragraph">
            Учёные вообще любят объяснять любовь химическими процессами в организме. С точки зрения нейробиологии, существует три нейрофизиологические подсистемы, которые запускают половое влечение, влюблённость и привязанность.
        </p>
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
</style>