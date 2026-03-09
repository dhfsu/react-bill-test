import { NavBar, DatePicker } from "antd-mobile";
import './index.scss'
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import _ from "lodash";
import dayjs from "dayjs";

const Month = () => {
    //获取redux中存储的账单数据
    const billList = useSelector(state => state.bill.billList)
    const monthGroup = useMemo(() => {
        return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'))
    }, [billList])
    console.log(monthGroup);
    //根据账单数据生成日历数据
    //控制弹框打开和关闭
    const [dataVisible, setDataVisible] = useState(false)
    //时间显示
    const [currentDate, setCurrentDate] = useState(dayjs(new Date()).format('YYYY-MM'))
    const [currentMonthList, setcurrentMonthList] = useState([])
    const monthResult = useMemo(() => {
        const pay = currentMonthList.filter(item => item.type === 'pay').reduce((acc, cur) => acc + cur.money, 0)
        const income = currentMonthList.filter(item => item.type === 'income').reduce((acc, cur) => acc + cur.money, 0)

        return { pay, income, total: income + pay }
    },[currentMonthList])

    useEffect(() => {
        const newDate = dayjs().format('YYYY-MM')
        //边界值控制
        if(monthGroup[newDate])
        {setcurrentMonthList(monthGroup[newDate]) }
    },[monthGroup])
    //确认回调
    const onConfirm = (data) => {
        setDataVisible(false)
        const formatDate = dayjs(data).format('YYYY-MM')
        setcurrentMonthList(monthGroup[formatDate])
        setCurrentDate(formatDate)
    }
    return (
        <div className="monthlyBill">
            <NavBar className="nav" backArrow={false}>
                月度收支
            </NavBar>
            <div className="content">
                <div className="header">
                    {/* 时间切换区域 */}
                    <div className="date" onClick={() => { setDataVisible(true) }}>
                        <span className="text">
                            {currentDate}月账单
                        </span>
                        {/* 思路：根据当前弹框打开的状态控制expand类名是否存在 */}
                        <span className={classNames('arrow', dataVisible && 'expand')}></span>
                    </div>
                    {/* 统计区域 */}
                    <div className='twoLineOverview'>
                        <div className="item">
                            <span className="money">{monthResult.pay.toFixed(2)}</span>
                            <span className="type">支出</span>
                        </div>
                        <div className="item">
                            <span className="money">{monthResult.income.toFixed(2)}</span>
                            <span className="type">收入</span>
                        </div>
                        <div className="item">
                            <span className="money">{monthResult.total.toFixed(2)}</span>
                            <span className="type">结余</span>
                        </div>
                    </div>
                    {/* 时间选择器 */}
                    <DatePicker
                        className="kaDate"
                        title="记账日期"
                        precision="month"
                        visible={dataVisible}
                        onCancel={() => { setDataVisible(false) }}
                        onConfirm={onConfirm}
                        onClose={() => { setDataVisible(false) }}
                        max={new Date()}
                    />
                </div>
                {/* 单日列表统计 */}
                {/* {
                    dayGroup.keys.map(key => {
                        return <DailyBill key={key} date={key} billList={dayGroup.groupData[key]} />
                    })
                } */}
            </div>
        </div >
    )
}

export default Month;