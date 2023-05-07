<template>
    <div class="LauncherButton">
            <button id="launcher_btn">
                <font-awesome-icon :icon="['fab', 'android']" class="icon"/>
                <br>
                ლაუნჩერის ჩაწერა
            </button>
            <button id="promo_btn">
                <font-awesome-icon :icon="['fas', 'play']" class="icon"/>
                <br>
                სერვერის პრომო
            </button>
    </div>
</template>

<script>
    import './LauncherButton.css';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faAndroid } from '@fortawesome/free-brands-svg-icons';
    import { faPlay } from '@fortawesome/free-solid-svg-icons';

    library.add(faAndroid, faPlay);

    export default{
        name: 'LauncherButton'
    }
</script>