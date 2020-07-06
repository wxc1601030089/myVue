
<style scoped>
@import "Main.css";
</style>

<template>
  <div class="Main">
    <div class="subMenu">
      <el-row>
        <el-col :span="18">
          <el-menu
            router
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#fff">
            <el-menu-item index="/OutPut">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>组合</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/Alert">
                  <i class="el-icon-menu"></i>
                  <span slot="title">告警</span>
                </el-menu-item>
                <el-menu-item index="/InDoor">
                  <i class="el-icon-menu"></i>
                  <span slot="title">室内</span>
                </el-menu-item>
                <el-menu-item index="/OutDoor">
                  <i class="el-icon-menu"></i>
                  <span slot="title">室外</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/OutPut">
              <i class="el-icon-menu"></i>
              <span slot="title">外出</span>
            </el-menu-item>
            <el-menu-item index="/IO">
              <i class="el-icon-document"></i>
              <span slot="title">出入</span>
            </el-menu-item>
            <el-menu-item index="/Maintain">
              <i class="el-icon-setting"></i>
              <span slot="title">保养</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Main",
      data(){
        return{

        }
      },
      methods:{

      }
    }
</script>

