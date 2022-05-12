<script setup lang="ts">
import {
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  GlobalThemeOverrides
} from 'naive-ui'

const themeColor: string = '#006CFF'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: themeColor,
  },
  Input: {
    borderFocus: themeColor,
    borderHover: themeColor
  },
  Button: {
    borderFocus: themeColor,
    borderHover: themeColor,
    colorHoverPrimary: themeColor,
    colorFocusPrimary: themeColor,
    borderFocusPrimary: themeColor,
    borderHoverPrimary: themeColor,
    colorPressedPrimary: themeColor,
    borderPressedPrimary: themeColor
  },
  Select: {
    peers: {
      InternalSelection: {
        borderFocus: themeColor,
        borderHover: themeColor
      },
    }
  },
  Pagination: {
    itemTextColorHover: themeColor,
    buttonBorder: 'none'
  },
  PageHeader: {
    backColorHover: themeColor,
    backColor: '#fff',
    titleTextColor: '#fff'
  }
}
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <n-message-provider>
      <n-dialog-provider>
        <router-view></router-view>
      </n-dialog-provider>
    </n-message-provider>
  </NConfigProvider>
</template>

<style></style>
