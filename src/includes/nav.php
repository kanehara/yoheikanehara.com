<?php include('arrays.php'); ?>
<nav id="navEl">
<ul id="navHeader" class="nav masthead-nav">
    <?php
        foreach ($navItems as $item) {
            echo "<li><a href=$item[key]>$item[value]</a></li>";
        }
?>
</ul>
</nav>
