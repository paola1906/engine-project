<script setup lang="ts">
import toolbar from '@/components/toolbar/toolbar.vue';
</script>

<template>
    <div class="header">
        <div class="header__wrapper">
            <div class="header__information">
                <div class="header__logo">
                    <img class="header__logo-img" src="../../../assets/logo.svg" alt="logo">
                </div>
                <div>
                    <h3>
                        Fundamentos de la ingeniería multimedia.
                    </h3>
                </div>
            </div>

            <div class="header__search">
                <toolbar></toolbar>
            </div>
        </div>
    </div>
</template>

<style>
.header {
    border-radius: 4px;
    padding: 8px 16px;
    background-color: var(--color-success-300);
}

.header__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.header__information {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
}

.header__logo {
    position: relative;
    height: 44px;
}

.header__logo-img {
    height: 100%;
    object-fit: cover;
}
</style>