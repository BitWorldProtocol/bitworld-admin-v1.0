import { Button, Card, Descriptions } from 'antd';
import styles from './index.module.less';
import { useEffect, useState } from 'react';
import { useStore } from '@/store';
import { formateNum, formateState, formatMoney } from '@/utils';
import api from '@/api';
import { Dashboard } from '@/types/api';
import { useCharts } from '@/hook/useCharts';

/**
 * 首页
 */
export default function DashBoard() {

  const [report, setReport] = useState<Dashboard.ReportData>()
  const userInfo = useStore(state => state.userInfo)

  // 初始化折线图
  const [lineRef, lineChart] = useCharts()
  // 初始化饼图
  const [pieRef1, pieChart1] = useCharts()
  const [pieRef2, pieChart2] = useCharts()
  // 初始化折线图
  const [radarRef, radarChart] = useCharts()

  useEffect(() => {
    renderLineChart()
    renderPieChart1()
    renderPieChart2()
    renderRadarChart()
  }, [lineChart, pieChart1, pieChart2, radarChart])

  useEffect(() => {
    getReportData()
  }, [])

  // 加载折线图数据
  const renderLineChart = async() => {
    if(!lineChart) return
    const data = await api.getLineData()
    lineChart?.setOption({
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['订单量', '流水']
      },
      grid: {
        left: '5%',
        right: '15%',
        bottom: '10%'
      },
      xAxis: {
        data: data.label
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单量',
          type: 'line',
          data: data.order
        },
        {
          name: '流水',
          type: 'line',
          data: data.money
        }
      ]
    })
  }
  // 饼图城市分布
  const renderPieChart1 = async() => {
    if(!pieChart1) return
    const data = await api.getPieCityData()
    pieChart1?.setOption({
      title: {
        text: '司机城市分布',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '城市分布',
          type: 'pie',
          radius: '50%',
          data: data
        }
      ]
    })
  }
  // 饼图年龄分布
  const renderPieChart2 = async() => {
    if(!pieChart2) return
    const data = await api.getPieAgeData()
    pieChart2?.setOption({
      title: {
        text: '司机年龄分布',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '年龄分布',
          type: 'pie',
          radius: '50%',
          roseType: 'radius',
          data: data
        }
      ]
    })
  }
  // 加载雷达图
  const renderRadarChart = async() => {
    if(!radarChart) return
    const data = await api.getRadarData()
    radarChart?.setOption({
      // title: {
      //   text: '模型诊断',
      //   left: 'center'
      // },
      legend: {
        data: ['司机模型诊断']
      },
      radar: {
        indicator: data.indicator
      },
      series: [
        {
          name: '模型诊断',
          type: 'radar',
          data: data.data
        }
      ]
    })
  }

  // 刷新饼图
  const handleRefresh = () => {
    renderPieChart1()
    renderPieChart2()
  }

  const getReportData = async() => {
    const data = await api.getReportData()
    setReport(data)
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.userInfo}>
        <img className={styles.userImg} src={userInfo.userImg} />
        <Descriptions title="欢迎新同学，每天都要开心！">
          <Descriptions.Item label="用户ID">{userInfo.userId}</Descriptions.Item>
          <Descriptions.Item label="邮箱">{userInfo.userEmail}</Descriptions.Item>
          <Descriptions.Item label="状态">{formateState(userInfo.state)}</Descriptions.Item>
          <Descriptions.Item label="手机号">{userInfo.mobile}</Descriptions.Item>
          <Descriptions.Item label="岗位">{userInfo.job}</Descriptions.Item>
          <Descriptions.Item label="部门">{userInfo.deptName}</Descriptions.Item>
        </Descriptions>
      </div>
      <div className={styles.report}>
        <div className={styles.card}>
          <div className="title">司机数量</div>
          <div className={styles.data}>{formateNum(report?.driverCount)}个</div>
        </div>
        <div className={styles.card}>
          <div className="title">总流水</div>
          <div className={styles.data}>{formatMoney(report?.totalMoney)}元</div>
        </div>
        <div className={styles.card}>
          <div className="title">总订单</div>
          <div className={styles.data}>{formateNum(report?.orderCount)}单</div>
        </div>
        <div className={styles.card}>
          <div className="title">开通城市</div>
          <div className={styles.data}>{formateNum(report?.cityNum)}座</div>
        </div>
      </div>
      <div className={styles.chart}>
        <Card title="订单和流水走势图" extra={<Button type='primary' onClick={renderLineChart}>刷新</Button>}>
          <div ref={lineRef} className={styles.itemChart}></div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title="司机分布" extra={<Button type='primary' onClick={handleRefresh}>刷新</Button>}>
          <div className={styles.pieChart}>
            <div ref={pieRef1} className={styles.itemPie}></div>
            <div ref={pieRef2} className={styles.itemPie}></div>
          </div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title="模型诊断" extra={<Button type='primary' onClick={renderRadarChart}>刷新</Button>}>
          <div ref={radarRef} className={styles.itemChart}></div>
        </Card>
      </div>
    </div>
  )
}
