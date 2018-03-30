<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import jetpack from 'fs-jetpack'
import os from 'os'
import puppeteer from './services/puppeteer'

export default {
  name: 'rethread',
  mounted () {
    const useDataDir = jetpack
        .cwd('../../Applications/')
    const platform = os.platform()

    let exec
    switch (platform) {
      case 'darwin':
        exec = `${useDataDir.path()}/chrome-mac/Chromium.app/Contents/MacOS/Chromium`
        break
      case 'linux':
        exec = `${useDataDir.path()}/chrome-linux/chrome`
        break
      case 'win32':
        if (os.arch() === 'x64') {
          exec = `${useDataDir.path()}/chrome-win32/chrome.exe`
        }
        exec = `${useDataDir.path()}/chrome-win32/chrome.exe`
        break
      case 'win64':
        exec = `${useDataDir.path()}/chrome-win32/chrome.exe`
        break
    }
    if (!this.$store.state.chromePath) {
      this.setChromePath({ exec })
    }
    puppeteer({ exec })
  },
  methods: mapMutations(['setChromePath'])
}
</script>

<style>
/* CSS */
</style>
