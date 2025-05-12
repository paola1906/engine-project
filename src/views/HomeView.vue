<template>
  <div class="home">
    <div class="home__img">
      <img src="../assets/img/engine.jpeg" alt="">
    </div>

    <article class="home__article">
      <header>
        <h3><strong>
            {{ articleFirst?.Title }}
          </strong></h3>
      </header>
      <main>
        <p>
          {{ shortDescription(articleFirst?.Sections?.[1]?.Value || '') }}
        </p>
      </main>
      <footer class="home__article-footer">
        <router-link class="home__card-link" to="/article/1"><strong>
            ver más
          </strong></router-link>
      </footer>
    </article>

    <div class="home__cards-articles">
      <div class="home__card-article" v-for="article in articles" :key="article.Id">
        <strong class="home__card-article-title">
          {{ article.Title }}
        </strong>
        <p class="home__card-article-description">
          {{ shortDescription(article.Sections?.[1]?.Value || article.Sections?.[1]?.Items?.[0].Value || '', 110) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IArticle } from '@/models/article';
import getArticleData from '@/services/getArticleData';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const articles = ref<IArticle[] | null>(null);
const articleFirst = ref<IArticle | null>(null);

onMounted(() => {
  getArticles()
})

const getArticles = () => {
  getArticleData(
  ).then((value) => {
    articleFirst.value = value[0]
    articles.value = value.filter(article => article.Id > 1)
  })
}

const shortDescription = (text: string, limit: number = 250): string => {
  return text.length > limit ? `${text.slice(0, limit)}...` : text;
}

</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;

  &__img {
    height: clamp(200px, 50vh, 500px);
    width: 100%;
    padding: 24px;
    background-color: var(--color-success-100);
    border-radius: 4px;

    img {
      height: 100%;
      width: 100%;
      border-radius: 4px;
      object-fit: cover;
    }
  }

  &__article {
    display: flex;
    flex-direction: column;
    padding: 24px;
    background: var(--color-success-100);
    border-radius: 4px;
    gap: 12px;

    &-footer {
      text-align: end;
    }
  }

  &__cards-articles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 24px;
  }

  &__card-article {
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--color-success-500);
    background-color: var(--color-success-50);
    padding: 8px;
    cursor: pointer;

    &-title {
      color: var(--color-success-800);
      text-align: center;
    }

    &-description {
      display: none;
      color: var(--color-success-600);
    }

    &:hover {
      .home__card-article-title {
        display: none;
      }

      .home__card-article-description {
        display: block;
        text-align: center;
      }
    }
  }

  &__card-link {
    color: var(--color-success-600);
    text-decoration: none;
  }
}
</style>
