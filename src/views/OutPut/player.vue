<template>
    <div class="player">
      <div class="control-left">
        <i class="iconfont icon-shangyishou" style="color: white;font-size: 36px" onmouseover="this.style.cursor='pointer'" @click="previousong"></i>
        <i :class="statu" style="color: white;font-size: 58px;margin-left: 10px" onmouseover="this.style.cursor='pointer'" @click="play"></i>
        <i class="iconfont icon-xiayishou" style="color: white;font-size: 36px;margin-left: 10px" onmouseover="this.style.cursor='pointer'" @click="nextsong"></i>
      </div>
      <div style="margin-left: 50px">
        <el-image :src="imgUrl" style="width: 60px;height: 60px" @click="init"></el-image>
      </div>
      <div style="margin-left: 20px;margin-top: 10px">
        <div class="song-info">
          <div>
            <span style="color: #C0C6C7">{{this.name}}</span>
          </div>
          <div style="margin-left: 200px">
            <span style="color: #C0C6C7">{{this.nowTime + " /"}}</span>
            <span style="color: #C0C6C7">{{this.endTime}}</span>
          </div>
        </div>
        <div class="progress" style="margin-top: 15px">
          <el-slider v-model="mp3width" @change="changeTime" :show-tooltip="false"></el-slider>
          <audio :src="mp3Url" id="mp3"></audio>
        </div>
      </div>
      <div class="control-right">
        <i class="iconfont icon-yinliang" style="color: white;font-size: 20px"></i>
        <i class="iconfont icon-xunhuan" style="color: white;font-size: 16px;margin-left: 20px"></i>
        <i class="iconfont icon-xiazai" style="color: white;font-size: 20px;margin-left: 20px"></i>
        <i class="iconfont icon-fenxiang" style="color: white;font-size: 16px;margin-left: 20px"></i>
        <i class="iconfont icon-bofangliebiao" style="color: white;font-size: 16px;margin-left: 45px">1</i>
      </div>
    </div>
</template>

<script>
    export default {
        name: "player",
      data(){
          return{
            imgUrl:'https://p3fx.kgimg.com/stdmusic/20150804/20150804150846386197.jpg',
            imgArray:['https://p3fx.kgimg.com/stdmusic/20150804/20150804150846386197.jpg','https://p3fx.kgimg.com/stdmusic/20200414/20200414214211536673.jpg','https://p3fx.kgimg.com/stdmusic/20200312/20200312212950781807.jpg'],
            mp3Url:"static/play date.mp3",
            Urlarray:["play date","attack音D","夜航星"],
            durationArray:[192,284,303],
            statu:'iconfont icon-bofang',
            mp3width:0,
            nowTime:'',
            endTime:'',
            name:'play date',
            index:0,
            duration:0
          }
      },
      mounted() {
        this.init()
      }
      ,
      methods:{
        init(){
          this.duration = this.durationArray[this.index]
          this.LoadProgress()
        },
        play(){
          const mp3 = document.getElementById('mp3');
          if(this.statu === 'iconfont icon-zanting'){
            this.statu = 'iconfont icon-bofang'
            mp3.pause()
          } else {
            this.statu = 'iconfont icon-zanting'
            mp3.play()
          }
        },
        LoadProgress(){
            const mp3 = document.getElementById('mp3');
            let nm = Math.floor((this.duration / 60 % 60))
            if(nm < 10) {
              nm = '0'+nm
            }
            let ns = Math.floor((this.duration % 60))
            if(ns < 10) {
              ns = '0'+ns
            }
            this.endTime =  nm + ':' + ns
            const timer = setInterval(() => {
              const numbers = mp3.currentTime / this.duration
              let perNumber = (numbers * 100).toFixed(2)
              if (perNumber >= 100) {
                clearInterval(timer)
                this.nextsong()
              }
              var m = Math.floor((mp3.currentTime / 60 % 60))
              if(m < 10) {
                m = '0'+m
              }
              var s = Math.floor((mp3.currentTime % 60))
              if(s < 10) {
                s = '0'+s
              }
              this.nowTime = m + ':' + s
              this.mp3width = parseFloat(perNumber)
            }, 1000)
        },
        changeTime(val){
          const mp3 = document.getElementById('mp3');
          var percent = val / 100.00
          mp3.currentTime = percent * this.duration
        },
        nextsong(){
          if(this.index == 2){
            this.index = 0
          } else {
            this.index += 1
          }
          this.mp3width = 0
          this.changesong()
        },
        previousong(){
          if(this.index == 0) {
            this.index = 2
          } else {
            this.index -= 1
          }
          this.mp3width = 0
          this.changesong()
        },
        changesong(){
          this.mp3Url = 'static/'+this.Urlarray[this.index]+'.mp3'
          this.name = this.Urlarray[this.index]
          this.nowTime = '00:00'
          this.duration = this.durationArray[this.index]
          this.statu = 'iconfont icon-bofang'
          this.imgUrl = this.imgArray[this.index]
          this.$nextTick(()=>{
            this.LoadProgress()
          })
        }
      }
    }
</script>

<style scoped>
.player{
  display: flex;
  padding: 15px;
}
  .control-left{
    margin-left:100px;
    display: flex;
    align-items: center
  }
  .song-info{
    display: flex;
  }
  .control-right{
    display: flex;
    align-items: center;
    margin-left: 50px;
  }

</style>
