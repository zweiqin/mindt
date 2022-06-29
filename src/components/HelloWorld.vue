<template>
  <div class="hello">
    <div class="all">
      <div class="lmside">
        <Left></Left>
        <Middle :date="orderList"></Middle>
      </div>
      <div class="rside">
        <Right></Right>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
import Left from "@/components/Left.vue";
import Middle from "@/components/Middle.vue";
import Right from "@/components/Right.vue";

export default {
  name: "HelloWorld",
  components: {
    Left,
    Middle,
    Right,
  },
  data() {
    return {
      list: [],
      orderList: [
        // "2022-06-25": [{}, {}, {}],
      ],
    };
  },
  created() {},
  async mounted() {
    let { data: data1 } = await this.$http.get("/meeting-a/list", {
      params: { page_now: 1, page_size: 3000 },
    });
    let { data: data2 } = await this.$http.get("/meeting-b/list", {
      params: { page_now: 1, page_size: 3000 },
    });
    const deText1 = this.decrypt(data1);
    const deText2 = this.decrypt(data2);
    if (deText1.data.list.length > 0 && deText2.data.list.length > 0) {
      const listall = this.merge(deText1, deText2);
      this.list = listall;
    } else if (deText1.data.list.length > 0) {
      this.list = deText1.data.list;
    } else if (deText2.data.list.length > 0) {
      this.list = deText2.data.list;
    }
    this.orderList = this.order(this.list);
  },
  methods: {
    decrypt(data) {
      var key = CryptoJS.enc.Utf8.parse("0000000000000000");
      var decrypt = CryptoJS.AES.decrypt(data, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      });
      return JSON.parse(CryptoJS.enc.Utf8.stringify(decrypt).toString());
    },
    merge(deText1, deText2) {
      const list1 = deText1.data.list;
      const list2 = deText2.data.list;
      return list1.concat(list2);
    },
    order(list) {
      const orderList = {};
      list.forEach((item) => {
        if (item) {
          let time = item.create_time.substr(0, 10);
          // console.log(time);
          if (!orderList.hasOwnProperty(time)) {
            orderList[time] = [];
            orderList[time].push(item);
          } else {
            orderList[time].push(item);
          }
        }
      });
      //align：排序方式，"positive"正序，"inverted"倒序。
      function compare(prop, align) {
        return function (a, b) {
          var value1 = a[prop];
          var value2 = b[prop];
          if (align == "positive") {
            //正序
            return new Date(value1) - new Date(value2);
          } else if (align == "inverted") {
            //倒序
            return new Date(value2) - new Date(value1);
          }
        };
      }
      for (let k in orderList) {
        orderList[k].sort(compare("create_time", "positive"));
      }
      return orderList;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.all {
  position: relative;
  width: 1440px;
  height: 900px;
  margin: 0 auto;
  background: #f6f7f9;
  border-radius: 0px;
  .lmside {
    position: absolute;
    width: 384px;
    height: 900px;
    left: 0px;
    top: 0px;
    // background: #F6F7F9;
  }
  .rside {
    position: absolute;
    width: 1056px;
    height: 900px;
    left: 384px;
    top: 0px;
    // background: #F6F7F9;
  }
}
</style>
