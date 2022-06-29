<template>
  <div class="left">
    <div class="logo">
      <div class="logo-in">
        <div class="pink"></div>
        <div class="purple"></div>
        <div class="blue"></div>
        <div class="yellow"></div>
      </div>
    </div>
    <div class="menus">
      <div class="public"></div>
      <div class="sideBar"></div>
      <div class="sideBar"></div>
      <div class="sideBar"></div>
      <div class="sideBar"></div>
      <div class="sideBar"></div>
    </div>
    <div class="down">
      <div class="help"></div>
      <div class="help help2"></div>
      <div class="help"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.left {
  position: absolute;
  width: 56px;
  height: 900px;
  left: 0px;
  top: 0px;
  background: #282b32;
  .logo {
    position: absolute;
    width: 24px;
    height: 24px;
    left: calc(50% - 24px / 2);
    top: 24px;
    .logo-in {
      position: absolute;
      width: 24px;
      height: 22.13px;
      left: 0px;
      top: 1px;
      // background: green;
      .pink {
        position: absolute;
        width: 7.82px;
        height: 7.82px;
        left: 6.01%;
        // right: 67.39%;
        // top: 27.22%;
        bottom: 57.18%;
        z-index: 2;
        background: #f73c9a;
        transform: rotate(-45deg);
        border-radius: 1px 1px 0 0;
      }
      .purple {
        position: absolute;
        width: 7.82px;
        height: 7.82px;
        left: 28.91%;
        // right: 21.29%;
        // top: 27.22%;
        bottom: 31.67%;
        z-index: 2;
        background: #7208b7;
        transform: rotate(45deg);
        border-radius: 0 1px 0 0;
      }
      .blue {
        position: absolute;
        width: 7.82px;
        height: 7.82px;
        left: 6.25%;
        // right: 44.35%;
        // top: 50.27%;
        bottom: 7.23%;
        z-index: 2;
        background: #04c9fb;
        transform: rotate(45deg);
        border-radius: 0 0 1px 1px;
      }
      .yellow {
        position: absolute;
        width: 13.06px;
        height: 13.06px;
        left: 33.05%;
        // right: 22.54%;
        // top: 50.27%;
        bottom: 20.32%;
        z-index: 1;
        background: #fec80e;
        transform: rotate(-45deg);
        border-radius: 1px;
      }
    }
  }
  .menus {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    // gap: 8px;
    position: absolute;
    width: 56px;
    height: 280px;
    left: 0px;
    top: 80px;
    .public {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 11px;
      width: 24px;
      height: 24px;
      background: #9f2aec;
      border-radius: 6px;
      flex: none;
      flex-grow: 0;
    }
    .sideBar {
      // position: absolute;
      width: 20px;
      height: 20px;
      // left: 10px;
      // top: 10px;
      background: #575d64;
      border-radius: 4px;
    }
  }
  .down {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 18px;
    // gap: 8px;
    position: absolute;
    width: 56px;
    height: 136px;
    left: 0px;
    bottom: 16px;
    .help {
      // position: absolute;
      width: 20px;
      height: 20px;
      // left: 10px;
      // top: 10px;
      background: #575d64;
      border-radius: 4px;
    }
    .help2 {
      margin: 28px 0;
    }
  }
}
</style>