<script>
  export let data = [];
</script>

<h2>Performance Data</h2>

<ul>
  {#each data as trade}
    <li>
      <strong>Timestamp:</strong> {trade.timestamp} — <strong>Price:</strong> ${trade.price}
    </li>
  {/each}
</ul>
