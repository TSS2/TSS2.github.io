
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '听妈妈的话',
        artist: '周杰伦',
        url: 'http://www.ytmp3.cn/down/51577.mp3',
        cover: 'https://pic.xiami.net/images/artistlogo/36/15162027033536.jpg',
      },
      {
        name: "边走边唱",
        artist: "黄磊",
        url: "https://link.hhtjim.com/xiami/Y7Mdd8ad.mp3",
        cover: "https://pic.xiami.net/images/album/img84/384/16901426438888.jpeg",
      },
      {
        name: "年华似水",
        artist: "黄磊",
        url: "https://link.hhtjim.com/xiami/4Zw035aea.mp3",
        cover: "https://pic.xiami.net/images/album/img84/384/324451391358721.jpg",
      },
      {
        name: "春泥",
        artist: "张芸京",
        url: "https://link.hhtjim.com/163/328002.mp3",
        cover: "http://p2.music.126.net/jfehj7X6x3lx2gH1Oglqyw==/3412884119989259.jpg",
      },
      {
        name: "起风了",
        artist: "买辣椒也用券",
        url: "https://link.hhtjim.com/163/1330348068.mp3",
        cover: "http://p2.music.126.net/Tggk3YY3rzD9R7pbcaFNqQ==/109951163425586926.jpg",
      }
    ]
});