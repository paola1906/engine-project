<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <component :is="getIconComponent(name)" />
    </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import IconArticle from '../icons/IconArticle.vue';
import IconCollapse from '../icons/IconCollapse.vue';
import IconCommunity from '../icons/IconCommunity.vue';
import IconGearCirclesLink from '../icons/IconGearCirclesLink.vue';
import IconExclamation from '../icons/IconExclamation.vue';
import IconExpand from '../icons/IconExpand.vue';
import IconHome from '../icons/IconHome.vue';
import IconLayoutCursorArrow from '../icons/IconLayoutCursorArrow.vue';
import IconConnectionNodes from '../icons/IconConnectionNodes.vue';
import IconMenu from '../icons/IconMenu.vue';
import IconMultimediaScreenBars from '../icons/IconMultimediaScreenBars.vue';
import IconUserMultipleContent from '../icons/IconUserMultipleContent.vue';
import IconApplicationWindowGrid from '../icons/IconApplicationWindowGrid.vue';
import IconTechnologyTools from '../icons/IconTechnologyTools.vue';
import IconFuturePerspectiveLines from '../icons/IconFuturePerspectiveLines.vue';
import IconListItem from '../icons/IconListItem.vue';

defineProps({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: [String, Number],
        default: 22,
    },
});

const getIconComponent = (iconName: string) => {
    switch (iconName) {
        case 'home':
            return IconHome;
        case 'menu':
            return IconMenu;
        case 'article':
            return IconArticle;
        case 'community':
            return IconCommunity;
        case 'expand':
            return IconExpand;
        case 'collapse':
            return IconCollapse;
        case 'exclamation':
            return IconExclamation;
        case 'gear-circles-link':
            return IconGearCirclesLink;
        case 'multimedia-screen-bars':
            return IconMultimediaScreenBars;
        case 'technology-tools':
            return IconTechnologyTools;
        case 'layout_cursor_arrow':
            return IconLayoutCursorArrow;
        case 'future-perspective-lines':
            return IconFuturePerspectiveLines
        case 'connection-nodes':
            return IconConnectionNodes
        case 'application-window-grid':
            return IconApplicationWindowGrid
        case 'user-multiple-content':
            return IconUserMultipleContent
        case 'list-item':
            return IconListItem
        default:
            console.warn(`Icono no encontrado: ${iconName}`);
            return null;
    }
};
</script>

<style scoped>
svg {
    display: inline-block;
    /* Para que se comporte como un elemento en línea con dimensiones */
    vertical-align: middle;
    /* Para alinear verticalmente con el texto adyacente */
}
</style>