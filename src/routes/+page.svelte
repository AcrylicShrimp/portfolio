<script lang="ts">
  import FloatButton from '@components/FloatButton.svelte';

  import ToTop from '@icons/ToTop.svelte';

  import Comment from './Comment.svelte';
  import PersonalInfo from './PersonalInfo.svelte';
  import Project from './Project.svelte';
  import Filter from './Filter.svelte';

  import { urls, projects } from './consts';

  let tab: string;

  function onChangeTab(event: CustomEvent<{ tab: string }>) {
    tab = event.detail.tab;
  }

  function onClickToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  $: filteredProjects =
    tab === 'all' ? projects : projects.filter((project) => project.tag === tab);
</script>

<h1 class="text-4xl">Project Portfolio</h1>
<hr class="mt-2" />
<section class="mt-16">
  <h1 class="text-xl text-center md:text-2xl md:text-start">자기소개</h1>
  <div class="flex flex-col md:flex-row items-start md:items-center justify-start md:mt-4">
    <PersonalInfo
      name="박현준"
      nickname="AcrylicShrimp"
      email="led789zxpp@naver.com"
      {urls}
      extraClass="mt-4 md:m-0 flex-none"
    />
    <Comment extraClass="mt-4 md:m-0 md:ml-8 flex-1">
      <p class="text-sm md:text-base leading-6 md:leading-8">
        안녕하세요, 8년차 프로그래머 박현준입니다.
      </p>
      <p class="text-sm md:text-base leading-6 md:leading-8">
        저는 새로운 무언가를 알게 되는 것을 즐기며 변화를 두려워하지 않습니다. 게임에 관심이 많아
        일찍 프로그래밍에 입문하였으며 독학 및 다양한 프로젝트로 얻은 경험을 바탕으로 어떤 어려운
        문제도 끈기있게 파헤쳐 해결합니다.
      </p>
    </Comment>
  </div>
</section>
<section class="mt-16">
  <h1 class="text-xl text-center md:text-2xl md:text-start">프로젝트 목록</h1>
  <Filter extraClass="mt-4" on:change={onChangeTab} />
  <div class="mt-4">
    {#each filteredProjects as project}
      <Project info={project} extraClass="project" />
    {:else}
      <p class="text-center text-lg md:text-2xl">프로젝트가 없습니다.</p>
    {/each}
  </div>
</section>
<FloatButton extraClass="index-page-to-top" on:click={onClickToTop}><ToTop /></FloatButton>

<style lang="postcss">
  :global(.project + .project) {
    @apply mt-8;
  }

  :global(.index-page-to-top > svg) {
    @apply mx-auto w-[24px] h-[24px] md:w-[28px] md:h-[28px] stroke-gray-500 transition-colors duration-200;
  }

  :global(.index-page-to-top:hover > svg) {
    @apply stroke-gray-300;
  }

  :global(.index-page-to-top:active > svg) {
    @apply stroke-white;
  }
</style>
