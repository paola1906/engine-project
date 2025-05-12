<template>
    <div class="article">
        <h3 class="article__title">
            <strong>
                {{ article?.Title }}
            </strong>
            <router-link class="article__go-back" :to="{ name: 'home' }" @click="changeRoute">
                <span>
                    Volver
                </span>
            </router-link>
        </h3>

        <div v-for="section in article?.Sections">
            <div class="article__img" v-if="section?.Type === 'image' && section?.Value">
                <img :src="resolvedImageUrl(section.Value)" alt="article img">
            </div>

            <div v-if="section.Type === 'paragraph'">
                <p>
                    {{ section.Value }}
                </p>
            </div>

            <ul class="article__list" v-if="section.Type === 'list'">
                <li class="article__items" v-for="item in section.Items">
                    <base-icon name="list-item"></base-icon>
                    <strong v-if="item.Title" class="article__items-title">
                        {{ item.Title }}:
                    </strong>
                    <p>
                        {{ item.Value }}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IArticle } from '@/models/article';
import getArticleById from '@/services/getArticleById';
import { defineComponent, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import baseIcon from '../base-icon/base-icon.vue';
import { useRouteStore } from '@/stores/router';

defineComponent({
    template: '',
    name: 'app-article'
})

const route = useRoute();

const articleId = ref(parseInt(route.params.id as string));
const article = ref<IArticle | null>(null);

onMounted(() => {
    getArticle(articleId.value)
})

const getArticle = (id: number) => {
    getArticleById(articleId.value).then((value) => {
        article.value = value;
    })
}

const resolvedImageUrl = (img: string) => {
    return new URL(`../../assets/img/${img}`, import.meta.url).href;
};


const routeStore = useRouteStore();

const changeRoute = () => {
    routeStore.setRouteId(undefined)
}

watch(
    () => route.params.id,
    (newId) => {
        articleId.value = parseInt(newId as string);
        getArticle(articleId.value);
    }
);
</script>

<style scoped src="./article.scss" lang="scss"></style>