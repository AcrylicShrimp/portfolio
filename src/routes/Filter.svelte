<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import FilterTabButton from './FilterTabButton.svelte';

  type TabKind = 'all' | 'frontend' | 'backend' | 'graphics' | 'compiler';

  export let extraClass: string = '';

  let tab: TabKind = 'all';
  const dispatch = createEventDispatcher();

  function onClickTab(kind: TabKind) {
    tab = kind;
    dispatch('change', { tab });
  }

  onMount(() => {
    dispatch('change', { tab });
  });
</script>

<div class="flex flex-row flex-wrap items-center justify-center {extraClass}">
  <FilterTabButton active={tab === 'all'} on:click={() => onClickTab('all')}>ALL</FilterTabButton>
  <FilterTabButton active={tab === 'frontend'} on:click={() => onClickTab('frontend')}
    >FRONTEND</FilterTabButton
  >
  <FilterTabButton active={tab === 'backend'} on:click={() => onClickTab('backend')}
    >BACKEND</FilterTabButton
  >
  <FilterTabButton active={tab === 'graphics'} on:click={() => onClickTab('graphics')}
    >GRAPHICS</FilterTabButton
  >
  <FilterTabButton active={tab === 'compiler'} on:click={() => onClickTab('compiler')}
    >COMPILER</FilterTabButton
  >
</div>
