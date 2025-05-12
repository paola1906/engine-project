<script setup lang="ts">
import baseIcon from '@/components/base-icon/base-icon.vue';
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { useRouteStore } from '@/stores/router';
const routeStore = useRouteStore();

const isExpansive = ref(true);
const currentId = ref();

const menu = ref([
    {
        Icon: 'home',
        ViewLabel: 'Principal',
        Link: '',
    },
    {
        Icon: 'multimedia-screen-bars',
        ViewLabel: '¿Qué es la ingeniería multimedia?',
        Link: '/article',
        Id: 1
    },
    {
        Icon: 'gear-circles-link',
        ViewLabel: 'Medios digitales',
        Link: '/article',
        Id: 2
    },
    {
        Icon: 'technology-tools',
        ViewLabel: 'Tecnología y herramienta',
        Link: '/article',
        Id: 3
    },
    {
        Icon: 'layout_cursor_arrow',
        ViewLabel: 'Diseño IUX/UI',
        Link: '/article',
        Id: 4
    },
    {
        Icon: 'connection-nodes',
        ViewLabel: 'Interactividad y sistemas inteligentes',
        Link: '/article',
        Id: 5
    },
    {
        Icon: 'application-window-grid',
        ViewLabel: 'Aplicaciones reales',
        Link: '/article',
        Id: 6
    },
    {
        Icon: 'user-multiple-content',
        ViewLabel: 'Tipologías Multimedia',
        Link: '/article',
        Id: 7
    },
    {
        Icon: 'future-perspective-lines',
        ViewLabel: 'El futuro de la ingeniería multimedia',
        Link: '/article',
        Id: 8
    }
])

const changeExpansive = () => {
    isExpansive.value = !isExpansive.value
}

const changeRoute = (r: any, url: any) => {
    routeStore.setRouteId(r, url)
}

watch(
    () => routeStore.currentRouteId,
    (newId) => {
        currentId.value = newId
    }
);

</script>

<template>
    <div class="sidebar" :style="{ '--with-sidebar': isExpansive ? '270px' : '50px' }">
        <a class="sidebar__collapse-btn" v-on:click="changeExpansive">
            <strong>
                <base-icon :name="isExpansive ? 'collapse' : 'expand'" size="20"></base-icon>
            </strong>
        </a>
        <div class="sidebar__menu">
            <div class="sidebar__menu-icon">
                <base-icon v-if="!isExpansive" name="menu"></base-icon>
                <strong v-if="isExpansive">
                    Menu
                </strong>
            </div>
            <router-link v-for="item in menu" class="sidebar__menu-link"
                :class="{ 'sidebar__menu-link--active': currentId === item.Id }"
                :to="`${item.Link ?? ''}/${item?.Id ?? ''}`" @click="changeRoute(item?.Id, item?.Link)">
                <div class="sidebar__menu-icon">
                    <base-icon :name="item.Icon" size="20"></base-icon>
                </div>
                <span v-if="isExpansive" class="sidebar__menu-label">
                    {{ item.ViewLabel }}
                </span>
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.sidebar {
    min-width: 50px;
    width: var(--with-sidebar, 270px);
    padding: 16px 8px;
    border-radius: 4px;
    position: relative;
    background-color: var(--color-success-700);
}

.sidebar__collapse-btn {
    position: absolute;
    border-radius: 50%;
    width: 20px;
    height: 22px;
    background-color: var(--color-success-400);
    display: flex;
    justify-content: center;
    align-items: center;
    right: -10px;
    top: 6px;
}

.sidebar__title {
    color: #ffff;
    font-size: 20px;
}

.sidebar__menu {
    padding: 4px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: #ffff !important;
}

.sidebar__menu-link {
    color: #ffff;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 4px;
    text-decoration: none;
    min-width: 28px;
    border-radius: 8px;

    &:hover {
        background-color: var(--color-success-500);
    }

    &--active {
        font-weight: 600;
        background-color: var(--color-success-600);
    }
}

.sidebar__menu-icon {
    min-width: 22px;
}

.sidebar__menu-label {
    color: #ffff;
}
</style>