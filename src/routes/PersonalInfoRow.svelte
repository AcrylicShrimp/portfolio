<script lang="ts">
  export let label: string;
</script>

<div class="flex flex-row items-center justify-start">
  <span class="inline-block w-20 text-sm text-center text-antd-grey-2">{label}</span>
  <slot />
</div>
