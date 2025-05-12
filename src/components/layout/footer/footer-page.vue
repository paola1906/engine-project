<template>
    <div class="footer-page">
        <div class="footer-page__icon">
            <img src="../../../assets/logo-white.svg" alt="footer">
        </div>
        <strong>
            2025
        </strong>
        <div>
            Paola Yurani Rodriguez
        </div>
    </div>
</template>

<style scoped lang="scss">
.footer-page {
    display: flex;
    gap: 9px;
    padding: 12px;
    background-color: var(--color-success-900);
    color: #fff;
    border-radius: 4px;
    align-items: center;
    justify-content: center;

    &__icon {
        height: 32px;

        img {
            height: 100%;
        }
    }
}
</style>