<script lang="ts">
  import dayjs from "dayjs";
  import "dayjs/locale/ar";

  dayjs.locale("ar");

  let period = dayjs().format("a") == "م" ? "مساء" : "صباح";
</script>

<header class="flex justify-between">
  <div>
    <h1 class="text-4xl mb-2">{period} الخير 👋</h1>
    <h2 class="text-2xl text-surface-900/40">
      {dayjs().format("اليوم، dddd D MMM YYYY")}
    </h2>
  </div>
  <div class="bg-white w-32 h-16"></div>
</header>
