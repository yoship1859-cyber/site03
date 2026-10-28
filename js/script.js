 // ↓始動プログラム{}の中に命令を書く
$(function () {
 
  $('.btn').click(function () {
    //class="btn"を付けた要素をクリックしたら{}の中の指示が発動
    $(this).toggleClass('active');
    //class="btn"付けた要素ををクリックするたびにclass='active'を付与、または削除
    $('.menu').toggleClass('active');
    //.menuに対してclass='active'を付与、または削除
    const isOpen = $(this).hasClass('active');
    $(this).attr({
      'aria-expanded': isOpen,
      'aria-label': isOpen ? 'メニューを閉じる' : 'メニューを開く'
    });
    // スクリーンリーダー向けに開閉状態を伝える
  });
  // toggleClass→クラスを付けたり外したりする。このサンプルの場合、class="btn"を付けた要素をクリックするたびに、
  // cssに書かれている.activeのスタイルを付けたり外したりしてボタンの開閉をしている

  $('.link').click(function () {
    $('.btn').removeClass('active').attr({ 'aria-expanded': false, 'aria-label': 'メニューを開く' });
    $('.menu').removeClass('active');
  });
  // removeClass→クラスを外す。このサンプルの場合.linkというクラス名を付けた要素（メニュー内のリンク）をクリックしたときに
  // .btnと.menuから.activeを外してメニューを閉じる

});
// ↑始動プログラムのおしり