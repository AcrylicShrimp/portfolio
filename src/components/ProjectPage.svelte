<script lang="ts">
  import type { ProjectInfo } from '@lib/ProjectInfo';

  export let info: ProjectInfo;
</script>

<h1 class="text-4xl">Project Portfolio</h1>
<hr class="mt-2" />
<section class="mt-16">
  <h1 class="text-xl text-center md:text-2xl md:text-start">{info.name}</h1>
  <div class="mt-4">
    <slot />
  </div>
</section>
