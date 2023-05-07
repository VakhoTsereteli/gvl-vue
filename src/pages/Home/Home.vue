<template>
    <MainConponent/>
    <br>
    <div class="container">
        <div class="left">
            <h1>
                <span>Georgian Mobile RolePlay</span>
                <br>
                შექმენი შენი ვირტუალური ცხოვრება ჩვენთან.
                <br>
                დაიწყე თამაში შენი <span>Android</span> ტელეფონით
            </h1>
            <LauncherButton/>
        </div>
        <div class="right">
            <img src="../../assets/img/start-left.png">
        </div>
    </div>
</template>


<script>
    import './Home.css';
    import MainConponent from '../../components/Main/Main.vue';
    import LauncherButton from '../../components/LauncherButton/LauncherButton'

    export default{
        name: 'HomePage',
        components: {
            MainConponent,
            LauncherButton
        }
    }
</script>