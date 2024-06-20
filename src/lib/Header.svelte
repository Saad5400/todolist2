<script lang="ts">
  import {
    ListBox,
    ListBoxItem,
    popup,
    type PopupSettings,
  } from "@skeletonlabs/skeleton";
  import dayjs from "dayjs";
  import "dayjs/locale/ar";
  import { filter } from "$lib/stores/filter";

  dayjs.locale("ar");

  let period = dayjs().format("a") == "م" ? "مساء" : "صباح";

  const popupCombobox: PopupSettings = {
    event: "click",
    target: "popupCombobox",
    placement: "bottom",
    closeQuery: ".listbox-item",
  };
</script>

<header class="flex justify-between">
  <div>
    <h1 class="text-3xl lg:text-4xl mb-2">{period} الخير 👋</h1>
    <h2 class="text-lg text-surface-900">
      {dayjs().format("اليوم، dddd D MMM YYYY")}
    </h2>
  </div>

  <button
    class="btn variant-filled-secondary w-36 px-2 h-fit py-4 justify-between"
    use:popup={popupCombobox}
  >
    <span>{$filter}</span>
    <span class="!m-0">
      <!-- rotate arrow on open -->
      <svg
        class="w-6 rotate-90"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M18 3a1 1 0 0 1 .993.883L19 4v16a1 1 0 0 1-1.993.117L17 20V4a1 1 0 0 1 1-1m-12.707.293a1 1 0 0 1 1.32-.083l.094.083l8 8a1 1 0 0 1 .083 1.32l-.083.094l-8 8a1 1 0 0 1-1.497-1.32l.083-.094L12.586 12L5.293 4.707a1 1 0 0 1 0-1.414"
        /></svg
      >
    </span>
  </button>

  <div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
    <ListBox rounded="rounded-none" active="variant-filled-primary">
      <ListBoxItem bind:group={$filter} name="medium" value="جميع المهام"
        >جميع المهام</ListBoxItem
      >
      <ListBoxItem bind:group={$filter} name="medium" value="مهام اليوم"
        >مهام اليوم</ListBoxItem
      >
    </ListBox>
    <div class="arrow bg-surface-100-800-token" />
  </div>
</header>
