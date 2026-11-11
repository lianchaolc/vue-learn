<template>
  <div class="home-page">
    <!-- 4个统计卡片 -->
    <div class="card-row">
      <div class="stat-card">
        <div class="card-label">Total Pledged Collateral In Stock</div>
        <div class="card-value">28</div>
      </div>
      <div class="stat-card">
        <div class="card-label">Today Inbound Orders</div>
        <div class="card-value">45</div>
      </div>
      <div class="stat-card">
        <div class="card-label">Today Outbound Orders</div>
        <div class="card-value">82</div>
      </div>
      <div class="stat-card">
        <div class="card-label">Pending Tasks</div>
        <div class="card-value">7</div>
      </div>
    </div>

    <!-- 业务趋势折线图 -->
    <div class="chart-wrap">
      <div class="chart-title">Business Trend Chart</div>
      <div ref="lineChartRef" class="chart-box"></div>
    </div>

    <!-- 网点分布饼图 -->
    <div class="chart-wrap">
      <div class="chart-title">Branch Business Distribution</div>
      <div ref="pieChartRef" class="chart-box"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const lineChartRef = ref(null)
const pieChartRef = ref(null)
let lineChartInstance = null
let pieChartInstance = null

// 初始化折线图（周一~周五，和截图数据一致）
const initLineChart = () => {
  lineChartInstance = echarts.init(lineChartRef.value)
  const option = {
    tooltip: { trigger: 'axis' },
    grid: { left: 30, right: 20, bottom: 30 },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五'],
      boundaryGap: false
    },
    yAxis: { type: 'value', min: 0, max: 30 },
    series: [
      {
        name: '业务量',
        type: 'line',
        data: [12, 22, 18, 28, 25],
        symbol: 'circle',
        itemStyle: { color: '#4070d8' },
        lineStyle: { color: '#4070d8', width: 2 }
      }
    ]
  }
  lineChartInstance.setOption(option)
}

// 初始化饼图（A网点、B网点、C网点、其他）
const initPieChart = () => {
  pieChartInstance = echarts.init(pieChartRef.value)
  const option = {
    tooltip: { trigger: 'item' },
    series: [
      {
        name: '网点分布',
        type: 'pie',
        radius: '60%',
        center: ['50%', '50%'],
        data: [
          { name: 'A网点', value: 40, itemStyle: { color: '#4070d8' } },
          { name: 'B网点', value: 30, itemStyle: { color: '#78c268' } },
          { name: 'C网点', value: 20, itemStyle: { color: '#f7c34e' } },
          { name: '其他', value: 10, itemStyle: { color: '#e85c5c' } }
        ],
        label: { show: true, formatter: '{b}' }
      }
    ]
  }
  pieChartInstance.setOption(option)
}

// 窗口大小自适应
const resizeHandler = () => {
  lineChartInstance?.resize()
  pieChartInstance?.resize()
}

onMounted(() => {
  initLineChart()
  initPieChart()
  window.addEventListener('resize', resizeHandler)
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler)
  lineChartInstance?.dispose()
  pieChartInstance?.dispose()
})
</script>

<style scoped>
.home-page {
  padding: 16px;
  gap: 16px;
  display: flex;
  flex-direction: column;
}
.card-row {
  display: flex;
  gap: 12px;
}
.stat-card {
  flex: 1;
  border: 1px solid #eee;
  padding: 16px;
  border-radius: 6px;
}
.card-label {
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
}
.card-value {
  font-size: 28px;
  color: #007bff;
  font-weight: 500;
}
.chart-wrap {
  border: 1px solid #eee;
  padding: 16px;
  border-radius: 6px;
}
.chart-title {
  font-size: 15px;
  margin-bottom: 12px;
  color: #333;
}
.chart-box {
  width: 100%;
  height: 320px;
}
</style>
