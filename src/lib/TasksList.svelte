<script lang="ts">
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import TaskListItems from "$lib/TaskListItems.svelte";
  import { tasks } from "./stores/tasks";
  import { fade } from "svelte/transition";

  dayjs.extend(relativeTime);
</script>

{#if $tasks.length == 0}
  <div class="flex flex-col items-center justify-center h-[50dvh]">
    <img src="/tree.svg" class="w-48 h-48 grayscale" alt="شجرة" />
    ليس لديك اي مهام
  </div>
{:else}
  {#if $tasks.filter((task) => !task.isDone).length > 0}
    <ol transition:fade class="gap-2 flex flex-col">
      <h3>المهام المتبقية:</h3>
      <TaskListItems doneTasks={false} />
    </ol>
  {/if}

  {#if $tasks.filter((task) => task.isDone).length > 0}
    <ol transition:fade class="gap-2 flex flex-col">
      <h3>المهام المكتملة:</h3>
      <TaskListItems doneTasks={true} />
    </ol>
  {/if}
{/if}
