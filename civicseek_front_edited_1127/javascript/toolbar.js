<script>
document.addEventListener('DOMContentLoaded', function() {
  // プロフィールリンクのクリックイベント
  document.getElementById('profile-link').addEventListener('click', function(e) {
    e.preventDefault();
    showGrid('gridA');
  });

  // 設定リンクのクリックイベント
  document.getElementById('settings-link').addEventListener('click', function(e) {
    e.preventDefault();
    showGrid('gridB');
  });

  // ここに他のリンクのイベントリスナーを追加する

  function showGrid(gridId) {
    // すべてのグリッドを非表示にする
    var grids = document.querySelectorAll('.content > div');
    grids.forEach(function(grid) {
      grid.style.display = 'none';
    });

    // 指定されたグリッドを表示する
    document.getElementById(gridId).style.display = 'block';
  }
});
</script>
