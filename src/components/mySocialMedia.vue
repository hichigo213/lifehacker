<template>
    <div class="social-media">
        <div class="social-media--item ">
            <a href="#" class="fab fa-twitter"></a>
        </div>
        <div class="social-media--item ">
            <a href="#" class="fab fa-vk"></a>
        </div>
        <div class="social-media--item ">
            <a href="#" class="fab fa-facebook-f"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mySocialMedia"
    }
</script>

<style lang="scss" scoped>
.social-media{
    position: relative;
    z-index: 3;
    display: flex;
    &--item{
        width: 56px;
        height: 56px;
        background-color: #4dd0df;
        display: flex;
        justify-content: center;
        align-items: center;
        a.fab{
            color: #fff;
            text-decoration: none;
        }
    }
    @media (min-width: 1000px) {
        flex-direction: column;
        position: absolute;
        top: 490px;
    }
}
</style>