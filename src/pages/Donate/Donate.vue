<template>
    <MainComponent/>

    <select v-model="choose">
        <option>{{ null }}</option>
        <option>CAR</option>
        <option>TEST</option>
    </select>
    <h1 style="color: white;">{{ choose }}</h1>
    <button v-on:click="test">CONSOLE</button>
</template>

<script>
    import './Donate.css'
    import MainComponent from '../../components/Main/Main'

    export default{
        name: 'DonatePage',
        data(){
            return {
                choose: null,
                name: ''
            }
        },
        components: {
            MainComponent
        },
        methods: {
            test (){
                if(this.choose === null){
                    alert("Arichiet Samizne")
                } else{
                    console.log(this.choose)
                }
            }
        }
    }
</script>

<style></style>