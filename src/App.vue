<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      windowWidth: window.innerWidth,
      menuItems: [
        { label: 'Cv', route: '/' },
        { label: 'Github', route: '/github' },
        { label: 'Some Wise Words', route: '/ai' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth
    }
  },
  mounted() {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
    script.onload = () => {
      particlesJS('particles-container', {
        particles: {
          number: {
            value: 100
          },
          color: {
            value: '#ffffff'
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: 3
          },
          opacity: {
            value: 0.5
          },
          speed: {
            value: 2
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            }
          },
          modes: {
            repulse: {
              distance: 100
            }
          }
        },
        particles: {
          background: {
            color: '#000000'
          }
        }
      })
    }
    document.head.appendChild(script)

    window.addEventListener('resize', this.updateWindowWidth)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowWidth)
  }
}
</script>

<template>
  <div id="app">
    <div id="particles-container"></div>
    <div id="nav" :class="{ 'menu-open': isMenuOpen || windowWidth <= 768 }">
      <div class="hamburger" @click="toggleMenu" role="button">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div class="menu" :style="{ display: isMenuOpen && windowWidth <= 768 ? 'block' : 'none' }">
        <div class="menu-item" v-for="(item, index) in menuItems" :key="index">
          <router-link :to="item.route" @click="closeMenu">{{ item.label }}</router-link>
          <div v-if="index < menuItems.length - 1" class="menu-item-divider"></div>
        </div>
      </div>
      <div
        class="normal-menu"
        :style="{ display: !isMenuOpen && windowWidth > 768 ? 'flex' : 'none' }"
      >
        <router-link
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.route"
          @click="closeMenu"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
#particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

#nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: #ffffff;
}

.hamburger {
  display: none;
}

.normal-menu {
  display: flex;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #4e6c71;
  color: #ffffff;
  width: 180px;
  transform: scaleY(0);
  transform-origin: top left;
  transition: transform 0.3s ease-in-out;
}

.menu-open .menu {
  transform: scaleY(1);
}

.menu-item {
  width: 100%;
  position: relative;
}

.menu a {
  display: block;
  margin: 5px 0;
}

.menu-item-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #ffffff;
}

.normal-menu {
  display: flex;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    cursor: pointer;
  }

  .hamburger .bar {
    width: 100%;
    height: 3px;
    background-color: #ffffff;
  }

  .normal-menu {
    display: none;
  }
}
</style>
