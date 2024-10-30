<script>
  import PerformanceChart from "./lib/PerformanceChart.svelte";

  let performanceData = [];

  async function fetchData() {
    try {
      const res = await fetch('http://localhost:6969/performance');
      performanceData = await res.json();
      console.log('Fetched Data: ', performanceData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  fetchData();

</script>

<main>
  <h1>Trading Bot Performance</h1>
  <PerformanceChart data={performanceData} />
</main>

<style>
</style>
