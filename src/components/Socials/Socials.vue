<template>
        <nav class="nav_socials">
            <ul id="socials">
                <li class="social">
                    <button class="social" id="tk_icon" style="color: white">
                        <font-awesome-icon :icon="['fab', 'tiktok']" />
                    </button>
                </li>
                <li class="social">
                    <button class="social" id="dc_icon" style="color: #5865f2">
                        <font-awesome-icon :icon="['fab', 'discord']" />
                    </button>
                </li>
                <li class="social">
                    <button class="social" id="yt_icon" style="color: red">
                        <font-awesome-icon :icon="['fab', 'youtube']" />
                    </button>
                </li>
                <li class="social">
                    <button class="social" id="fb_icon" style="color: #007ff3">
                        <font-awesome-icon :icon="['fab', 'facebook']" id="test"/>
                    </button>
                </li>
            </ul>
        </nav>
</template>

<script>
    import './Socials.css'
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faFacebook, faDiscord, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

    library.add(faFacebook, faDiscord, faYoutube, faTiktok)

    export default{
        name: 'SocialsComponent'
    }
</script>