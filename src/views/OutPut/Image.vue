<template>
    <div class="image-area">
      <div>
        <el-image style="height: 260px;width: 260px;margin-left: 45%;margin-top: 50px;border-radius: 50%" :src="src" class="song-img">
        </el-image>
      </div>
      <div class="download-music">
        <el-button round style="border:1px solid white;background-color: black;color: white">下载此首歌曲</el-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Music-Img",
      data(){
        return{
          src:'https://p3fx.kgimg.com/stdmusic/20200312/20200312212950781807.jpg'
        }
      }
    }
</script>

<style scoped>
.image-area{
  display: flex;
  flex-direction: column;
}
  .download-music{
    margin-left: 225px;
    margin-top: 30px;
  }
  .song-img{
    animation: 15s linear 0s normal none infinite rotate;
    animation-play-state: running;
  }
</style>
