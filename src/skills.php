<?php include("includes/arrays.php"); ?>
<div class="purpleDownArrow"></div>
<div class="container">
    <h2 class="abraAppear">Skills</h2>
    <hr class="abraAppearHr"/>
    <h3 class="abraAppear">Programming</h3>
        <div class="row abraAppear" style="text-align:left;">
            <div class="col-xs-4">
                <ul class="skillsList">
                    <?php
                    foreach($skills[0] as $skill) {
                        echo("<li>$skill</li>");
                    }
                    ?>
                </ul>
            </div>
            <div class="col-xs-4">
                <ul class="skillsList">
                    <?php
                    foreach($skills[1] as $skill) {
                        echo("<li>$skill</li>");
                    }
                    ?>
                </ul>
            </div>
            <div class="col-xs-4">
                <ul class="skillsList">
                    <?php
                    foreach($skills[2] as $skill) {
                        echo("<li>$skill</li>");
                    }
                    ?>
                </ul>
            </div>
        </div>
    <hr class="abraAppearHr"/>
    <h3 class="abraAppear">Languages</h3>
        <div class="row abraAppear">
            <div class="col-xs-4">
                <ul class="skillsList">
                  <li>English<br/>(Fluent)</li>
                </ul>
            </div>
            <div class="col-xs-4">
                <ul class="skillsList">
                  <li>Japanese<br/>(Conversational)</li>
                </ul>
            </div>
            <div class="col-xs-4">
                <ul class="skillsList">
                  <li>German<br/>(Elementary)</li>
                </ul>
            </div>
        </div>
    <hr class='abraAppearHr'/>
</div>
