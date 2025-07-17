<style>
  /* Markdown */
  h1 {
    background: var(--vp-c-brand-3);
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    color: white;
    margin: 1.5rem 0 2rem 0;
    padding: 1rem 0;
    text-align: center;
  }

  h2 {
    color: var(--vp-c-brand-1);
    font-size: 1.5rem;
    font-weight: 500;
  }

  article {
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    padding: 1rem 2rem;
    position: relative;
    overflow: hidden;
    font-family: var(--va-font-mono);
  }

  .subtitle {
    color: white;
    text-align: center;
    font-size: 1.5rem;
    margin: 0;
  }

  /* Theme Style Override */
  /* hide sidebar */
  @media screen and (max-width: 1280px) {
    .has-sidebar {
      padding-left: unset !important;
    }
  }

  /* hide aside */
  .aside-container {
    display: none;
  }
  .toc-btn {
    display: none;
  }
</style>

<template>
  <RouterView />
  <BackToTop />
</template>
