<script lang="ts">
  import Header from "$lib/Header.svelte";
  import { tasks } from "$lib/stores/tasks";
  import dayjs from "dayjs";

  let title = "";

  function addTask() {
    tasks.update((currentTasks) => {
      currentTasks.push({
        title,
        assignedDate: dayjs(),
        isDone: false,
      });

      return currentTasks;
    });
    title = "";
  }
</script>

<div class="p-16 flex flex-col gap-8">
  <Header />
  <div class="input-group input-group-divider flex justify-between">
    <input
      bind:value={title}
      class="flex-1 !bg-white"
      type="search"
      placeholder="عنوان المهمة"
    />
    <button on:click={addTask} class="variant-filled-primary">إضافة</button>
  </div>
</div>
