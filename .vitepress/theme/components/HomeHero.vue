<script setup lang="ts">
  import { useData, withBase } from 'vitepress'
  import { computed } from 'vue'

  interface Action {
    text: string
    link: string
    theme?: 'brand' | 'alt'
  }

  interface Landing {
    name: string
    tagline?: string
    /** the big buttons, the first `brand` one gets the flying-logo hover effect */
    actions?: Action[]
    /** smaller buttons in the second row */
    links?: Action[]
  }

  const { frontmatter } = useData()
  const landing = computed(() => frontmatter.value.landing as Landing)

  const isExternal = (link: string) => /^[a-z]+:/i.test(link)
  const href = (link: string) => (isExternal(link) ? link : withBase(link))
  const logo = withBase('/logo.svg')
</script>

<template>
  <section class="home-hero" :style="{ '--home-logo': `url(${logo})` }">
    <div class="aurora" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
    <div class="grid" aria-hidden="true" />

    <div class="logo">
      <div class="logo-glow" aria-hidden="true" />
      <img class="logo-img" :src="logo" alt="OpenList" width="180" height="180" />
    </div>

    <h1 class="name">
      <span class="name-text">{{ landing.name }}</span>
    </h1>
    <p v-if="landing.tagline" class="tagline">{{ landing.tagline }}</p>

    <div v-if="landing.actions?.length" class="actions">
      <a
        v-for="action in landing.actions"
        :key="action.link"
        :class="['action', action.theme ?? 'alt']"
        :href="href(action.link)"
        :target="isExternal(action.link) ? '_blank' : undefined"
        :rel="isExternal(action.link) ? 'noreferrer' : undefined"
      >
        <span class="action-inner">
          <span v-if="action.theme === 'brand'" class="fly-logo" aria-hidden="true" />
          <span class="action-text">{{ action.text }}</span>
        </span>
      </a>
    </div>

    <div v-if="landing.links?.length" class="links">
      <a
        v-for="link in landing.links"
        :key="link.link"
        class="action alt small"
        :href="href(link.link)"
        :target="isExternal(link.link) ? '_blank' : undefined"
        :rel="isExternal(link.link) ? 'noreferrer' : undefined"
      >
        <span class="action-inner">
          <span class="action-text">{{ link.text }}</span>
        </span>
      </a>
    </div>
  </section>
</template>

<style scoped>
  @property --home-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: true;
  }

  .home-hero {
    --home-c1: #14b8a6;
    --home-c2: #0ea5e9;
    --home-c3: #6366f1;
    --home-glow: rgba(14, 165, 233, 0.35);
    /* the light running through the name, must stay readable on the page background */
    --home-shine: #22d3ee;

    position: relative;
    isolation: isolate;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* extend the background behind the transparent nav bar of the home layout */
    margin-top: calc(-1 * var(--vp-nav-height));
    padding: calc(var(--vp-nav-height) + 56px) 24px 48px;
    overflow: clip;
    text-align: center;
  }

  .dark .home-hero {
    --home-c1: #5eead4;
    --home-c2: #38bdf8;
    --home-c3: #a5b4fc;
    --home-glow: rgba(56, 189, 248, 0.3);
    --home-shine: #fff;
  }

  /* Background: slowly drifting aurora + a faded grid */
  .aurora {
    position: absolute;
    inset: 0;
    z-index: -2;
    filter: blur(72px);
    opacity: 0.5;
    pointer-events: none;
  }

  .dark .aurora {
    opacity: 0.32;
  }

  .aurora span {
    position: absolute;
    border-radius: 50%;
    animation: drift 20s ease-in-out infinite alternate;
  }

  .aurora span:nth-child(1) {
    top: -10%;
    left: 8%;
    width: min(620px, 70vw);
    aspect-ratio: 1;
    background: radial-gradient(circle, var(--home-c1), transparent 65%);
  }

  .aurora span:nth-child(2) {
    top: -5%;
    right: 6%;
    width: min(560px, 65vw);
    aspect-ratio: 1;
    background: radial-gradient(circle, var(--home-c2), transparent 65%);
    animation-duration: 24s;
    animation-delay: -8s;
  }

  .aurora span:nth-child(3) {
    top: 30%;
    left: 30%;
    width: min(480px, 60vw);
    aspect-ratio: 1;
    background: radial-gradient(circle, var(--home-c3), transparent 65%);
    opacity: 0.7;
    animation-duration: 28s;
    animation-delay: -14s;
  }

  .grid {
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image:
      linear-gradient(var(--vp-c-divider) 1px, transparent 1px),
      linear-gradient(90deg, var(--vp-c-divider) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(ellipse 60% 55% at 50% 40%, #000 10%, transparent 75%);
    opacity: 0.6;
    pointer-events: none;
  }

  /* Logo: floating, with a spinning light ring behind it */
  .logo {
    position: relative;
    display: grid;
    place-items: center;
    width: 180px;
    height: 180px;
  }

  .logo-glow {
    position: absolute;
    inset: -14%;
    border-radius: 50%;
    background: conic-gradient(
      from var(--home-angle),
      var(--home-c1),
      var(--home-c2),
      var(--home-c3),
      var(--home-c1)
    );
    filter: blur(32px);
    opacity: 0.55;
    animation: spin 8s linear infinite;
    transition: opacity 0.3s;
  }

  .logo:hover .logo-glow {
    opacity: 0.8;
  }

  .logo-img {
    position: relative;
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 16px 28px var(--home-glow));
    animation: float 3.2s ease-in-out infinite alternate;
  }

  /* Name: gradient text with light flowing through it */
  .name {
    margin: 28px 0 0;
    font-size: clamp(56px, 13vw, 128px);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -0.04em;
  }

  .name-text {
    display: inline-block;
    padding: 0 0.04em 0.06em;
    background: linear-gradient(
      100deg,
      var(--home-c1) 0%,
      var(--home-c2) 25%,
      var(--home-c3) 45%,
      var(--home-shine) 50%,
      var(--home-c3) 55%,
      var(--home-c2) 75%,
      var(--home-c1) 100%
    );
    background-size: 250% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    filter: drop-shadow(0 4px 24px var(--home-glow));
    animation: flow 7s linear infinite;
  }

  .tagline {
    max-width: 760px;
    margin: 20px 0 0;
    font-size: clamp(20px, 3.2vw, 30px);
    font-weight: 800;
    line-height: 1.35;
    color: var(--vp-c-text-1);
  }

  /* Buttons */
  .actions,
  .links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
  }

  .actions {
    margin-top: 44px;
  }

  .links {
    margin-top: 18px;
  }

  .action {
    position: relative;
    display: inline-flex;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    transition:
      transform 0.25s,
      box-shadow 0.25s;
  }

  .action:hover {
    transform: translateY(-2px);
  }

  .action:active {
    transform: scale(0.97);
  }

  .action-inner {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 0 30px;
    overflow: hidden;
    border-radius: inherit;
    font-size: 16px;
  }

  /* brand: animated light running around the border + glow */
  .action.brand {
    padding: 2px;
    background: conic-gradient(
      from var(--home-angle),
      var(--home-c1),
      var(--home-c2),
      var(--home-c3),
      #fff,
      var(--home-c1)
    );
    animation: spin 4s linear infinite;
  }

  .action.brand::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: inherit;
    background: inherit;
    filter: blur(14px);
    opacity: 0.55;
    transition: opacity 0.25s;
  }

  .action.brand:hover::before {
    opacity: 0.9;
  }

  .action.brand .action-inner {
    height: 44px;
    padding: 0 28px;
    background: linear-gradient(135deg, #0d9488, #0284c7 60%, #4f46e5);
    color: #fff;
  }

  /* the old site's hover: the text flies away and the logo flies in */
  .action-text {
    display: block;
    transition:
      transform 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
  }

  .fly-logo {
    position: absolute;
    width: 1.3em;
    height: 1.3em;
    background-color: #fff;
    mask: var(--home-logo) center / contain no-repeat;
    -webkit-mask: var(--home-logo) center / contain no-repeat;
    opacity: 0;
    transform: translateX(-2em) scale(0.8);
    transition:
      transform 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
  }

  .action.brand:hover .action-text {
    transform: translateX(5em);
    opacity: 0;
  }

  .action.brand:hover .fly-logo {
    opacity: 1;
    transform: translateX(0) scale(1.1);
    animation: bob 0.6s ease-in-out infinite alternate;
  }

  /* alt: frosted glass with a light sweep on hover */
  .action.alt .action-inner {
    border: 1px solid var(--vp-c-divider);
    background: color-mix(in srgb, var(--vp-c-bg-soft) 72%, transparent);
    backdrop-filter: blur(8px);
    color: var(--vp-c-text-1);
    transition: border-color 0.25s;
  }

  .action.alt:hover .action-inner {
    border-color: var(--vp-c-brand-2);
  }

  .action.alt .action-inner::after {
    content: '';
    position: absolute;
    top: 0;
    left: -60%;
    width: 40%;
    height: 100%;
    background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.45), transparent);
    transform: skewX(-20deg);
    transition: left 0.6s;
  }

  .dark .action.alt .action-inner::after {
    background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.18), transparent);
  }

  .action.alt:hover .action-inner::after {
    left: 130%;
  }

  .action.small .action-inner {
    height: 36px;
    padding: 0 18px;
    font-size: 14px;
    color: var(--vp-c-text-2);
  }

  .action.small:hover .action-inner {
    color: var(--vp-c-text-1);
  }

  @keyframes spin {
    to {
      --home-angle: 360deg;
    }
  }

  @keyframes flow {
    from {
      background-position: 100% 0;
    }
    to {
      background-position: -150% 0;
    }
  }

  @keyframes float {
    from {
      transform: translateY(8px);
    }
    to {
      transform: translateY(-8px);
    }
  }

  @keyframes bob {
    from {
      transform: translateY(0.1em) scale(1.1);
    }
    to {
      transform: translateY(-0.1em) scale(1.1);
    }
  }

  @keyframes drift {
    from {
      transform: translate3d(-6%, -4%, 0) scale(1);
    }
    to {
      transform: translate3d(6%, 5%, 0) scale(1.15);
    }
  }

  @media (max-width: 640px) {
    .home-hero {
      padding-top: calc(var(--vp-nav-height) + 32px);
    }

    .logo {
      width: 136px;
      height: 136px;
    }

    .actions {
      margin-top: 32px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .home-hero *,
    .home-hero *::before,
    .home-hero *::after {
      animation: none !important;
      transition: none !important;
    }
  }
</style>
