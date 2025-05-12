<template>
    <div class="search__cards">
        <div class="search__card" v-for="article in results">
            <div>
                <strong>
                    {{ article?.Title }}
                </strong>
            </div>

            <p>
                {{ article.Sections[1].Value }}
            </p>

            <div class="search__card-link">
                <a @click="openCard(article.Id)">
                    <span>
                        ver más
                    </span>
                </a>
            </div>
        </div>

        <div v-if="!results || results?.length === 0">
            <div>
                <strong>
                    No se encontraron resultados
                </strong>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSearchStore } from '@/stores/search';
import { useRouteStore } from '@/stores/router';
import { ref, watch } from 'vue';
import queryArticle from '@/services/queryArticles';
import type { IArticle } from '@/models/article';

const search = useSearchStore();
const results = ref<IArticle[]>([]);
const routeStore = useRouteStore();

const query = (value: string) => {
    queryArticle(value).then(result => {
        results.value = result ?? []
    })
}

const openCard = (id: number) => {
    routeStore.setRouteId(id, 'article')
    search.setSearchQuery('');
}

watch(() => search.searchQuery,
    (value: string) => {
        query(value);
    })
</script>

<style scoped lang="scss">
.search {
    &__cards {
        display: flex;
        gap: 16px;
        flex-direction: column;
    }

    &__card {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid var(--color-success-500);
        background-color: var(--color-success-50);
    }

    &__card-link {
        display: flex;
        justify-content: end;
        cursor: pointer;
        color: var(--color-success-500);
        font-weight: 600;
    }
}
</style>