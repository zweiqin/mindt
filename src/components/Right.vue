<template>
  <div class="right">
    <div class="group">
      <div class="frame">
        <div class="frame-one"></div>
        <div class="frame-two">
          <div class="meeting">
            <div class="avatar"></div>
          </div>
          <div class="default"></div>
          <div class="primary"></div>
        </div>
      </div>
      <div class="small"></div>
      <div class="min"></div>
      <div class="big"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.right {
  position: absolute;
  width: 1056px;
  height: 900px;
  left: 0px;
  top: 0px;
  .group {
    position: absolute;
    width: 700px;
    height: 360px;
    left: 180px;
    top: 24px;
    .frame {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0px;
      gap: 42px;
      position: absolute;
      width: 700px;
      height: 32px;
      left: 0px;
      top: 0px;
      .frame-one {
        width: 420px;
        height: 24px;
        background: #eaedf0;
        border-radius: 4px;
        flex: none;
        order: 0;
        flex-grow: 0;
      }
      .frame-two {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding: 0px;
        gap: 8px;
        width: 238px;
        height: 32px;
        flex: none;
        order: 1;
        flex-grow: 0;
        .meeting {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 0px;
          gap: 2px;
          width: 24px;
          height: 24px;
          flex: none;
          order: 0;
          flex-grow: 0;
          .avatar {
            width: 24px;
            height: 24px;
            background: #eaedf0;
            // background: red;
            border-radius: 80px;
            flex: none;
            order: 0;
            flex-grow: 0;
          }
        }
        .default {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 5px 8px;
          gap: 8px;
          width: 72px;
          height: 32px;
          background: #eaedf0;
          border-radius: 8px;
          flex: none;
          order: 1;
          flex-grow: 0;
        }
        .primary {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 5px 8px;
          gap: 8px;
          width: 107px;
          height: 32px;
          background: #eaedf0;
          border-radius: 8px;
          flex: none;
          order: 2;
          flex-grow: 0;
        }
      }
    }
    .small {
      position: absolute;
      width: 218.42px;
      height: 24px;
      left: 0px;
      top: 32px;
      background: #eaedf0;
      border-radius: 4px;
    }
    .min {
      position: absolute;
      width: 56.14px;
      height: 24px;
      left: 0px;
      top: 80px;
      background: #eaedf0;
      border-radius: 4px;
    }
    .big {
      position: absolute;
      width: 700px;
      height: 240px;
      left: 0px;
      top: 120px;
      background: #eaedf0;
      border-radius: 8px;
    }
  }
}
</style>