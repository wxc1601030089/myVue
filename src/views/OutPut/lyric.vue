<template>
    <div>
      <div>
        <span style="color: white;margin: 0 auto;font-size: 24px;font-style: normal">夜航星</span>
        <i class="iconfont icon-MV" style="color: white" onmouseover="this.style.color='#57EDED';this.style.cursor='pointer'" onmouseleave="this.style.color='#fff'" @click="go"></i>
      </div>
      <div class="songinfo">
        <div>
          <span style="color: #ffffff">
          专辑：
          </span>
          <a target="_blank" href="http://www.baidu.com" class="info-link">
            我的三体之章北海传 原声音乐集
          </a>
        </div>
        <div style="margin-left: 50px">
          <span style="color: #ffffff">
          歌手：
          </span>
          <a target="_blank" href="http://www.baidu.com" class="info-link">
            不才
          </a>
        </div>
      </div>
      <div class="song-lyric">
        <p class="lyric">不才 - 夜航星</p>
        <p class="lyric">执念的鱼</p>
        <p class="lyric">提着灯闯过远洋的甄选</p>
        <p class="lyric">继续下潜</p>
        <p class="lyric">无需誓言</p>
        <p class="lyric">我的心像自沉的旧母舰</p>
        <p class="lyric">没入深渊</p>
        <p class="lyric">永别啊</p>
        <p class="lyric">我曾凝望</p>
        <p class="lyric">曾是航向的日出</p>
        <p class="lyric">末路残烛</p>
        <p class="lyric">容我吹熄 藏起火种</p>
        <p class="lyric">向宇宙远渡</p>
        <p class="lyric">点燃星</p>
        <p class="lyric">亲手点燃目光尽头的准星</p>
        <p class="lyric">让夜降临</p>
        <p class="lyric">让陨石</p>
        <p class="lyric">重启如萤火虫闪烁的飞行</p>
        <p class="lyric">破灭魂灵</p>
        <p class="lyric">点燃星</p>
        <p class="lyric">亲手点燃黑暗森林的火星</p>
        <p class="lyric">蒙昧初醒</p>
        <p class="lyric">而我却</p>
        <p class="lyric">轻声告别这新生的黎明</p>
        <p class="lyric">执念的鱼</p>
        <p class="lyric">孤独着闯过自然的甄选</p>
        <p class="lyric">文明岸边</p>
        <p class="lyric">无需誓言</p>
        <p class="lyric">我的心像重启的旧母舰</p>
        <p class="lyric">去星云巅</p>
        <p class="lyric">永别啊</p>
        <p class="lyric">末路残烛</p>
        <p class="lyric">容我吹熄 藏起火种</p>
        <p class="lyric">向宇宙远渡</p>
        <p class="lyric">我是星</p>
        <p class="lyric">利剑开刃寒光锋芒的银星</p>
        <p class="lyric">绝不消隐</p>
        <p class="lyric">不回顾</p>
        <p class="lyric">绝意前进</p>
        <p class="lyric">我是星</p>
        <p class="lyric">我愿投身前途未卜的群星</p>
        <p class="lyric">为梦长明</p>
        <p class="lyric">让希望</p>
        <p class="lyric">做我无声永存的墓志铭</p>
        <p class="lyric">我是星</p>
        <p class="lyric">利剑开刃寒光锋芒的银星</p>
        <p class="lyric">绝不消隐</p>
        <p class="lyric">不回顾</p>
        <p class="lyric">永难再折返的故园的光阴</p>
        <p class="lyric">绝意前进</p>
        <p class="lyric">点燃星</p>
        <p class="lyric">亲手点燃黑暗森林的火星</p>
        <p class="lyric">蒙昧初醒</p>
        <p class="lyric">而我却</p>
        <p class="lyric">轻声告别这新生的黎明</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "lyric",
      data(){
          return{

          }
      },
      methods:{
          go(){
            console.log(111)
          }
      }
    }
</script>

<style scoped>
.songinfo{
  display: flex;
  margin-top: 20px;
}
  .lyric{
    color: white;
  }
  .song-lyric{
    height: 500px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .song-lyric::-webkit-scrollbar{
  display:none;
  }
  .info-link{
    color: white;
    text-decoration: none;
  }
  .info-link:hover{
    text-decoration: underline;
  }
</style>
