<template>
  <div id="app">
    <div id="particles-container"></div>
    <div id="nav">
      <router-link to="/">Cv</router-link>
      <router-link to="/github">Github</router-link>
      <router-link to="/ai">Some Wise words</router-link>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style>
#particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
