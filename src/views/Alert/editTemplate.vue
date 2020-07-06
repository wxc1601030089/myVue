<template>
    <el-dialog title="编辑表单"
  :visible.sync="visible">
      <el-divider content-position="left">删除选项</el-divider>
      <el-select v-model="Val" placeholder="请选择" multiple>
        <el-option
          v-for="item in rule"
          :key="item.field"
          :label="item.title"
          :value="item.field">
        </el-option>
      </el-select>
      <el-button type="danger">移除</el-button>
      <el-divider content-position="left">新增选项</el-divider>
      <el-form>
        <el-form-item>
          <el-select v-model="NewItem.Type" placeholder="请选择">
            <el-option
              v-for="item in items"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="NewItem.length" placeholder="输入长度/最大为24" style="width: 218px" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="NewItem.field" placeholder="输入选项名" style="width: 218px" clearable></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
</template>

<script>
    export default {
        name: "editTemplate",
      props:['rule'],
      data(){
          return{
            IsEdit:false,
            visible:false,
            option: {
              resetBtn: false,
              submitBtn: false
            },
            basic:{},
            Val:[],
            NewItem:{
              Type:'',
              length:'',
              field:'',
              value:'',
              props:{
              }
            },
            items:[
              {
                label:'下拉框',
                value:'select'
              },
              {
                label:'输入框',
                value:'input'
              },
              {
                label:'单选框',
                value:'radio'
              }
            ]
          }
      },
      methods:{
          init(){
            this.visible = true
          }
      }
    }
</script>

<style scoped>

</style>
