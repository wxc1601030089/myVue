<template>
  <div class="music-content">
    <div class="info">
      <MusicImg></MusicImg>
      <Lyric class="lyrics"></Lyric>
    </div>
    <div>
      <player></player>
    </div>
  </div>
</template>

<script>
  import MusicImg from "./Image";
  import Lyric from "./lyric";
  import Player from "./player";
    export default {
        name: "OutPut",
      components: {Player, Lyric, MusicImg},
      data(){
          return{
            src:'https://p3fx.kgimg.com/stdmusic/20150720/20150720162823338587.jpg'
          }
      }
    }
</script>

<style scoped>
.music-content{
  display: flex;
  flex-direction: column;
}
  .lyrics{
    margin-top: 10%;
    margin-left: 20%;
  }
  .info{
    display: flex;
    flex-direction: row;
  }
</style>
