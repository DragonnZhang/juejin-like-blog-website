<script setup lang="ts">
import { useTopVanish } from '~/composables/states'
type NavData = {
  text: string
  url: string
  relate?: string[]
}
type NavDataList = {
  data: NavData[]
  avatarURL: string
}
defineProps<NavDataList>()

const topVanish = useTopVanish()

const scrollListener = () => {
  if (window.scrollY > 800) {
    topVanish.value = true
  } else if (window.scrollY < 5) {
    topVanish.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollListener, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollListener)
})
</script>

<template>
  <div class="main-header-box">
    <header class="main-header" :class="{ visible: !topVanish }">
      <div class="container">
        <NuxtLink href="/" class="logo">
          <img src="~/assets/svg/logo.svg" alt="稀土掘金" class="logo-img" />
        </NuxtLink>
        <nav role="navigation" class="main-nav">
          <ul class="nav-list">
            <li class="main-nav-list">
              <ul class="phone-hide">
                <li
                  v-for="d in data"
                  :key="d.text"
                  class="nav-item link-item"
                  :class="{ active: d.relate && d.relate.indexOf($route.path) !== -1 }"
                >
                  <NuxtLink :to="d.url">{{ d.text }}</NuxtLink>
                </li>
              </ul>
            </li>
            <ul class="right-side-nav">
              <li class="search-add">
                <ul class="search-add-ul">
                  <li class="nav-item search"></li>
                  <li class="nav-item add creator-item">
                    <div class="add-group">
                      <button class="add-btn button" @click="$router.push('/editor')">创作者中心</button>
                      <div class="more">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="unfold12-icon">
                          <path
                            d="M2.45025 4.82383C2.17422 4.49908 2.40501 4 2.83122 4H9.16878C9.59499 4 9.82578 4.49908 9.54975 4.82382L6.38097 8.5518C6.1813 8.7867 5.8187 8.7867 5.61903 8.5518L2.45025 4.82383Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="nav-item vip-entry">
                <div class="vip-title">
                  <div class="vip-entry-img">
                    <img src="~assets/svg/vip-logo.svg" alt="vip" class="vip-img" />
                  </div>
                  <div class="vip-words">会员</div>
                </div>
              </li>
              <li class="nav-item notification">
                <NuxtLink href="/notification">
                  <svg width="18" height="21" viewBox="0 0 18 21" fill="none" class="notification-icon">
                    <path
                      d="M10.457 2.21484C10.457 1.38642 9.78546 0.714844 8.95703 0.714844C8.1286 0.714844 7.45703 1.38642 7.45703 2.21484V2.69324C6.2566 2.94818 5.19205 3.50792 4.33932 4.34674C3.13874 5.52773 2.41008 7.20991 2.26438 9.23124C2.13761 10.9899 1.87805 12.4178 0.441105 14.4515C-0.126181 15.2544 0.396205 16.4637 1.46658 16.4637H16.5354C17.6058 16.4637 18.1282 15.2544 17.5609 14.4515C16.124 12.4178 15.8644 10.9899 15.7376 9.23124C15.5919 7.20991 14.8633 5.52773 13.6627 4.34674C12.7892 3.48749 11.6934 2.92108 10.457 2.67516V2.21484Z"
                    ></path>
                    <path
                      d="M6.57422 17.3574C6.41191 17.3574 6.2597 17.4362 6.16599 17.5687C6.07227 17.7012 6.04871 17.871 6.1028 18.024C6.52421 19.2163 7.66123 20.0717 8.99933 20.0717C10.3374 20.0717 11.4745 19.2163 11.8959 18.024C11.9499 17.871 11.9264 17.7012 11.8327 17.5687C11.739 17.4362 11.5868 17.3574 11.4244 17.3574H6.57422Z"
                    ></path>
                  </svg>
                </NuxtLink>
              </li>
              <li class="nav-item menu">
                <div class="avatar-wrapper">
                  <img :src="avatarURL" alt="头像" class="lazy avatar immediate" loading="lazy" />
                </div>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<style scoped lang="scss">
.main-header-box {
  position: relative;
  height: 5rem;
}

.main-header {
  background-color: var(--juejin-navigation);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  transition: transform 0.2s;
  z-index: 250;
  transform: translate3d(0, -100%, 0);

  &.visible {
    transform: translateZ(0);
  }

  .container {
    margin: auto;
    max-width: 1440px;
    display: flex;
    align-items: center;
    height: 100%;
  }
}

.logo {
  margin-right: 1rem;
  margin-left: 24px;
  display: inline-block;
  height: 22px;
  width: auto;
  padding: 1.58rem 0 1.48rem;

  .logo-img {
    display: block;
    width: 107px;
    height: 22px;
  }
}

.main-nav {
  height: 100%;
  flex: 1 0 auto;
  line-height: normal;

  .nav-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-direction: row-reverse;
    height: 100%;
  }

  .main-nav-list {
    display: flex;
    order: 99;

    .phone-hide {
      display: flex;
    }
  }
}

.phone-hide .nav-item.link-item a:not(.no-hover):hover:not(.no-border)::before {
  content: '';
  position: absolute;
  top: auto;
  right: 0;
  bottom: 0;
  left: 1rem;
  height: 2px;
  background-color: #1e80ff;
  width: calc(100% - 2rem);
}

.nav-item {
  color: #86909c;
  padding: 0 1rem;
  font-size: 1.167rem;
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  &.link-item {
    padding: 0;
    height: 5rem;
  }

  &.active > a {
    color: var(--juejin-font-brand1-normal);
    font-weight: 500;
  }

  &:hover > a {
    color: var(--juejin-font-1);
  }

  &.notification {
    position: relative;
  }

  a {
    color: var(--juejin-font-2);
  }

  .avatar-wrapper .avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    position: relative;
  }

  &.menu {
    padding-left: 0;
    position: relative;
    background-color: var(--juejin-navigation);
  }
}

.phone-hide .nav-item.link-item a {
  display: inline-block;
  height: 5rem;
  padding: 0 1rem;
  line-height: 5rem;
}

.right-side-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  margin: 0;
  order: 0;
}

li.vip-entry {
  .vip-title {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;

    .vip-words {
      color: var(--juejin-font-3);
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      margin-left: 4px;
    }
  }

  .vip-entry-img {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
  }
}

.notification {
  padding-right: 2rem;
  background-color: var(--juejin-navigation);

  &-icon path {
    fill: var(--juejin-font-3);
  }
}

.add-group {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 115px;
  height: 3rem;

  .add-btn,
  .more {
    height: 100%;
    color: var(--juejin-font-white);
    background-color: var(--juejin-brand-1-normal);
    border-radius: 3px;
    transition: background-color 0.1s linear 0.05s;
  }

  .add-btn {
    padding: 0 1rem;
    font-size: 1.167rem;
    height: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .more {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.667rem;
    border-left: 1px solid hsla(0, 0%, 100%, 0.1);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    box-sizing: border-box;
  }

  .add-btn:hover,
  .more:hover {
    background-color: var(--juejin-brand-2-hover);
  }
}
</style>
