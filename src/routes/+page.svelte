<script lang="ts">
  import Header from "$lib/Header.svelte";
  import TaskInput from "$lib/TaskInput.svelte";
  import dayjs from "dayjs";
</script>

<div
  class="p-2 sm:p-4 pt-8 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-8 max-w-screen-lg mx-auto"
>
  <Header />
  <TaskInput />
  <ol class="gap-2 flex flex-col">
    <li
      class="bg-secondary-500 p-2 rounded-lg flex justify-between items-center"
    >
      <div>
        <input class="checkbox rounded-lg h-8 w-8" type="checkbox" />
        <span class="mr-2"> تسجيل المقطع </span>
      </div>
      <div class="flex gap-1">
        <button class="btn variant-filled-surface hover:bg-surface-700">
          {dayjs()}
        </button>
        <button
          class="btn variant-filled-surface hover:bg-surface-700 p-[0.7rem]"
        >
          <svg
            class="w-5 h-5 rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
            /></svg
          >
        </button>
      </div>
    </li>
    <li
      class="bg-secondary-500 p-2 rounded-lg flex justify-between items-center"
    >
      <div>
        <input class="checkbox rounded-lg h-8 w-8" type="checkbox" />
        <span class="mr-2"> تسجيل المقطع </span>
      </div>
      <div class="flex gap-1">
        <button class="btn variant-filled-surface hover:bg-surface-700">
          {dayjs()}
        </button>
        <button
          class="btn variant-filled-surface hover:bg-surface-700 p-[0.7rem]"
        >
          <svg
            class="w-5 h-5 rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
            /></svg
          >
        </button>
      </div>
    </li>
    <li
      class="bg-secondary-500 p-2 rounded-lg flex justify-between items-center"
    >
      <div>
        <input class="checkbox rounded-lg h-8 w-8" type="checkbox" />
        <span class="mr-2"> تسجيل المقطع </span>
      </div>
      <div class="flex gap-1">
        <button class="btn variant-filled-surface hover:bg-surface-700">
          {dayjs()}
        </button>
        <button
          class="btn variant-filled-surface hover:bg-surface-700 p-[0.7rem]"
        >
          <svg
            class="w-5 h-5 rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
            /></svg
          >
        </button>
      </div>
    </li>
  </ol>
</div>
