<script lang="ts">
  import dayjs from "dayjs";
  import { tasks } from "$lib/stores/tasks";
  import relativeTime from "dayjs/plugin/relativeTime";
  import { getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";

  dayjs.extend(relativeTime);
  const modalStore = getModalStore();

  export let doneTasks: boolean;

  function confirmDelete(task: Task) {
    const modal: ModalSettings = {
      type: "confirm",
      title: "متأكد تبغا تحذف؟",
      body: `سيتم حذف المهمة: "${task.title}"`,
      buttonTextCancel: "الغاء",
      buttonTextConfirm: "تأكيد",
      response: (r: boolean) => {
        if (r) {
          tasks.update((currentTasks) => {
            let index = currentTasks.indexOf(task);
            currentTasks.splice(index, 1);
            return currentTasks;
          });
        }
      },
    };
    modalStore.trigger(modal);
  }
</script>

{#each $tasks as task}
  {#if task.isDone == doneTasks}
    <li
      class="bg-secondary-500 p-2 rounded-lg flex justify-between items-center"
    >
      <div>
        <input
          bind:checked={task.isDone}
          class="checkbox rounded-lg h-8 w-8"
          type="checkbox"
        />
        <span class="mr-2">{task.title}</span>
      </div>
      <div class="flex gap-1">
        <button class="btn variant-filled-surface hover:bg-surface-700">
          {dayjs().to(dayjs(task.assignedDate))}
        </button>
        <button
          on:click={() => confirmDelete(task)}
          class="btn variant-filled-surface hover:bg-surface-700 p-[0.7rem]"
        >
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
            /></svg
          >
        </button>
      </div>
    </li>
  {/if}
{/each}
