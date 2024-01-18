<script lang="ts">
  export let extraClass: string = '';
</script>

<button
  class={`fixed right-6 md:right-20 bottom-20 w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full bg-antd-grey-7 shadow-xl ${extraClass}`}
  on:click><slot /></button
>
