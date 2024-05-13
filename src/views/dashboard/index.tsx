import { Button, Card, Descriptions } from 'antd';
import styles from './index.module.less';
import * as echarts from 'echarts';
import { useEffect } from 'react';
import { useStore } from '@/store';
import { formateState } from '@/utils';

export default function DashBoard() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const userInfo = useStore(state => state.userInfo)


  useEffect(() => {
    const lineChartDom = document.getElementById('lineChart');
    const chartInstance = echarts.init(lineChartDom as HTMLDivElement);
    chartInstance.setOption({
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
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单量',
          type: 'line',
          data: [100,200,300,400,500,600,700,800,900,1000,1100,1200]
        },
        {
          name: '流水',
          type: 'line',
          data: [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000]
        }
      ]
    })

    const pieChartCityDom = document.getElementById('pieChartCity');
    const pieChartCityInstance = echarts.init(pieChartCityDom as HTMLDivElement);
    pieChartCityInstance.setOption({
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
          data: [
            {value: 100, name: '北京'},
            {value: 200, name: '上海'},
            {value: 300, name: '广州'},
            {value: 400, name: '深圳'},
            {value: 500, name: '杭州'}
          ]
        }
      ]
    })

    const pieChartAgeDom = document.getElementById('pieChartAge');
    const pieChartAgeInstance = echarts.init(pieChartAgeDom as HTMLDivElement);
    pieChartAgeInstance.setOption({
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
          data: [
            {value: 30, name: '北京'},
            {value: 40, name: '上海'},
            {value: 35, name: '广州'},
            {value: 43, name: '深圳'},
            {value: 50, name: '杭州'}
          ]
        }
      ]
    })

    const radarChartDom = document.getElementById('radarChart');
    const radarChartInstance = echarts.init(radarChartDom as HTMLDivElement);
    radarChartInstance.setOption({
      // title: {
      //   text: '模型诊断',
      //   left: 'center'
      // },
      legend: {
        data: ['司机模型诊断']
      },
      radar: {
        indicator: [
          {name: '服务态度', max: 10},
          {name: '在线时长', max: 600},
          {name: '接单率', max: 100},
          {name: '评分', max: 5},
          {name: '关注度', max: 10000}
        ]
      },
      series: [
        {
          name: '模型诊断',
          type: 'radar',
          data: [
            {
              value: [8, 300, 80, 4, 9000],
              name: '司机模型诊断'
            }
          ]
        }
      ]
    })
  }, [])

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
          <div className={styles.data}>100个</div>
        </div>
        <div className={styles.card}>
          <div className="title">总流水</div>
          <div className={styles.data}>100000元</div>
        </div>
        <div className={styles.card}>
          <div className="title">总订单</div>
          <div className={styles.data}>2000单</div>
        </div>
        <div className={styles.card}>
          <div className="title">开通城市</div>
          <div className={styles.data}>50座</div>
        </div>
      </div>
      <div className={styles.chart}>
        <Card title="订单和流水走势图" extra={<Button type='primary'>刷新</Button>}>
          <div id="lineChart" className={styles.itemChart}></div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title="司机分布" extra={<Button type='primary'>刷新</Button>}>
          <div className={styles.pieChart}>
            <div id="pieChartCity" className={styles.itemPie}></div>
            <div id="pieChartAge" className={styles.itemPie}></div>
          </div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title="模型诊断" extra={<Button type='primary'>刷新</Button>}>
          <div id="radarChart" className={styles.itemChart}></div>
        </Card>
      </div>
    </div>
  )
}
