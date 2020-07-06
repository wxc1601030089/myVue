<template>
  <div class = "Alert">
    <el-form style="">
      <el-form-item>
        <span>检查（勘验）时间：</span>
        <input type="text" class="write" placeholder="2020"></input>
        <span>年</span>
        <input type="text" class="write" placeholder=" 7" style="width: 15px"></input>
        <span>月</span>
        <input type="text" class="write" placeholder=" 2" style="width: 15px"></input>
        <span>日</span>
        <input type="text" class="write" placeholder="11" style="width: 15px"></input>
        <span>时</span>
        <input type="text" class="write" placeholder="25" style="width: 15px"></input>
        <span>分至</span>
        <input type="text" class="write" placeholder=" 2" style="width: 15px"></input>
        <span>日</span>
        <input type="text" class="write" placeholder="11" style="width: 15px"></input>
        <span>时</span>
        <input type="text" class="write" placeholder="30" style="width: 15px"></input>
        <span>分</span>
      </el-form-item>
      <el-form-item>
        <span>检查（勘验）地点：</span>
        <input type="text" class="write" placeholder="详细地址（店名）（有证的）/致谢详细地址（无营业执照及公司的）" style="width: 410px;"></input>
      </el-form-item>
      <el-form-item>
        <span>被检查（勘验）人名称：</span>
        <input type="text" class="write" placeholder="公司名称（公司的才填写）" style="width: 382px;"></input>
      </el-form-item>
      <el-form-item>
        <span>法定代表人（负责人）：</span>
        <input type="text" class="write" placeholder="公司法人（公司的才填写）" style="width: 170px"></input>
        <span>被检查（勘验）人关系：</span>
        <input type="text" class="write" placeholder="有（无）证的人名" style="width: 110px"></input>
        <span>性别：</span>
        <input type="text" class="write" placeholder="   *"></input>
      </el-form-item>
      <el-form-item>
        <span>证件类型及号码：</span>
        <input type="text" class="write" placeholder="个体的写身份证及号码/公司的写营业执照及统一社会信用代码" style="width: 423px;"></input>
      </el-form-item>
      <el-form-item>
        <span>住址：</span>
        <input type="text" class="write" placeholder="个体的写身份证/公司的写营业执照上的地址（现场无法提供的写待查）" style="width: 493px;"></input>
      </el-form-item>
      <el-form-item>
        <span>联系电话：</span>
        <input type="text" class="write" placeholder="（现场无法提供的写待查）" style="width: 160px;"></input>
        <span>烟草专卖许可证号码：</span>
        <input type="text" class="write" placeholder="  **********" style="width: 153px;"></input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "Alert",
      data(){
        return {

        }
      },
      methods:{

      }
    }
</script>

<style scoped>
  .write {
    outline: none;
    width: 30px;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
  }
  .el-form-item{
    margin-bottom: 0px;
  }
</style>
