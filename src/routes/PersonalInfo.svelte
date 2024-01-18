<script lang="ts">
  import type { UrlInfo } from '@lib/UrlInfo';
  import PersonalInfoRow from './PersonalInfoRow.svelte';

  export let name: string;
  export let nickname: string;
  export let email: string;
  export let urls: UrlInfo[];
  export let extraClass: string = '';
</script>

<div class={`flex flex-col items-start justify-start ${extraClass}`}>
  <PersonalInfoRow label="이름">
    <span class="text-base md:text-lg">{name} ({nickname})</span>
  </PersonalInfoRow>
  <PersonalInfoRow label="이메일">
    <a href={`mailto:${email}`} class="text-base md:text-lg">{email}</a>
  </PersonalInfoRow>
  {#each urls as { name, url }}
    <PersonalInfoRow label={name}>
      <a href={url} target="_blank" class="text-base md:text-lg">{url}</a>
    </PersonalInfoRow>
  {/each}
</div>
