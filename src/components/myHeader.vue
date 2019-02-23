<template>
    <header>
        <div class="nav-bar">
            <img class="nav-bar--menu" src="../assets/menu.png" alt="">
        </div>
        <div class="logo">
            <img class="logo--scarlett" src="../assets/header-logos/scarlett.png" alt="">
            <img class="logo--lifehacker" src="../assets/header-logos/lifehacker.png" alt="">
        </div>
        <div class="header-image-container">
        </div>

    </header>
</template>

<script>
    export default {
        name: "myHeader",
    }
</script>

<style lang="scss" scoped>
    header{
        position: relative;
        height: 404px;
    }
    .nav-bar{
        background-color: #00bbd2;
        height: 64px;
        width: 100%;
        position: relative;
        z-index: 10;
        &--menu{
            padding-top: 22px;
            padding-left: 23px;
        }
    }
    .logo{
        position: absolute;
        right: 10px;
        top: 20px;
        font-size: 12px;
        z-index: 11;
        &--lifehacker{
            margin-left: 17px;
            padding-right: 15px;
        }
            @media (min-width: 1920px) {
                right: 200px;
            }
    }
    .header-image-container{
        overflow: hidden;
        z-index: 1;
        position: absolute;
        background-image: url("../assets/header-image1.png");
        background-size: cover;
        min-height: 340px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    @media(min-width: 1000px){
        .nav-bar{
            height: 490px;
            width: 56px;
            &--menu{
                padding-top: 22px;
                padding-left: 12px;
            }
        }
        .header-image-container{
            top: 0;
            background-image: url("../assets/header-image.png");
            height: 490px;
        }
    }
</style>
