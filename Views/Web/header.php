<header>
	<p>
		<a href="index.ctrl.php">Menu Principal</a>
    <?php
    if(isset($outédanlesite)) {
    foreach($outédanlesite as $page) {
      ?>
    <img src="images/arrow.png" alt=">"></img>
		<a href="<?= $page ?>.html"><?= $page ?></a>
  <?php } }?>
	</p>
	<img src="images/user.jpg"></img>
</header>
