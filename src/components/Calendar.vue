<template>
  <div class="calendarContainer">
    <div class="handleButton">
      <div class="time">{{`${nowYear}年${nowMonth+1}月${date.getDate()}日`}}</div>
    </div>
    <ul class="days">
      <li v-for="(item, index) in weekArr" :key="index">
        {{item}}
      </li>
    </ul>
    <ul class="days">
      <li class="day" v-for="(item, index) in dayArr" :key="index">
        <div v-if="item !== ''">
          <span :class="{today: item + 1 === date.getDate()}">
            {{item + 1}}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { isLeapYear } from 'util'

  export default {
    data() {
      return {
        dayArr: [],
        nowYear: new Date().getFullYear(),
        nowMonth: new Date().getMonth(),
        defaultLen: 42,
        weekArr: ['一', '二', '三', '四', '五', '六', '七'],
        date: new Date()
      }
    },
    mounted() {
      this._renderCalendat(this.nowYear, this.nowMonth)
    },
    methods: {
      _renderCalendat(_year, _month) {
        let _daysInMonth = [31, isLeapYear(_year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        let _firstDayInMonth = new Date(_year, _month, 1)
        let _firstDayWeek = _firstDayInMonth.getDay()
        let _preArr = []
        if (_firstDayWeek !== 1) {
          let _dayArrs = new Array(parseInt(_firstDayWeek - 1))
          _preArr = _dayArrs.fill('', 0, _dayArrs.length) || []
        }
        let _days = _preArr.concat(Array.from(new Array(_daysInMonth[_month]).keys()))
        let _nextLen = this.defaultLen - _days.length
        let _nextMonthArr = new Array(parseInt(_nextLen))
        let _nextMonthArrCopy = _nextMonthArr.fill('', 0, _nextLen) || []
        this.dayArr = _days.concat(_nextMonthArrCopy)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .calendarContainer {
    width: 280px;

    .handleButton {
      text-align: center;
    }

    .days {
      display: flex;
      flex-wrap: wrap;

      li {
        flex: 0 0 14%;
        text-align: center;
        height: 40px;
        line-height: 40px;

        .today {
          display: block;
          background: rgba(255, 0, 0, 1);
          color: rgba(255, 255, 255, 1)
        }
      }
    }
  }
</style>
