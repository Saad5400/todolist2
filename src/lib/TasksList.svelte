<script lang="ts">
  import dayjs from "dayjs";
  import { tasks } from "$lib/stores/tasks";
  import relativeTime from "dayjs/plugin/relativeTime";
  import TaskListItems from "$lib/TaskListItems.svelte";

  dayjs.extend(relativeTime);
</script>

<ol class="gap-2 flex flex-col">
  <h3>المهام المتبقية:</h3>
  <TaskListItems doneTasks={false} />
</ol>
<ol class="gap-2 flex flex-col">
  <h3>المهام المكتملة:</h3>
  <TaskListItems doneTasks={true} />
</ol>
