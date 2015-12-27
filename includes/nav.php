<?php include('includes/arrays.php'); ?>
<nav>
<ul id="navHeader" class="nav masthead-nav">
    <?php
        foreach ($navItems as $item) {
            echo "<li id=\"$item[value]NavItem\"><a href=\"$item[key]\">$item[value]</a></li>";
        }
    ?>
</ul>
</nav>
