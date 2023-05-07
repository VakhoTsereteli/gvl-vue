<template>
    <div id="main">
      <header>
        <nav class="nav_left">
          <SocialsComponent/>
        </nav>
        <router-link to="/">
          <button id="logo">
            Georgian Mobile<br>RolePlay
          </button>
        </router-link>
        <nav class="nav_right" @scroll="no">
            <li class="link" v-for="(item, index) in links" :key="index">
              <router-link :to="item.to" :class="{'active' : $route.path === item.to}">
                <button class="link">
                  <font-awesome-icon :icon="item.icon" />
                  <br>
                  {{ item.name }}
                </button>
              </router-link>
            </li>
        </nav>
        <button id="burger_menu" @click="menu">
          <p v-if="isMenuOpen === false">
            <font-awesome-icon :icon="['fas', 'bars']"/>
          </p>
          <p v-else>
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </p>
        </button>
    </header>

    <div class="mobile_nav" v-show="isMenuOpen">
        <nav>
            <br>
            <li class="link" v-for="(item, index) in links" :key="index">
              <router-link :to="item.to" :class="{'active' : $route.path === item.to}">
                <button class="link">
                  <font-awesome-icon :icon="item.icon" />
                  <br>
                  {{ item.name }}
                </button>
              </router-link>
            </li>
            <li class="link">
                <SocialsComponent/>
            </li>
        </nav>
    </div>
  </div>
  </template>
  
  <script>
    import "./Main.css";
    import SocialsComponent from '../Socials/Socials';
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { faHouse, faGamepad, faBars, faXmark, faLariSign } from "@fortawesome/free-solid-svg-icons";
  
    library.add(faHouse, faGamepad, faLariSign, faBars, faXmark);

    
    export default {
      name: "MainComponent",
      components: {
        SocialsComponent
      },
      data() {
        return {
          isMenuOpen: false,
          links: [
            {
              name: "მთავარი",
              to: "/",
              icon: ["fas", "house"],
            },
            {
              name: "როგორ ვითამაშო?",
              to: "/howtoplay",
              icon: ["fas", "gamepad"],
            },
            {
              name: "მაღაზია",
              to: "/donate",
              icon: ["fas", "lari-sign"],
            }
          ],
        };
      },
      methods: {
        menu() {
        if(this.isMenuOpen === false){
          this.isMenuOpen = true;
        } else{
          this.isMenuOpen = false;
        }
      },
    }
  };
  </script>
  