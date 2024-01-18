<script lang="ts">
  import { ProjectType, type ProjectInfo } from '@lib/ProjectInfo';
  import dayjs from 'dayjs';

  export let info: ProjectInfo;
  export let extraClass: string = '';

  function computeBgColor(type: ProjectType): string {
    if (type === ProjectType.Career) return 'bg-antd-gold-10/50';
    else return 'bg-antd-purple-10/50';
  }

  function formatDate(date: string): string {
    return dayjs(date).format('YYYY-MM');
  }

  function formatProjectType(type: ProjectType): string {
    if (type === ProjectType.Career) return '경력';
    else return '개인 프로젝트';
  }

  $: bgColor = computeBgColor(info.type);
  $: beginAt = formatDate(info.beginAt);
  $: endAt = info.endAt ? formatDate(info.endAt) : '현재';
  $: projectType = formatProjectType(info.type);
</script>

<article class={`flex flex-col items-stretch justify-start px-4 py-2 ${bgColor} ${extraClass}`}>
  <div class="flex flex-row items-start justify-stretch">
    <p class="flex-none inline text-sm">
      {beginAt} ~ {endAt}
    </p>
    <span class="flex-1" />
    <p class="flex-none inline text-sm">{projectType}</p>
  </div>
  <h1 class="mt-4"><a href={`/projects/${info.id}`} class="font-bold text-2xl">{info.name}</a></h1>
  <p class="mt-2 pl-2">{info.description}</p>
</article>
