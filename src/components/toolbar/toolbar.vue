<template>
    <div>
        <!-- search -->
        <div>
            <input type="text" placeholder="Buscar temas" v-model="searchQuery">
        </div>
        <!-- end search -->
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useSearchStore } from '@/stores/search';
import { useRouteStore } from '@/stores/router';

import { ref, watch } from 'vue';
const router = useRouter();
const storeR = useRouteStore();
const searchStore = useSearchStore();
const searchQuery = ref('');

watch(searchQuery, (newValue) => {
    if (newValue.length > 3) {
        searchStore.setSearchQuery(newValue);
        if (router.currentRoute.value.path !== '/search') {
            router.push('/search');
        }
    } else {
        const targetRoute = storeR?.currentRouteId
            ? `${storeR?.currentRoute}/${storeR.currentRouteId}`
            : `${storeR?.currentRoute ?? '/'}`;
        if (router.currentRoute.value.path !== targetRoute) {
            router.push(targetRoute);
        }
    }
});

watch(() => searchStore.searchQuery,
    (value) => {
        searchQuery.value = value
    }
)
</script>