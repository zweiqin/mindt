<template>
  <div class="middle">
    <div class="notes">
      <span>Meeting Notes</span>
    </div>
    <div class="notes-group">
      <div v-if="newArr.length == 0" :style="{ backgroundColor: 'white' }">
        <span>正在为您拼命加载中，请稍候哟......</span
        ><i class="bi bi-arrow-through-heart"></i>
      </div>
      <div class="today" v-for="item in newArr" :key="item.origin">
        <div @click="showIt(item)" class="today-num">
          <i class="bi bi-chevron-up" v-if="item.show"></i>
          <i class="bi bi-chevron-down" v-else></i>
          <span>{{ item.day }}</span>
        </div>
        <div v-if="item.show">
          <div
            class="today-con"
            :class="{ active: iArr.selected == true }"
            @click="slectIt(iArr)"
            v-for="iArr in item.arr"
            :key="iArr.id"
          >
            <div class="title">{{ iArr.title }}</div>
            <div class="dura">{{ iArr.dura }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      default: {},
      // {
      //   "2022-06-25": [{}, {}, {}],
      // },
    },
  },
  data() {
    return {
      dateArr: [
        // [{},{},{}]
        // [{},{},{}]
      ],
      newArr: [
        // {day,arr:[{id,title,dura},{},{}]},
        // {day,arr:[{id,title,dura},{},{}]},
        // {day,arr:[{id,title,dura},{},{}]}
      ],
    };
  },
  watch: {
    date: {
      handler(newVal) {
        // this.dateArr = this.toArr({ ...newVal });
        this.toArr({ ...this.date });
        this.changeDate(this.dateArr);
        // console.log(this.dateArr);
      },
      deep: true,
    },
  },
  mounted() {
    setTimeout(this.fun, 40000);
  },
  methods: {
    fun() {
      if (this.newArr.length == 0) {
        alert("已经过了四十秒啦，要不刷新一遍看看吧！");
      }
    },
    toArr(date) {
      // const dateArr = [];
      let i = 0;
      for (let k in date) {
        this.$set(this.dateArr, i, date[k]);
        i += 1;
        // dateArr[k] = date[k];
      }
      i = 0;
      // this.$set(this.dateArr, 0, dateArr);
      // console.log(this.dateArr);
      // return dateArr;
    },
    changeDate(dateArr) {
      const kname = Object.keys(this.date);
      // console.log(kname);
      // const newArr = [];
      for (let i = 0; i < dateArr.length; i++) {
        let dayName = this.showDay(kname[i]);
        this.$set(this.newArr, i, {
          origin: new Date(kname[i]).valueOf(),
          day: dayName,
          show: true,
          arr: [],
        });
        // newArr.push({
        //   day: kname[i],
        //   arr: [],
        // });
        for (let j = 0; j < dateArr[i].length; j++) {
          let duraTime = this.showDura(
            dateArr[i][j].create_time,
            dateArr[i][j].duration
          );
          this.$set(this.newArr[i].arr, j, {
            id: dateArr[i][j].id,
            title: dateArr[i][j].title,
            dura: duraTime,
            selected: false,
          });
          // newArr[i].arr.push({
          //   id: dateArr[i][j].id,
          //   title: dateArr[i][j].title,
          //   dura: dateArr[i][j].dura,
          // });
        }
      }
      function compare(prop) {
        return function (a, b) {
          var value1 = a[prop];
          var value2 = b[prop];
          return new Date(value1) - new Date(value2);
        };
      }
      this.newArr.sort(compare("origin"));
      // console.log(this.newArr);
    },
    showDay(time) {
      var date = new Date(time);
      // console.log(date.getFullYear());//返回当前日期的年
      // console.log(date.getMonth())+1;//返回的月份小一个月！   记得月份+1！！！
      // console.log(date.getDate());
      // console.log(date.getDay());//返回的是周几！   周一返回的是 1  周六返回的是 6   周日返回的是0！！
      // var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var dates = date.getDate();
      // var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
      var arr = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      var arrm = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      var day = date.getDay();
      return arr[day] + ", " + arrm[month - 1] + " " + dates;
    },
    showDura(startString, durationNum) {
      var startDate = new Date(startString).valueOf();
      // console.log(startDate);
      var duration_num = parseInt(durationNum) * 1000;
      var endDate = parseInt(startDate) + duration_num;
      var endString = new Date(endDate).toString();
      var starthour = parseInt(startString.substr(11, 2));
      var startmin = startString.substr(13, 3);
      var endhour = parseInt(endString.substr(16, 2));
      var endmin = endString.substr(18, 3);
      if (starthour >= 12) {
        starthour -= 12;
        var upone = "pm";
      } else {
        var upone = "am";
      }
      if (endhour >= 12) {
        endhour -= 12;
        var downone = "pm";
      } else {
        var downone = "am";
      }
      return (
        starthour +
        startmin +
        " " +
        upone +
        " - " +
        endhour +
        endmin +
        " " +
        downone +
        ""
      );
    },
    slectIt(iArr) {
      iArr.selected = !iArr.selected;
    },
    showIt(item) {
      item.show = !item.show;
    },
  },
};
</script>

<style scoped lang="less">
.middle {
  position: absolute;
  width: 328px;
  height: 900px;
  left: 56px;
  top: 0px;
  background: #1b1e28;
  .notes {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    position: absolute;
    width: 127px;
    height: 28px;
    left: 16px;
    top: 24px;
    span {
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      color: #ffffff;
      flex: none;
      flex-grow: 0;
    }
  }
  .notes-group {
    display: flex;
    // overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px;
    position: absolute;
    width: 306px;
    height: 824px;
    left: calc(50% - 296px / 2);
    top: 76px;
    .today {
      margin-bottom: 16px;
      .today-num {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        width: 296px;
        height: 30px;
        // background-color: green;
        flex: none;
        order: 0;
        flex-grow: 0;
        i {
          margin-left: 8px;
          color: #9da3ab;
          line-height: 30px;
        }
        span {
          margin-left: 8px;
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 30px;
          color: #ffffff;
        }
      }
      .today-con {
        margin-top: 12px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 12px;
        gap: 4px;
        width: 296px;
        // height: 62px;
        border: 1px solid #41454b;
        border-radius: 8px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
        .title {
          width: 272px;
          // height: 24px;
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #ffffff;
          flex: none;
          order: 0;
          flex-grow: 1;
        }
        .dura {
          width: 120px;
          height: 18px;
          font-family: "Noto Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          display: flex;
          align-items: center;
          color: #9da3ab;
          flex: none;
          order: 1;
          flex-grow: 0;
        }
      }
      .active {
        background: #41454b;
      }
      .today-con:hover {
        background: #282b32;
      }
      & > div:nth-child(2) {
        margin-top: 4px;
      }
    }
  }
  // .notes-group::-webkit-scrollbar {
  //   display: none;
  // }
  .notes-group::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 5px;
    margin-right: -10px;
    scrollbar-arrow-color: rgb(88, 82, 82);
  }
  .notes-group::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 1px;
    -webkit-box-shadow: inset 0 0 5px rgba(176, 176, 176, 0.2);
    background: rgba(180, 177, 177, 0.2);
    scrollbar-arrow-color: rgb(159, 152, 152);
  }
  .notes-group::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px transparent;
    border-radius: 0;
    background: transparent;
  }
}
</style>